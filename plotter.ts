import * as math from 'mathjs';
import * as dfd from 'danfojs-node';
import * as plotly from 'plotly';

// Generate random data points
const randomData = math.random([100, 2], -1, 1);

// Create a DataFrame
const df = new dfd.DataFrame(randomData, { columns: ['Feature1', 'Feature2'] });

// Manipulate the data: Add a new column with the sum of Feature1 and Feature2
df.addColumn('Sum', df['Feature1'].add(df['Feature2']));

// Analyze the data: Calculate basic statistics
const stats = df.describe();
console.log(stats.toString());

// Plot the data
const dataPlotter = [
  {
    x: df['Feature1'].values,
    y: df['Feature2'].values,
    mode: 'markers',
    marker: {
      color: df['Sum'].values,
      colorscale: 'Viridis',
      colorbar: { title: 'Sum' },
    },
    type: 'scatter',
  },
];

const layout = {
  title: 'Scatter Plot of Random Data Points',
  xaxis: { title: 'Feature1' },
  yaxis: { title: 'Feature2' },
};

plotly.newPlot('plot', dataPlotter, layout).then((graphDiv) => {
  console.log('Plot created successfully');
}).catch((err) => {
  console.error('Error creating plot:', err);
});