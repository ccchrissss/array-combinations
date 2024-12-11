function solve(arr) {
  
  let mappedArr = arr.map( e => new Set(e))

  return mappedArr.reduce( (acc, curr) => acc * curr.size, 1)

};

// console.log(solve([[1,2],[4],[5,6]]))
// console.log(solve([[1,2],[4,4],[5,6,6]]))
// console.log(solve([[1,2],[3,4],[5,6]]))
