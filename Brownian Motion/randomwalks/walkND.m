% Simulates a N-dimensional random walk that starts at `startpos` and walks
% `steps` steps of length `stepsize`. Returns an array `path` listing all
% the positions it visited through during the walk.

function path = walkND(startpos, steps, stepsize)
    path = startpos;
    for i = 1:steps
        dir = randi(length(startpos)); % rand picks a dimension (1~N)
        pm1 = round(rand)*2-1; % rand picks -1 or 1
        startpos(dir) = startpos(dir) + stepsize*pm1;
        path = [path; startpos];
    end
end