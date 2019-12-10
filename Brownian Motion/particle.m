% Simulates a fluid in 1D with the following idealized properties:
%  (1) the particles' initial energy distribution follows the Boltzmann distribution
%  (2) the particles are identical
%  (3) the particles exert no field forces on each other
%  (4) all collisions are perfectly elastic
% All values are expressed in their appropriate SI units.

% To prevent having initial conditions where the particles overlap, we will start with the particles
% in an ordered matrix.

% The parameters used her are representative of glycerol molecules at room
% temperature.

% tf = time length of simulation

function allxs = particle(tf)

    KB = 1.38064852e-23; % Boltzmann constant
    T = 296.15; % Temperature

    N = 10; % Number of particles
    r = 3.1e-10; % Radius of each particle
    m = 1.53e-25; % Mass of each particle
    d = 4.95e-10; % Initial spacing between particles

    dt = tf*10^(-3);
    
    boxL = d*(N-1)/2;

    xs = -boxL:d:boxL;
    vs = norminv(rand(1,N))*sqrt(KB*T/m);
    disp(mean(vs));

    allxs = [];

    for t = 0:dt:tf
        allxs = [allxs;xs];
        for i = 1:length(xs)
            if (xs(i) >= boxL-r)
                vs(i) = -abs(vs(i));
            end
            if (xs(i) <= -boxL+r)
                vs(i) = abs(vs(i));
            end
            for j = i+1:length(xs)
                if (abs(xs(i)-xs(j)) <= 2*r)
                    temp = vs(i);
                    vs(i) = vs(j);
                    vs(j) = temp;
                    while (abs(xs(i)-xs(j)) <= 2*r)
                        if (xs(i)<xs(j))
                            xs(i) = xs(i)-r/10;
                        else
                            xs(j) = xs(j)-r/10;
                        end
                    end
                end
            end
        end
        xs = xs + vs * dt;
    end
    
    %disp("analyzed");
end