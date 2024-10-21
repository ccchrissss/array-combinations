function solve(arr) {
  
  let arrOfArrs = arr.map( e => new Set(e) )

  // console.log(arrOfArrs)

  // arrOfArrs = arrOfArrs.map( e => e.size )

  // console.log(arrOfArrs)

  let sum = arrOfArrs.reduce( (a,c) => a * c.size, 1 )

  return sum

};

solve( [[1,2],[4],[5,6,]] )


// take in an array of arrays
// return the number of unique arrays that can be made by choosing exactly one element from each array
// e.g. solve( [[1,2],[4],[5,6]] )    results in 4
    // [1,4,5]  [1,4,6]  [2,4,5]  [2,4,6]

// declare a variable called arrOfArrs, set it to map through the outer array, replacing each element with a Set of the original element
// reduce through the new outer array, multiplying the length of each sub array together


