// It contains the programs with the code, it's believed that the codes can be further optimized.
// @BiswaRanjan Samal

/*
    Removing cosecutive characters from a string
    input : hii 
    output: h
*/

// // Start ---->
function filterText(text, slNo){
    let index = slNo ?? 0;
    if(index != text.length){
        if(index < text.length && (index+1) != length){
            if(text[index] == text[index+1]) {text.splice(index, 2)}
            else {index++}
        }
        filterText(text, index)
    }else{
        let updtdData = text.join('').toString();
        console.log("Else Block --->",updtdData);
        return updtdData;
    }
}
function callFilterText(text){
    filterText(text.split(''));
};
callFilterText("habcaadfegghiiklmmmmnopi");

// Finish ---->

/* 
    Write a program which will take two parameters, Array of numbers and a number, 
    we need to find out the combination of elements available in the array whoose sum results as the second parmaeter
    input: findNum([1,2,3,4], 5)
    output: 1 + 4 == 5, 2 + 3 == 5
*/

// Start ---->
function findNum(arr , rslt){
    for(var i = 0; i < arr.length; i++){
        for(var j = i; j < arr.length; j++){
            let sum = arr[i] +arr[j]
            if(sum == rslt){
                console.log(`${arr[i]} + ${arr[j]} == ${rslt}`)
            }
        }
    }
}

findNum([1,2,3,4,5],5)
// Finish ---->


/*
    Write a program which will simulate the atm cash dispatch, 
    for example we need find out the minimum number of notes to be released to the customers with available denominations.
    Available Denominations: [100, 200, 500, 2000]
    input: 2700
    output: {2000:1, 500:1, 200:1}
*/

// Start ---->
function wihdrawCash(newAmnt, opt){ 
    console.log(newAmnt, opt)
    if(newAmnt > 2000){
         opt[2000] = Math.floor(newAmnt / 2000);
         newAmnt = newAmnt - 2000* (opt[2000]); 
    }
    else if(newAmnt > 500){
        opt[500] = Math.floor(newAmnt / 500);
        newAmnt = newAmnt - 500* (opt[500]); 
        console.log("(newAmnt > 500  -->",newAmnt);
   }
   else if(newAmnt > 200){
    opt[200] = Math.floor(newAmnt / 200);
    newAmnt = newAmnt - 200* (opt[200]);
    console.log("(newAmnt > 200  -->",newAmnt);
    }
    else if(newAmnt > 100){
        opt[100] = Math.floor(newAmnt / 100);
        newAmnt = newAmnt - 100* (opt[100]);
    }
    console.log("newAmnt -->",newAmnt)
    if(newAmnt > 0){
        console.log(newAmnt, opt)
        wihdrawCash(newAmnt, opt) 
    }else {
        return opt;
    }
}

wihdrawCash(3000, {})
// Finish ---->

// // # Write a function called answer(data, n) that takes in a list of less than 100 integers 
// // # and a number n, and returns that same list but with all of the numbers
// // # that occur more than n times removed entirely. The returned list should retain 
// // # the same ordering as the original list
 
// // # For instance, if data was [5, 10, 15, 10, 7] and n was 1
// // # answer(data, n) would return the list [5, 15, 7]
// // # Because 10 occurs twice, and thus was removed from the list entirely.

// Start -------->
var num = [1,2,1,2,3,4,5,1];
function removeItems(num, count){
    var dupItems = [];
    console.log(" Original Items ...", num, count);
    var dataArr = [];
    for(var i = 0; i < num.length; i++){
        var counter = 0;
        for(var j = 0; j < num.length; j++){
            if(num[i] == num[j]) {
                counter ++;
            }
            if(count == counter){
                dupItems.push(num[i]);
                break;
            }
        }
    }
    var newItems = num.filter((item) => {
        if(dupItems.indexOf(item) < 0){
            return item;
        }
    })
    console.log("duplicate items -->",dupItems)
    console.log("Updated Item List -->",newItems)

    return newItems;
}

removeItems(num, 2);

// Finish ---->

// BubbleSort Algorithm Implementation,
// Worst case time complexity: O(n*n), when all emements of the array are not in sorting order
// best case time complexity: O(n), whne all elements are in sorted order

// Start --->
let arr = [1,4,2,7,90,23,100, -1,-4,-10,-100];
let oldArr = [...arr];
function bubbleSort(arr){
    console.log("bubbleSort() is called ...");
    for(let i = 0; i < arr.length; i++){
        for(let j =0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

// (() => {
//     console.log("Anonymous bubbleSort() is called ...");
//     for(let i = 0; i < arr.length; i++){
//         for(let j =0; j < arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
// })(arr)
console.log("Before Bubble Sort -->",oldArr);
bubbleSort(arr);
console.log("after Bubble Sort -->", arr);

// Finish --->
