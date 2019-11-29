% Simulates a 1-dimensional random walk that starts at `startpos` and walks
% `steps` steps of length `stepsize`. Returns an array `path` listing all
% the positions it visited through during the walk.

function path = walk1D(startpos, steps, stepsize)
    path = startpos;
    for i = 1:steps
        pm1 = round(rand*2-1); % randomly picks -1 or 1
        startpos = startpos + stepsize*pm1;
        path = [path, startpos];
    end
end