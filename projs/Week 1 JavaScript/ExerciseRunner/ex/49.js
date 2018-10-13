// Implement the function numsSort(nums) this function returns a sorted
// array (without changing the given array)
// It works by looping through the array, finding minimum, splicing it out,
// and adding it to the new array.
// Read about how to sort an array yourself, by using the bubble sort
// algorithm, see here.
// copy the function, and make it use a normal while loop instead of a dowhile
// loop.

console.log('Ex 49 Solution');

var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function numsSort(nums) {
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        res.push(nums[i]);
    }
    bubbleSort(res);
    // console.log(res);
    return res;
}
function bubbleSort(a) {
    var swapped = true;
    while (swapped) {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    }
}

// bubbleSort(a);
console.log('Original Array: ', a);
console.log('Sorted array: ', numsSort(a));