# Science Simulations
A collection of simulations based on famous labs.

So far, the simulations included are:
* [Luria-Delbrück Fluctuation Test](#luria-delbrück-fluctuation-test)
* Brownian Motion

## Luria-Delbrück Fluctuation Test

A simulator of the Luria-Delbrück Fluctuation Test, which showed that the "mutation hypothesis"--that mutations arose randomly independent of their environment--was correct, as opposed to the "acquired immunity hypothesis"--that mutations occured as an adaptive response to an environmental stimulus. Read more about the experiment here: https://en.wikipedia.org/wiki/Luria%E2%80%93Delbr%C3%BCck_experiment

Credit to my ISC231 course for teaching me about the experiment.

### How to Run
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

### Future Plans / Known Issues
* Due to handling the bacteria as discrete agents, the growth of the total bacteria population is not perfectly exponential.
* If you request an excessive number of rounds, have a large initial population, or have a large growth rate, the simulation may take a long time to run.

## Brownian Motion

(Preliminary README) Currently, just a simulation of N-dimensional random walks. Also provides visualization for 1D, 2D, and 3D cases.

### How to Use

The files in this project are `.m` files and require MATLAB to run.
* `walkND.m`: Simulates an N-dimensional walk given the number of dimensions, the starting position, the number of steps, and the step size. Returns an array containing all the positions visited during the walk.
* `walkNDanalysis.m`: Runs 100 simulations of 1000 step random walks, then calculates the mean final displacement and the mean final squared displacement, and also plots the mean displacement and the mean squared displacement over the number of steps.
* `walk1Dvisual.m`: Shows an animated graph of the position over step number.
* `walk2Dvisual.m`: Shows an animation of a point moving in a random walk in a 2D plane.
* `walk3Dvisual.m`: Shows an animation of a point moving in a random walk in a 3D space.

### Future Plans / Known Issues
* Adding a particle-based simulator of Brownian motion to show that it is analogous to a random walk
* Use the simulation with physical constants to find the diffusion constant of various substances in various environments
* Making the random walk omnidirectional rather than only going along the dimensional axes
