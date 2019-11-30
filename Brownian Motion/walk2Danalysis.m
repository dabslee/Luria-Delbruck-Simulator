% Runs 100 simulations of 2D walks of 1000 steps each, then does the
% following:
%  (1) Calculates the mean final displacement and mean final squared
%      displacement
%  (2) Plots the mean displacement as a function of the number of steps
%  (3) Plots the mean squared displacement as a function of the number of
%      steps
% It prints (1) to the command window, while saving (2),(3) as images.

simulations = 100;
startpos = [0,0];
steps = 1000;
stepsize = 1;

% Run the simulations
xs = zeros(simulations,steps+1);
for i = 1:simulations
    pos = walk2D(startpos, steps, stepsize);
    xs(i,:) = sqrt(pos(:,1).^2+pos(:,2).^2);
end
% Calculate the mean distance and mean square distance at every step #
xmean = mean(xs);
xsqmean = mean(xs.^2);

% Print the mean final displacement and mean final squared displacement
disp("Mean Final Displacement: " + xmean(end));
disp("Mean Final Squared Displacement: " + xsqmean(end));

% Plot the mean displacement as a function of the number of steps
plot(0:steps,xmean,'LineWidth',1);
format(gcf,"Mean displacement (\langle x \rangle) v. Step #",...
    "Step #","\langle x \rangle",[0,steps],[-50,50]);
saveas(gcf,"plots/xmean.png");

% Plot the mean squared displacement as a function of the number of steps
plot(0:steps,xsqmean,'LineWidth',1);
% Calculate the linear regression and plot that, too
tb = table((0:steps)',(xsqmean)');
lm = fitlm(tb,'linear');
coeffs = lm.Coefficients.Estimate;
hold on
plot(0:steps,coeffs(2)*(0:steps)+coeffs(1),'LineWidth',1);
hold off
disp(lm);
format(gcf,"Mean squared displacement (\langle x^2 \rangle) v. Step #",...
    "Step #","\langle x^2 \rangle",[0,steps],[0,max(xsqmean)]);
saveas(gcf,"plots/xsqmean.png");

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