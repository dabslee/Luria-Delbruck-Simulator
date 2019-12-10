% Simulates a fluid in 1D with the following idealized properties:
%  (1) the particles' initial energy distribution follows the Boltzmann distribution
%  (2) the particles are identical
%  (3) the particles exert no field forces on each other
%  (4) all collisions are perfectly elastic
% All values are expressed in their appropriate SI units. Also, one may note that (3) and (4) mean
% that the particles essentially do not interact with each other.

% To prevent having initial conditions where the particles overlap, we will start with the particles
% in an ordered matrix.

KB = 1.38064852e-23; % Boltzmann constant
T = 300; % Temperature

N = 500; % Number of particles
d = 0.5; % Initial spacing between particles
r = 0.03; % Radius of each particle
m = 1e-21; % Mass of each particle

dt = 0.01;
tf = 100;

xs = -d*(N-1)/2:d:d*(N-1)/2;
vs = norminv(rand(1,N))*sqrt(KB*T/m);

for t = 0:dt:tf
    for i = 1:length(xs)
        for j = i+1:length(xs)
            if (abs(xs(i)-xs(j)) <= 2*r)
                temp = vs(i);
                vs(i) = vs(j);
                vs(j) = temp;
                while (abs(xs(i)-xs(j)) <= 2*r)
                    if (xs(i)<xs(j))
                        xs(i) = xs(i)-0.1;
                    else
                        xs(j) = xs(j)-0.1;
                    end
                end
            end
        end
    end
    xs = xs + vs * dt;
    
    plot(xs,zeros(1,length(xs)),'k.','MarkerSize',15);
    hold on
    plot(xs(round(N/2)),0,'r.','MarkerSize',15);
    hold off
    xlim([-5,5]);
    drawnow;
    pause(0.01);
end