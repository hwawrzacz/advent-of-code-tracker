// Name your day object, and pass its number as a constructor parameter. 
// All days objects are scoped globally by default, so keep their names unique.
// You can basically replace all ocurrencies of upper case 'X' with your number.
// If you do it before you write any code, you will avoid potetnial renaming your variables.
// Also don't forget to link this file in index.html script tag. Otherwise it won't work ;)
const dayX = new Day(1);

dayX.result1 = () => {
  // Implement your resolution of the first part of the task
  // Use your input defined in inputs.js. Recommended naming convention is: inputDayX.

  // Don't forget to return the result
  return inputDayX.length;
}

dayX.result2 = () => {
  // Do the same for part two of the task.
  return Math.pow(inputDayX.length, 2);
}

// Call this method to append your result to HTML document
dayX.printResults();