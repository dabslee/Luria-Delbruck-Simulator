"""
GRAPHER.PY
Brandon Lee 2019
Displays an animation of the simulation.
"""

import math
import pygame
import time
import statistics

import engine

def event_handling():
    # Checks for and handles pygame events like window exiting and resizing
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            return
        if event.type == pygame.VIDEORESIZE:
            screen = pygame.display.set_mode((event.w, event.h), pygame.RESIZABLE)

def radius(area):
    # Returns the radius of a circle with the given area
    return math.sqrt(area/math.pi)

def animation(N0=100, k=0.05, a=0.01, noslides=3, norounds=50, mutation_hypothesis=True):
    """
    Displays an animation of the simulation.
    Arguments:
      N0 = Initial population size
      k = Growth rate
      a = Mutation rate
      noslides = Number of slides
      norounds = Number of rounds
      mutation_hypothesis = Whether the mutation hypothesis is being considered true or not, as
        opposed to the acquired immunity hypothesis
    """

    # Getting the numbers of the simulation from engine.py
    exposureround = 0 if mutation_hypothesis else (norounds-1)
    results = engine.acquired_immunity_hypothesis(N0, k, a, noslides, norounds, exposureround)

    # Determining appropriate canvas size
    spacing = -80
    efps = N0*math.exp(k*norounds) # "expected final population size"
    max_radius = radius(efps)
    scale = 200/max_radius
    canvas_size = [max(spacing+noslides*(int(max_radius*scale)*2+spacing),700), 500]

    # pygame setup
    pygame.init()
    screen = pygame.display.set_mode(canvas_size,pygame.RESIZABLE)
    pygame.display.set_caption('Luria-Delbruck Fluctuation Test Simulation')
    
    for roundnum in range(len(results)):
        screen.fill((255, 255, 255))

        # Showing the text about the round
        font = pygame.font.Font(None, 30)
        titlelabeltext = ("Mutation Hypothesis Simulation" if mutation_hypothesis
                                    else "Acquired Immunity Hypothesis Simulation")
        titlelabeltext += "  (N0=" + str(N0) + ", k=" + str(k) + ", a=" + str(a) + ")"
        titlelabel = font.render(titlelabeltext, True, (0, 0, 0))
        screen.blit(titlelabel, (10,10))
        roundlabel = font.render("Round: "+str(roundnum), True, (150, 150, 150))
        screen.blit(roundlabel, (10,35))
        mutationlabel = font.render("Mutating On: "+str(roundnum >= exposureround), True, (150, 150, 150))
        screen.blit(mutationlabel, (10,50))

        # Showing the text of the statistical analysis of the mutation percentages
        mpercentages = []
        for i in range(len(results[roundnum])):
            slide = results[roundnum][i]
            mpercentages.append(100*slide[1]/(slide[0]+slide[1]))
        statlabel = font.render("Mutation % Statistics", True, (0, 0, 0))
        screen.blit(statlabel, (10,400))
        mean = statistics.mean(mpercentages)
        avglabel = font.render("Mean: "+str(round(mean,2)), True, (150,150,150))
        screen.blit(avglabel, (10,425))
        if (noslides > 1):
            stdev = statistics.stdev(mpercentages)
            stdevlabel = font.render("Stdev: "+str(round(stdev,2)), True, (150,150,150))
            screen.blit(stdevlabel, (10,450))
            fanolabel = font.render("Fano-factor: "+str(round(mean/(stdev**2+10**(-10)),2)), True, (150,150,150))
            screen.blit(fanolabel, (10,475))

        # Drawing the circle graphs of the slides
        for i in range(len(results[roundnum])):
            slide = results[roundnum][i]
            totalrad = int(radius(slide[0]+slide[1])*scale)
            mutantrad = int(radius(slide[1])*scale)
            center = [int(max_radius*scale)*(i*2+1)-i*180,int(max_radius*scale)]

            pygame.draw.circle(screen, (50,200,50), center, totalrad)
            pygame.draw.circle(screen, (200,50,50), center, mutantrad)

            # The labels under the circles
            totalpoplabel = font.render("N(total)="+str(slide[0]+slide[1]), True, (150, 150, 150))
            screen.blit(totalpoplabel, (center[0]-60,center[1]+90))
            mutpoplabel = font.render("Mutated %="+str(100*slide[1]//(slide[0]+slide[1])), True, (150, 150, 150))
            screen.blit(mutpoplabel, (center[0]-60,center[1]+90+25))

        # Display screen and handle events
        pygame.display.flip()
        for i in range(10):
            time.sleep(0.01)
            event_handling()
            # Pause simulation when space key is held down
            while (pygame.key.get_pressed()[pygame.K_SPACE]):
                time.sleep(0.01)
                event_handling()

    # After simulation finishes, wait until pygame window is closed
    while (True):
        time.sleep(0.01)
        event_handling()