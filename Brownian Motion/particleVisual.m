xsize = size(allxs);

%for i = 1:xsize(1)
%    xs = allxs(i,:);
%    plot(xs,zeros(1,length(xs)),'k.','MarkerSize',35);
%    hold on
%    plot(xs(round(length(xs)/2)),0,'r.','MarkerSize',35);
%    hold off
%    xlim([-10^(-8),10^(-8)]);
%    drawnow;
%    pause(0.01);
%end