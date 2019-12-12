% Shows that norminv(rand) likely has a true mean of 0.
% Current setting has N=10^8 trials and takes about 5 seconds to run.
% If you increase N to 10^9 you get a higher precision (10^-5 order stdev)
% but takes about 4 minutes to run.

tic

N = 10^9; % trial number
a = 0.1; % significance factor

xs = norminv(rand(1,N));
mu = mean(xs); % sample mean
stdev = std(xs)/sqrt(N); % stdev of sample means
hconfint = stdev*norminv(1-a/2); % half the confidence interval

toc

% display results
disp("The population mean is within "...
    +num2str(hconfint)...
    +" of "...
    +num2str(mu)...
    +" with "+num2str((1-a)*100)+"% certainty");
if(hconfint>abs(mu))
    disp("We cannot reject the null hypothesis with significance factor a="+num2str(a));
else
    disp("We reject the null hypothesis with significance factor a="+num2str(a));
end

% plotting distribution
plothistogram = false;
if (plothistogram)
    [n,edges] = histcounts(xs, 'Normalization','pdf');
    edges = edges(2:end) - (edges(2)-edges(1))/2;
    plot(edges, n);
end
