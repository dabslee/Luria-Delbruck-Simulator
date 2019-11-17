# Luria-Delbrück Fluctuation Test
Brandon Lee 2019

A simulator of the Luria-Delbrück Fluctuation Test, which showed that the "mutation hypothesis"--that mutations arose randomly independent of their environment--was correct, as opposed to the "acquired immunity hypothesis"--that mutations occured as an adaptive response to an environmental stimulus. Read more about the experiment here: https://en.wikipedia.org/wiki/Luria%E2%80%93Delbr%C3%BCck_experiment

Credit to my ISC231 course for teaching me about the experiment.

## How to Run
To run the program, make sure you have Python 3.7 (32-bit) installed. You also need pygame, which, if you have Python PIP, you can install with the command `pip install pygame`. Once you have both these instlled, run the `main.py` file, a console app that launches the simulation.

Once opened, the program will prompt the user to choose whether to do an experiment simulating the mutation hypothesis or the acquired immunity hypothesis. To choose the former, enter `M`; to choose the latter, enter `A`.

Next, the program will ask the user whether to use the default experiment parameters or choose custom ones. The default parameters are as follows:
* Initial population (N₀) = 100
* Growth rate (k) = 0.05
* Mutation rate (a) = 0.01
* Number of slides = 3
* Number of generations/rounds = 50
To choose the default parameters, enter `D`; to enter custom ones, enter `C`. If you choose the custom option, you will be prompted to enter values for all the above parameters.

Once you have done all the above, a new window should open running the simulation. The green regions represent the nonmutated population, while the red circles represent the mutated population. You can pause the simulation at any time by holding down the space bar.

## Known Issues
* Due to handling the bacteria as discrete agents, the growth of the total bacteria population is not perfectly exponential.
* If you request an excessive number of rounds, have a large initial population, or have a large growth rate, the simulation may take a long time to run.
