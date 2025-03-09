/**
 * This app uses TypeScript and D3.js to generate a set of data points and plot them on a graph.
 */

// Import the required libraries
import * as d3 from 'd3';
import * as d3Array from 'd3-array';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';
import * as d3Selection from 'd3-selection';
import * as d3Random from 'd3-random';

/**
 * Create a function 'gendata' that generates a set of 100 data points (x, f(x)) and returns them as an array of objects.
 * Arguments:
 * - 'x_range' is a tuple of two integers representing the range of x values to generate.
 * Returns:
 * - An array of objects with two properties, 'x' and 'y'.
 * Details:
 * - 'x' values are generated randomly between x_range[0] and x_range[1].
 * - 'y' values are generated as a non-linear function of x with excessive random noise: y = x ^ 1.5 + noise.
 * - The array is sorted by the 'x' values.
 * - The array has 100 elements.
 * Error Handling:
 * - Throw an Error if x_range is not a tuple of two integers.
 * - Throw an Error if x_range[0] is greater than x_range[1].
 * Examples:
 * - gendata([0, 100]) generates an array with 'x' values between 0 and 100.
 * - gendata([-100, 100]) generates an array with 'x' values between -100 and 100.
 */


// Define the interface for the data points
interface DataPoint { 
    x: number;
    y: number;
}
// Define the function gendata
function gendata(x_range: [number, number]): DataPoint[] {
    if (!Array.isArray(x_range) || x_range.length !== 2 || typeof x_range[0] !== 'number' || typeof x_range[1] !== 'number') {
        throw new Error('x_range must be a tuple of two integers.');
    }
    if (x_range[0] > x_range[1]) {
        throw new Error('x_range[0] must be less than or equal to x_range[1].');
    }

    const x = d3Array.range(100).map(() => d3Random.randomInt(x_range[0], x_range[1])());
    const y = x.map(xVal => Math.pow(xVal, 1.5) + d3Random.randomNormal(0, 100)());

    const data: DataPoint[] = x.map((xVal, i) => ({ x: xVal, y: y[i] }));
    data.sort((a, b) => a.x - b.x);

    return data;
}

/**
 * Create a function 'plotdata' that plots the data points on a graph.
 * Arguments:
 * - 'data' is an array of objects with 'x' and 'y' properties.
 * Returns:
 * - None
 */
 
// Define the function plotdata to plot the data points
function plotdata(data: DataPoint[]): void {
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const xScale = d3Scale.scaleLinear()
        .domain(d3Array.extent(data, d => d.x) as [number, number])
        .range([0, width]);

    const yScale = d3Scale.scaleLinear()
        .domain(d3Array.extent(data, d => d.y) as [number, number])
        .range([height, 0]);

    const svg = d3Selection.select('body').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3Axis.axisBottom(xScale));

    svg.append('g')
        .call(d3Axis.axisLeft(yScale));

    svg.selectAll('.dot')
        .data(data)
        .enter().append('circle')
        .attr('class', 'dot')
        .attr('cx', d => xScale(d.x))
        .attr('cy', d => yScale(d.y))
        .attr('r', 3);

    svg.append('text')
        .attr('x', width / 2)
        .attr('y', height + margin.bottom)
        .style('text-anchor', 'middle')
        .text('x');

    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - margin.left)
        .attr('x', 0 - (height / 2))
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .text('f(x)');
}