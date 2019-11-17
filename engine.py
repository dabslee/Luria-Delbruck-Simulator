"""
ENGINE.PY
Brandon Lee 2019
Runs the actual simulation, producing the numbers used in grapher.py.
"""

import random

STOCHASTIC_GROWTH = False # If true, determines duplication per individual bacterium.
STOCHASTIC_MUTATION = True # If true, determines mutation per individual bacterium.

def runround(population, k, a, mutation=False):
    """
    Runs the simulation for a single dish for one generation.
    Arguments:
      population = Initial population of bacterium, represented by a boolean list. False = nonmutated,
        True = mutated.
      k = Growth rate
      a = Mutation rate
      mutation = Whether mutation goes on or not
    Returns:
      A boolean list the same format as the population argument after one round of mutation and growth.
    """
    newpopulation = population.copy()

    # Mutation
    if (mutation):
        if (STOCHASTIC_MUTATION):
            for nonmutated in range(population.count(False)):
                if (random.random() < a):
                    newpopulation.remove(False)
                    newpopulation.append(True)
        else:
            for i in range(int(population.count(False)*a)):
                newpopulation.remove(False)
                newpopulation.append(True)
        population = newpopulation

    # Growth
    if (STOCHASTIC_GROWTH):
        for bacterium in population:
            if (random.random() < k):
                newpopulation.append(bacterium)
    else:
        for nonmutated in range(int(population.count(False)*k)):
            newpopulation.append(False)
        for mutated in range(int(population.count(True)*k)):
            newpopulation.append(True)
    return newpopulation

def acquired_immunity_hypothesis(N0, k, a, noslides, norounds, exposureround):
    """
    ACQUIRED_IMMUNITY_HYPOTHESIS.PY
    Runs simulation assuming that acquired immunity hypothesis is true.
    Arguments:
      N0 = initial population size
      k = Growth rate
      a = Mutation rate
      noslides = number of slides to divide population up into
      norounds = number of rounds
      exposureround = round number (0 ~ rounds-1) at which to expose to mutation
    Returns:
      A list of the following as elements:
        A list of tuples (no. unmutated, no. mutated) of each slide.
      at the end of each round.
    """
    # divide up population into slides
    slides = [[False for i in range(N0//3)] for s in range(noslides)]

    returnvalue = list()
    state = list()
    for slide in slides:
        state.append((slide.count(False), slide.count(True)))
    returnvalue.append(state)

    # run norounds rounds
    for round in range(norounds):
        state = list()
        for i in range(len(slides)):
            slides[i] = runround(slides[i], k, a, round >= exposureround)
        for slide in slides:
            state.append((slide.count(False), slide.count(True)))
        returnvalue.append(state)

    return returnvalue

def mutation_hypothesis(N0, k, a, noslides, norounds):
    """
    MUTATION_HYPOTHESIS.PY
    Runs simulation assuming that mutation hypothesis is true.
    Essentially the acquired_immunity_hypothesis simulation but starting mutation from beginning.
    """
    return acquired_immunity_hypothesis(N0, k, a, noslides, norounds, 0)
