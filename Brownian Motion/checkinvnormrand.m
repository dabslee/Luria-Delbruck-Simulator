N = 10^8;
xs = norminv(rand(1,N));

[n,edges] = histcounts(xs, 'Normalization','pdf');
edges = edges(2:end) - (edges(2)-edges(1))/2;
plot(edges, n);

mean(xs)
std(xs)/N