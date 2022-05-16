function hasTargetSum(array, target) {
 const seenNumbers = {}

 for (const num of array) {
    const comlepemet = target - num;
    if (seenNumbers[comlepemet]) return true
    seenNumbers[num] = true
  }
return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
EXAMPLE!!!
hasTargetSum([1,2,3,4], 6)

seenNumbers = {

}
seenNumbers is an empty object that has the numbers in the array added to it if
the object doesnt have a key that is comlpimentary. So for instance since 1
doesnt have a compliment number in seen arrary yet because it is created as an empty
object it will not return anything and will be added to the seenNumbers object as 
a key woth a value as true(not as important as it being the key)

seenNumbers = {
  1: true
}

next would be 2, 2s complientary number would be 4 and after checking the object
does not have a key of 4 so it is added to the object

seenNumbers ={
  1: true
  2: true
}

next 3, same deal no second 3 and its not there so its added

seenNumbers{
  1: true
  2: true
  3: true
}

next would be 4 but aha its complimentary number is 2 and that means we return true 

  create an object to keep track of the numbers we have already seen
  iterate through each number in the array
    for the current num identify a compliment that adds to the
    target (comp = target - num)
    check if any key on our object is the compliment
      if so return true
      otherwise add the number to the object

  if no number matchs and is a compliment then return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
