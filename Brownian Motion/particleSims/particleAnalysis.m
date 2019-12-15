simulations = 100;

N = 500;
m = 1e-19;
r = 0.3;
d = 2;
tf = 100;
dt = tf*10^(-3);

allxsred = [];
for s = 1:simulations
    disp("Running simulation #" + num2str(s));
    allxs = particle(N, m, r, d, tf, dt);
    xsize = size(allxs);
    xsred = (allxs(:,ceil(xsize(2)/2))-allxs(1,ceil(xsize(2)/2)))';
    allxsred = [allxsred; xsred];
end

mds = mean(allxsred);
msds = mean(allxsred.^2);

figure(1);
plot((1:length(mds))*dt,mds/d);
title("Mean distance / Initial Spacing v. Time");
xlabel("Time (s)");
ylabel("MD/d");
set(gcf,'color','w');

figure(2);
times = (1:length(msds))*dt;
plot(times,msds/d);
tb = table((times)',(msds/d)');
lm = fitlm(tb,'linear')
coeffs = lm.Coefficients.Estimate;
hold on
plot(times,coeffs(1)+coeffs(2)*times);
hold off
title("Mean squared distance / Initial Spacing v. Time");
xlabel("Time (s)");
ylabel("MSD/d");
set(gcf,'color','w');