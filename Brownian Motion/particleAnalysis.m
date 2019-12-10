simulations = 10;

tf = 10^(-12);

allxsred = [];
for s = 1:simulations
    disp(s);
    allxs = particle(tf);
    xsize = size(allxs);
    xsred = (allxs(:,ceil(xsize(2)/2))-allxs(1,ceil(xsize(2)/2)))';
    allxsred = [allxsred; xsred];
end

mds = mean(allxsred);
msds = mean(allxsred.^2);

figure(1);
plot((1:length(mds))*tf*10^(-2),mds);
title("Mean distance v. Time");
xlabel("Time (s)");
ylabel("MD (m)");
set(gcf,'color','w');

figure(2);
plot((1:length(msds))*tf*10^(-2),msds);
title("Mean squared distance (MSD) v. Time");
xlabel("Time (s)");
ylabel("MSD (m)");
set(gcf,'color','w');