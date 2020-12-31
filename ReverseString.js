function reverseString(str) {
  const reverseStr = str.split('').reverse().join('')
  return reverseStr;
}

// I chose to chain three methods together in order to create the dryest version of this algo. 
//Step 1: inizialize with a new variable of reverseStr
//Step 2: take the argument (in this case "str") and attatch it to our first method, the split() method. 
// --- The split() method with take a string and turn it into an array of letters. By leaving qoutations in the parenthasis, it telling the array to seperate each letter as its own index
//Step 3: chain the reverse() method. The reverse method will reverse the array you just created. Instead of [h, e, l, l, o] it will now read as [o, l, l, e, h]
//Step 4: chain the join() method. The join method will take the array and turn it back into a string. 
//Step 5: return the variable you used to initialize the methods. 

reverseString("hello");