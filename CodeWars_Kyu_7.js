function solution(nums){
  return (nums === [] || nums === null || nums === "nil") ? [] : nums.sort(function (a , b) {return a - b})
}

console.log(solution([1,2,3,10,5]));
console.log(solution(null));
console.log(solution("nil"));
console.log(solution([]));
console.log(solution([20, 2, 10]));
console.log(solution([2, 20, 10]));
