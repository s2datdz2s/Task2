function sumOfTopTwo(arr) {
    // Ensure the array has at least two elements
    if (arr.length < 2) {
        throw new Error('Array must contain at least two elements');
    }

    // Initialize two variables to hold the largest and second largest numbers
    let max1 = -Infinity, max2 = -Infinity;

    // Iterate through the array to find the two largest numbers
    for (let num of arr) {
        if (num > max1) {  // If the current number is greater than max1
            max2 = max1;   // Update max2 to the old max1
            max1 = num;    // Update max1 to the current number
        } else if (num > max2) {  // If the current number is not greater than max1 but is greater than max2
            max2 = num;    // Update max2 to the current number
        }
    }

    // Return the sum of the two largest numbers
    return max1 + max2;
}

// Example 1
let input1 = [1, 4, 2, 3, 5];
let output1 = sumOfTopTwo(input1);
console.log("Input 1:", input1);  // Input 1: [1, 4, 2, 3, 5]
console.log("Output 1:", output1);  // Output 1: 9
// Explanation: The two largest integers are 5 and 4. Their sum is 9.

// Example 2
let input2 = [-1, -4, -2, -3, -5];
let output2 = sumOfTopTwo(input2);
console.log("Input 2:", input2);  // Input 2: [-1, -4, -2, -3, -5]
console.log("Output 2:", output2);  // Output 2: -3
// Explanation: The two largest integers are -1 and -2. Their sum is -3.

// Example 3
let input3 = [7, 7, 7, 7, 7];
let output3 = sumOfTopTwo(input3);
console.log("Input 3:", input3);  // Input 3: [7, 7, 7, 7, 7]
console.log("Output 3:", output3);  // Output 3: 14
// Explanation: The two largest integers are 7 and 7. Their sum is 14.
