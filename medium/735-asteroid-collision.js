var asteroidCollision = function(asteroids) {
  const stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    const last = stack[stack.length - 1], cur = asteroids[i];
    if (!stack.length || last < 0 || cur > 0) stack.push(cur);
    else if (-cur == last) stack.pop();
    else if (-cur > last) {
      stack.pop();
      i--;
    }
  }
  
  return stack;
};

console.log(asteroidCollision([10,2,-5]));