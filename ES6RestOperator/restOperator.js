//If not sure how many argument that are going to be pushed to a function
function add1(nums) {
  //code only out put first value
  console.log(nums);
  //previous way of
  console.log(arguments);
}
add1(4, 5, 6, 14);

function add(...nums) {
  console.log(nums);
}
add(4, 5, 6, 14);
