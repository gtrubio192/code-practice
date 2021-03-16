/* 

Given an array of integers, return a new array such that
each element at index i of the new array is the product of
all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], 
the expected output would be [120, 60, 40, 30, 24].
If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?

*/

const array_of_new_products = (arr) => {
  // loop 
  //  capture current index
  //    multiply all other elements and get result
  //    place result in new array at index of old array

  let products = arr.map( (num, i) => {

    let leftArray = arr.slice(0,i);
    let rightArray = arr.slice(i+1);
    let newArr = leftArray.concat(rightArray);
    console.log("**********************************************************")
    console.log("New joined array: ", newArr);
    let productTally = 1;

    newArr.forEach(elem => {
      console.log(`Multiplying ${elem} * ${productTally}`)
      productTally = elem*productTally;
      console.log(`Current products: ${productTally}`)
    })
    
    return productTally;

  })

  return products;

}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3,2,1];
console.log(array_of_new_products(arr2));

