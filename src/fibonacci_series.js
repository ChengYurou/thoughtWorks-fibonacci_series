'use strict';

function fibonacci_series(n) {
  var fibonacci_array = [];

  for (var i = 0; i <= n; i++) {
    fibonacci_array.push(get_fibonacci(i));
  }

  return fibonacci_array;
}

function get_fibonacci(n) {

  if (n === 0) {

    return 0;
  }
  if (n === 1) {

    return 1;
  }

  return get_fibonacci(n - 2) + get_fibonacci(n - 1);
}

module.exports = fibonacci_series;
