% Simulates a number of 1D fluids, then plots the mean displacement and 
% mean-squared-distance over time to show that they are constant at 0 and
% linear, respectively.

simulations = 500;

load water_parameters
f = ceil(N/2);
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

plot((1:length(mds))*dt,mds/d,'b','LineWidth',1);
times = (1:length(msds))*dt;
hold on
tb = table((times)',(msds/d^2)');
lm = fitlm(tb,'linear')
coeffs = lm.Coefficients.Estimate;
plot(times,coeffs(1)+coeffs(2)*times,'r--','LineWidth',1);
plot(times,msds/d^2,'k','LineWidth',1);
hold off
xlabel("Time (s)");
ylabel("Ratio");
formatgraph(gcf,xlims,ylims);

function formatgraph(fig, xlims, ylims)
    xlim(xlims);
    ylim(ylims);
    set(fig,'color','w');
    set(findall(gcf,'-property','FontSize'),'FontSize',14);
end