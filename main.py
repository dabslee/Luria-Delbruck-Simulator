"""
MAIN.PY
Brandon Lee 2019
Allows the user to run the simulation from a console.
"""

import grapher

userinput = input("\nMutation hypothesis (M) or acquired immunity hypothesis (A)? ")
muthyp = True if userinput.upper()=='M' else False

userinput = input("Default parameters (D) or custom (C)? ")
if (userinput.upper() == 'C'):
    print("Enter the following parameters.")
    N0 = int(input("Initial population (N0): "))
    k = float(input("Growth rate (k): "))
    a = float(input("Mutation rate (m): "))
    noslides = int(input("Number of slides: "))
    norounds = int(input("Number of rounds: "))

    grapher.animation(N0, k, a, noslides, norounds, mutation_hypothesis=muthyp)
else:
    grapher.animation(mutation_hypothesis=muthyp)