N = 500;
m = 1e-19;
r = 0.3;
d = 2;
tf = 100;
dt = tf*10^(-3);
allxs = particle(N, m, r, d, tf, dt);

showspeed = 1;
xsize = size(allxs);
for i = 1:showspeed:xsize(1)
    xs = allxs(i,:);
    plot(xs,zeros(1,length(xs)),'k.','MarkerSize',10);
    hold on
    plot(xs(ceil(length(xs)/2)),0,'r.','MarkerSize',10);
    hold off
    xline(-d*(N-1)/2-r);
    xline(d*(N-1)/2+r);
    xlim([-d*(N-1)/20,d*(N-1)/20]);
    set(gcf, 'Position',  [100,400,1200,100]);
    drawnow;
    pause(0.01);
end