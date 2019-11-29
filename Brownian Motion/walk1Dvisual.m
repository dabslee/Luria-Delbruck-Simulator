% Provides a visual simulations of a random walk in 1-dimension.
% If animate=true, shows an animation. If false, just shows the final
% result instantly.
animate = false;

startpos = 0;
steps = 1000;
stepsize = 1;
path = walk1D(startpos, steps, stepsize);

for i = 1:steps
    if (animate || i == steps)
        plot(0:i-1,path(1:i));
        title("1D Random Walk");
        xlabel("Step #");
        ylabel("Position");
        xlim([0,steps]);
        ylim([min(path),max(path)]);
        set(gcf,'color','w');
        pause(0.01);
    end
end