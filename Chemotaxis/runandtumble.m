% runandtumble.m: Simulates a run-and-tumble chemotaxis.

totaltime = 5000; % total number of steps of simulation
pos = zeros(1,5000); % array that holds all position values
dir = 1; % current direction of movement
lastconcs = [0,0,0,0]; % memory of the last four concentrations
for t = 2:totaltime        
    % update concentration memory
    lastconcs(1) = [];
    % linear gradient where c=x
    lastconcs = [lastconcs,pos(t-1)];

    % decide to run or tumble
    run = false;
    if (lastconcs(end) > lastconcs(1))
        if (rand < 0.75) % run with prob 0.75
            run = true;
        end
    elseif (lastconcs(end) == lastconcs(1))
        if (rand < 0.5) % run with prob 0.5
            run = true;
        end
    else
        if (rand < 0.25) % run with prob 0.25
            run = true;
        end
    end

    % run or tumble
    if (run)
        pos(t) = pos(t-1) + dir;
    else
        if (rand < 0.5)
            dir = -dir;
        end
        pos(t) = pos(t-1);
    end
end

% full plot
plot(1:numel(pos),pos);
set(gcf,'color','w');
xlabel("time step");
ylabel("position");
saveas(gcf,"runandtumble_fullplot.png");
% zoomed in
plot(1:numel(pos),pos);
xlim([0,100]);
set(gcf,'color','w');
xlabel("time step");
ylabel("position");
saveas(gcf,"runandtumble_zoomed.png");
