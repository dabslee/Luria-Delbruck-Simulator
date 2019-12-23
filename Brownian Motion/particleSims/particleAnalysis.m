% Simulates a number of 1D fluids, then plots the mean displacement and 
% mean-squared-distance over time to show that they are constant at 0 and
% linear, respectively.

simulations = 1000;

load water_parameters
f = ceil(N/2);
boundgraphs = false;
xlims = [0,2e-11];
ylims = [-1,15];

allxsred = zeros(N,round(tf/dt)+1);
for s = 1:simulations
    disp("Running simulation #" + num2str(s));
    allxs = particle(N, m, r, d, tf, dt, f);
    xsize = size(allxs);
    xsred = (allxs(:,ceil(xsize(2)/2))-allxs(1,ceil(xsize(2)/2)))';
    allxsred(s,:) = xsred;
end

mds = mean(allxsred);
msds = mean(allxsred.^2);

figure(1);
plot((1:length(mds))*dt,mds/d);
title("Mean distance / Initial Spacing v. Time");
xlabel("Time (s)");
ylabel("MD/d");
if (boundgraphs)
    xlim(xlims);
    ylim(ylims);
end
set(gcf,'color','w');

figure(2);
times = (1:length(msds))*dt;
plot(times,msds/d^2);
tb = table((times)',(msds/d^2)');
lm = fitlm(tb,'linear')
coeffs = lm.Coefficients.Estimate;
hold on
plot(times,coeffs(1)+coeffs(2)*times);
hold off
title("Mean squared distance / Square Initial Spacing v. Time");
xlabel("Time (s)");
ylabel("MSD/d^2");
if (boundgraphs)
    xlim(xlims);
    ylim(ylims);
end
set(gcf,'color','w');