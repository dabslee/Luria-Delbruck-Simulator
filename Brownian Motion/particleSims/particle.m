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
% f = Particle index under focus

function allxs = particle(N, m, r, d, tf, dt, f)

    KB = 1.38064852e-23; % Boltzmann constant
    T = 296.15; % Temperature
    
    boxL = d*(N-1)/2+r;

    xs = -boxL+r:d:boxL-r;
    vs = normrnd(0,1,[1,N])*sqrt(KB*T/m);

    allxs = zeros(round(tf/dt)+1,N);

    for t = 0:dt:tf
        allxs(round(t/dt)+1,:) = xs;
        for i = 1:length(xs)
            if (xs(i) >= boxL-r)
                vs(i) = -abs(vs(i));
            end
            if (xs(i) <= -boxL+r)
                vs(i) = abs(vs(i));
            end
            if i == f
                for j = 1:length(xs)
                    if i == j
                        continue
                    end
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
        end
        xs = xs + vs * dt;
    end
end