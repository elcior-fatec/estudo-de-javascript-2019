const nums = [1, 2, 3, 4, 5]
const novosNums = new Array('...', 10, 11, 12, 13)

console.log(nums.concat(novosNums))

console.log([].concat(nums, 'item_1', 'item_2'))

console.log([0].concat(nums, novosNums).filter(n => !(n%2)))
