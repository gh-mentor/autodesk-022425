/**
 * This app uses TypeScript and D3.js to generate a set of data points and plot them on a graph.
 */

Step 1: Create gendata function
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

 Step 2: Create plot function
 /**
 * Create a function 'plotdata' that plots the data points on a graph.
 * Arguments:
 * - 'data' is an array of objects with 'x' and 'y' properties.
 * Returns:
 * - None
 */