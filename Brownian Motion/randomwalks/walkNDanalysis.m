% Runs 100 simulations of ND walks of 1000 steps each, then does the
% following:
%  (1) Calculates the mean final displacement and mean final squared
%      displacement
%  (2) Plots the mean displacement as a function of the number of steps
%  (3) Plots the mean squared displacement as a function of the number of
%      steps
% It prints (1) to the command window, while saving (2),(3) as images.

N = 3;
simulations = 100;
startpos = zeros(1,N);
steps = 1000;
stepsize = 1;

% Run the simulations
xs = zeros(simulations,steps+1,N);
for i = 1:simulations
    pos = walkND(startpos, steps, stepsize);
    xs(i,:,:) = pos;
end
% Calculate the mean distance and mean square distance at every step #
xmean = mean(xs);
xsqmean = mean(xs.^2);

% Print the mean final displacement and mean final squared displacement
disp("Mean Final Displacement: " + xmean(end));
disp("Mean Final Squared Displacement: " + xsqmean(end));

% Plot the mean displacement as a function of the number of steps
figure(1);
hold on
for n = 1:N
    plot(0:steps,xmean(1,:,n),'LineWidth',1);
end
hold off
format(gcf,"Mean displacement (\langle x \rangle) v. Step #",...
    "Step #","\langle x \rangle",[0,steps],[-50,50]);

% Plot the mean squared displacement as a function of the number of steps
figure(2);
hold on
for n = 1:N
    plot(0:steps,xsqmean(1,:,n),'LineWidth',1);
end
hold off
% Calculate the linear regression and plot that, too
disp("R^2 values for linear fits:");
hold on
for n = 1:N
    tb = table((0:steps)',(xsqmean(1,:,n))');
    lm = fitlm(tb,'linear');
    coeffs = lm.Coefficients.Estimate;
    disp(lm.Rsquared.Ordinary);
    plot(0:steps,coeffs(2)*(0:steps)+coeffs(1),'LineWidth',1);
end
hold off
format(gcf,"Mean squared displacement (\langle x^2 \rangle) v. Step #",...
    "Step #","\langle x^2 \rangle",[0,steps],[0,max(xsqmean,[],'all')]);

% A function that whitens the figure background and sets the font sizes
function format(fig, title_arg, xlabel_arg, ylabel_arg, xlim_arg, ylim_arg)
    title(title_arg);
    xlabel(xlabel_arg);
    ylabel(ylabel_arg);
    xlim(xlim_arg);
    ylim(ylim_arg);
    set(findall(fig,'-property','FontSize'),'FontSize',14);
    set(fig,'color','w');
end