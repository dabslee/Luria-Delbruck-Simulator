% Simulates a fluid in 1D with the following idealized properties:
%  (1) the particles' initial energy distribution follows the Boltzmann distribution
%  (2) the particles are identical
%  (3) the particles exert no field forces on each other
%  (4) all collisions are perfectly elastic
% All values are expressed in their appropriate SI units.

% To prevent having initial conditions where the particles overlap, we will start with the particles
% in an ordered matrix.

% N = Number of particles
% r = Radius of each particle
% m = Mass of each particle
% d = Initial spacing between particles

function allxs = particle(N, m, r, d, tf, dt)

    KB = 1.38064852e-23; % Boltzmann constant
    T = 296.15; % Temperature
    
    boxL = d*(N-1)/2+r;

    xs = -boxL+r:d:boxL-r;
    vs = norminv(rand(1,N))*sqrt(KB*T/m);

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
end