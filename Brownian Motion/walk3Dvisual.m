% Provides a visual simulations of a random walk in 3D.
% If animate=true, shows an animation. If false, just shows the final
% result instantly.
animate = true;

startpos = [0,0,0];
steps = 1000;
stepsize = 1;
path = walkND(startpos, steps, stepsize);

for i = 1:steps
    if (animate || i == steps)
        plot3(path(1:i,1),path(1:i,2),path(1:i,3),'k--');
        hold on
        plot3(path(i,1),path(i,2),path(i,3),'r.','MarkerSize',20);
        hold off
        title("3D Random Walk");
        xlabel("Step #");
        ylabel("Position");
        xlim([min(path(:,1)),max(path(:,1))]);
        ylim([min(path(:,2)),max(path(:,2))]);
        zlim([min(path(:,3)),max(path(:,3))]);
        set(gcf,'color','w');
        pause(0.01);
    end
end