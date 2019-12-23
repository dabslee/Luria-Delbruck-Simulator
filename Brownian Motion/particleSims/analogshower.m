sims = 100;
dlags = 1;
maxlags = 100;
bitlength = 100;

load water_parameters
dt = 0.01*dt;
f = ceil(N/2);

allps = zeros(sims,length(1:dlags:maxlags));

for s = 1:sims
    
    disp(s);

    allxs = particle(N, m, r, d, tf, dt,f);
    sizexs = size(allxs);
    redxs = allxs(:,ceil(length(sizexs(2))/2));

    ps = zeros(length(1:dlags:maxlags),1);

    j = 1;
    for i = 1:dlags:maxlags
        framelength = i;
        frames = redxs(1:framelength:length(redxs));
        frames1 = frames(1:2:length(frames));
        frames2 = frames(2:2:length(frames));
        minlen = min(length(frames1),length(frames2));
        bits = frames1(1:minlen) > frames2(1:minlen);

        [h,p] = runstest(bits(end-bitlength+1:end));
        ps(j) = p;

        j = j + 1;
    end
    
    allps(s,:) = ps;
    
end

meanps = mean(allps);
plot((1:dlags:maxlags)*dt, meanps);
xlabel("Time lag (s)");
ylabel("\langle p_0 \rangle");
set(gcf,'color','w');