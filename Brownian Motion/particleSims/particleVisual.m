% Shows an animation of a fluid in 1D, with one of the particles
% highlighted red to clearly show its behavior.

load water_parameters
dt = 0.01*dt;

f = ceil(N/2);
allxs = particle(N, m, r, d, tf, dt, f);
xsize = size(allxs);

showspeed = 100;
for i = 1:showspeed:xsize(1)
    xs = allxs(i,:);
    plot(xs,zeros(1,length(xs)),'k.','MarkerSize',10);
    hold on
    plot(xs(ceil(length(xs)/2)),0,'r.','MarkerSize',10);
    hold off
    xline(-d*(N-1)/2-r);
    xline(d*(N-1)/2+r);
    xlim([-d*(N-1)/2,d*(N-1)/2]);
    set(gcf, 'Position',  [100,400,1200,100]);
    drawnow;
    pause(0.01);
end