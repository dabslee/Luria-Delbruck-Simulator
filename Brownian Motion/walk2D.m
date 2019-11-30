% Simulates a 2-dimensional random walk that starts at `startpos` and walks
% `steps` steps of length `stepsize`. Returns an array `path` listing all
% the positions it visited through during the walk.

function path = walk2D(startpos, steps, stepsize)
    path = startpos;
    for i = 1:steps
        dir = round(rand+1); % rand picks horizontal (1) or vertical (2)
        pm1 = round(rand*2-1); % rand picks -1 or 1
        startpos(dir) = startpos(dir) + stepsize*pm1;
        path = [path; startpos];
    end
end