% Simulates a number of 1D fluids, then plots the mean displacement and 
% mean-squared-distance over time to show that they are constant at 0 and
% linear, respectively.

simulations = 500;

load water_parameters
f = ceil(N/2);
xlims = [0,2e-11];
ylims = [-3,18];

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

std11 = std(allxsred/d)/sqrt(simulations)*5;
std21 = std(allxsred.^2/d^2)/sqrt(simulations)*5;
std1 = NaN(length(std11),1);
std2 = NaN(length(std21),1);
std1(1:2:end) = std11(1:2:end);
std2(1:2:end) = std21(1:2:end);

e = errorbar((1:length(mds))*dt,mds/d,std1,'b','LineWidth',1,'CapSize',0);
e.Bar.LineStyle = 'dotted';
times = (1:length(msds))*dt;
hold on
tb = table((times)',(msds/d^2)');
lm = fitlm(tb,'linear')
coeffs = lm.Coefficients.Estimate;
plot(times,coeffs(1)+coeffs(2)*times,'r--','LineWidth',1);
e = errorbar(times,msds/d^2,std2,'k','LineWidth',1,'CapSize',0);
e.Bar.LineStyle = 'dotted';
hold off
xlabel("Time (s)");
ylabel("Ratio");
xlim(xlims);
ylim(ylims);
set(gcf,'color','w');
set(findall(gcf,'-property','FontSize'),'FontSize',14);