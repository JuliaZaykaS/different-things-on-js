

const { readFileSync, writeFileSync } = require("fs");
// import fs from "fs";

// задача 1 Partition
function sortWithPartition(arrLength, arr, x) {
    let countElementsLessX = 0;
    let countOtherElements = 0;

    for (let i = 0; i < arrLength; i += 1) {
        if (arr[i] < x) {
            countElementsLessX += 1;
        } else countOtherElements += 1
    }

    return [countElementsLessX, countOtherElements]

}


// const { readFileSync, writeFileSync } = require("fs");
// const lines = readFileSync("input.txt", "utf8").toString().trim().split('\n');
// // каждая строка - элемент массива lines

// function sortWithPartition(arrLength, arr, x) {
//     let countElementsLessX = 0;
//     let countOtherElements = 0;
//     const tempArr = arr.split(" ").map(el=>Number(el))

//     for (let i = 0; i < Number(arrLength); i += 1) {
//         if (tempArr[i] < Number(x)) {
//             countElementsLessX += 1;
//         } else countOtherElements += 1
//     }

//     return [ countElementsLessX, countOtherElements ]

// }

// // ваш код
// const result = sortWithPartition(lines[0], lines[1], lines[2])

// // результат приводим к строке
// writeFileSync("output.txt", result.join('\n'));

// console.log(sortWithPartition(5, [1, 9, 4, 2, 3], 3 ));
// console.log(sortWithPartition(0, [], 0 ));
// console.log(sortWithPartition(1, [0], 0 ));

// задача 2 Быстрая сортировка
// const { readFileSync, writeFileSync } = require("fs");
// const lines = readFileSync("input.txt", "utf8").toString().trim().split('\n');
// // каждая строка - элемент массива lines

// function fastSortWithPartition(arrLength, arr) {
//     let countElementsLessX = 0;
//     let countOtherElements = 0;
//     const tempArr = arr.split(" ").map(el => Number(el))
//     // let x = Math.round(tempArr.reduce((el,acc)=> el+=acc, 0)/Number(arrLength))
//     let x = Math.round(Number(arrLength) / 2)
//     console.log("🚀 ~ file: algorithmsTraining.js:61 ~ fastSortWithPartition ~ x:", x)
//     let resultArr1 = [];
//     let resultArr2 = [];
//     let resultArr3 = [];
//     let resultArr4 = [];

//     for (let i = 0; i < Number(arrLength); i += 1) {
//         if (tempArr[i] < tempArr[x]) {
//             // countElementsLessX += 1;
//             // resultArr.unshift(tempArr[i]);
//             resultArr1.push(tempArr[i]);
//         } else {
//             resultArr2.push(tempArr[i]);
//         }
//     }

//     for (let i = 0; i < resultArr1.length; i += 1) {
//         x = Math.round(resultArr1.length/2)
//         console.log("🚀 ~ file: algorithmsTraining.js:80 ~ fastSortWithPartition ~ x:", x)
//         if (resultArr1[i] < resultArr1[x]) {
//             // countElementsLessX += 1;
//             // resultArr.unshift(tempArr[i]);
//             resultArr3.push(resultArr1[i]);
//         } else {
//             resultArr4.push(resultArr1[i]);
//         }
//     }

//     console.log(resultArr1);
//     console.log(resultArr2)
//     console.log(resultArr3)
//     console.log(resultArr4)

//     return [countElementsLessX, countOtherElements]

// }

// function recursionFunc(arr1, arr2, idx1, idx2, resArr) {
//     // let resultArr = resArr;
//     let resultArr1 = arr1;
//     let resultArr2 = arr2;
//     let index1 = Number(idx1)
//     let index2 = Number(idx2)
//     for (let i = 0; i < Number(arrLength); i += 1) {
//         if (tempArr[i] <= tempArr[x]) {

//             resultArr1.push(tempArr[i]);
//         } else {
//             resultArr2.push(tempArr[i]);
//         }
//     }

//     if (index1 < arr1.length && index2 < arr2.length) {
//         if (arr1[index1] < arr2[index2]) {
//             resultArr.push(arr1[index1]);
//             if (arr1[index1] === arr1[arr1.length - 1]) {
//                 resultArr.push(arr2[index2])
//             }
//             index1 += 1;
//         } else {
//             resultArr.push(arr2[index2])
//             if (arr2[index2] === arr2[arr2.length - 1]) {
//                 resultArr.push(arr1[index1]);
//             }
//             index2 += 1;
//         }
//         return recursionFunc(arr1, arr2, index1, index2, resultArr);
//     } else {
//         return resultArr
//     }
// }

// // ваш код
// const result = fastSortWithPartition(lines[0], lines[1])

// результат приводим к строке
// writeFileSync("output.txt", result.join('\n'));

// задача 3 Слияние
// function sortWithMerger(N, arr1, M, arr2) {
//     let resultArr = [];

//     let index1 = 0
//     let index2 = 0

//     // if(M === 0) return resultArr = [...arr1]
//     // if (N === 0) return resultArr = [...arr2]
//     if (M === 0) return resultArr = arr1
//     if (N === 0) return resultArr = arr2


//     function recursionFunc(arr1, arr2, idx1, idx2, resArr) {
//     let resultArr = resArr;
//     let index1 = idx1
//     let index2 = idx2

//     if (index1 < arr1.length && index2 < arr2.length) {
//         if (arr1[index1] < arr2[index2]) {
//               resultArr.push(arr1[index1]);
//               if (arr1[index1] === arr1[arr1.length - 1]) {
//                   resultArr.push(arr2[index2])
//               }
//               index1 += 1;
//           } else {
//               resultArr.push(arr2[index2])
//               if (arr2[index2] === arr2[arr2.length - 1]) {
//                   resultArr.push(arr1[index1]);
//               }
//               index2 += 1;
//         }
//          return recursionFunc(arr1, arr2, index1, index2, resultArr);
//     } else {
//         return resultArr
//     }
// }


//     recursionFunc(arr1, arr2, index1, index2, resultArr)
//     return resultArr

// }

// // import { readFileSync, writeFileSync } from "fs";
// const lines = readFileSync("input.txt", "utf8").toString().trim().split('\n');
// // console.log("🚀 ~ file: algorithmsTraining.js:94 ~ lines:", lines)
// // каждая строка - элемент массива lines

// function sortWithMerger(N, array1, M, array2) {

//     let resultArr = [];

//     let index1 = 0
//     let index2 = 0

//     if(Number(N) === 0 && Number(M) === 0) return resultArr

//     if (Number(N) === 0) return resultArr = [...array2.split(" ").map(el => Number(el))]

//     if (Number(M) === 0) return resultArr = [...array1.split(" ").map(el => Number(el))]

//     function recursionFunc(arr1, arr2, idx1, idx2, resArr) {
//     let resultArr = resArr;
//     let index1 = Number(idx1)
//     let index2 = Number(idx2)

//     if (index1 < arr1.length && index2 < arr2.length) {
//         if (arr1[index1] < arr2[index2]) {
//               resultArr.push(arr1[index1]);
//               if (arr1[index1] === arr1[arr1.length - 1]) {
//                   resultArr.push(arr2[index2])
//               }
//               index1 += 1;
//           } else {
//               resultArr.push(arr2[index2])
//               if (arr2[index2] === arr2[arr2.length - 1]) {
//                   resultArr.push(arr1[index1]);
//               }
//               index2 += 1;
//         }
//          return recursionFunc(arr1, arr2, index1, index2, resultArr);
//     } else {
//         return resultArr
//     }
// }


//     // recursionFunc(arr1, arr2, index1, index2, resultArr)
//     recursionFunc(array1.split(" ").map(el => Number(el)), array2.split(" ").map(el => Number(el)), index1, index2, resultArr)
//     return resultArr

// }

// // ваш код
// const result = sortWithMerger(lines[0], lines[1], lines[2],  lines[3])
// console.log("🚀 ~ file: algorithmsTraining.js:162 ~ result:", result.join(' '))

//  // результат приводим к строке
//  writeFileSync("output.txt", result.join(' '));



// console.log(sortWithMerger(5, [1, 3, 5, 5, 9], 3, [2, 5, 6])); // 1 2 3 5 5 5 6 9
// console.log(sortWithMerger(3, [2, 5, 6],5, [1, 3, 5, 5, 9] )); // 1 2 3 5 5 5 6 9
// console.log(sortWithMerger(1, [0], 0, [])); // 0
// console.log(sortWithMerger(0, [], 1, [0])); // 0

// задача 5 Поразрядная сортировка
const lines = readFileSync("input.txt", "utf8").toString().trim().split('\n');
// console.log("🚀 ~ file: algorithmsTraining.js:250 ~ lines:", lines)

function sortingByBit(bucketCount, arr) {
    // console.log("🚀 ~ file: algorithmsTraining.js:253 ~ sortingByBit ~ bucketCount:", bucketCount)
    // console.log("🚀 ~ file: algorithmsTraining.js:253 ~ sortingByBit ~ arr:", arr[0])
    let resultArr = []
    let buckets = {}
    let phases = {}
    // let allArraysFromPhases = []
    // let simpleBuckets ={}
    // let simpleBuckets = Array(+bucketCount).fill("empty")
    let simpleBuckets = Array(+bucketCount + 1).fill([])
    // let simpleBuckets = []
    // console.log("🚀 ~ file: algorithmsTraining.js:259 ~ sortingByBit ~ simpleBuckets:", simpleBuckets)
    const baseLength = arr[0].split(/[\r\n]+/g)[0].length

    // console.log("🚀 ~ file: algorithmsTraining.js:256 ~ sortingByBit ~ baseLength:", baseLength)
    for (let i = 0; i <= bucketCount; i += 1) {
        buckets = {
            ...buckets,
            [`Bucket ${i}:`]: "empty",
        }
        // simpleBuckets = {
        //     ...simpleBuckets,
        //     i: "empty",
        // }
    }
    for (let i = 1; i <= baseLength; i += 1) {
        phases = {
            ...phases,
            [`Phase ${i}`]: {
                ...buckets
            },
        }
    }


    // for (let i = 0; i < arr.length; i += 1) {
    //     for (let j = 0; j <= bucketCount; j += 1) {

    //         // console.log("🚀 ~ file: algorithmsTraining.js:289 ~ sortingByBit ~ arr[i][baseLength - 1]:", arr[i][baseLength - 1])
    //         if (+arr[i][baseLength - 1] === j) {
    //             // simpleBuckets[j]= `${arr[i]}`
    //             simpleBuckets[j] = [...simpleBuckets[j], arr[i]]
    //             // simpleBuckets.push(`${arr[i]}`)
    //             // console.log("🚀 ~ file: algorithmsTraining.js:293 ~ sortingByBit ~ simpleBuckets[j]:", simpleBuckets[j])
    //             // } else {
    //             //     simpleBuckets.push(`empty`)

    //         }

    //     }
    // }

    // console.log(simpleBuckets);

    // const secondSimpleBucket = simpleBuckets.flat()
    // // console.log("🚀 ~ file: algorithmsTraining.js:306 ~ sortingByBit ~ secondSimpleBucket:", secondSimpleBucket)

    // // const tmpArr = simpleBuckets
    // const tmpArr = Array(+bucketCount + 1).fill([])

    // for (let i = 0; i < secondSimpleBucket.length; i += 1) {
    //     for (let j = 0; j <= bucketCount; j += 1) {

    //         // console.log("🚀 ~ file: algorithmsTraining.js:289 ~ sortingByBit ~ arr[i][baseLength - 1]:", arr[i][baseLength - 1])
    //         if (+secondSimpleBucket[i][baseLength - 2] === j) {
    //             // simpleBuckets[j]= `${arr[i]}`
    //             tmpArr[j] = [...tmpArr[j], secondSimpleBucket[i]]
    //             // simpleBuckets.push(`${arr[i]}`)
    //             // console.log("🚀 ~ file: algorithmsTraining.js:293 ~ sortingByBit ~ simpleBuckets[j]:", simpleBuckets[j])
    //             // } else {
    //             //     simpleBuckets.push(`empty`)

    //         }

    //     }
    // }

    // console.log(tmpArr);

    const baseEmptyArray = Array(+bucketCount + 1).fill([])
    let allArraysFromPhases = []
    allArraysFromPhases.push(arr)

    for (let m = 1; m <= baseLength; m += 1) {
        let numberDigit = baseLength - m

        // const res = recursionFunc(baseLength, m, bucketCount, baseEmptyArray, baseEmptyArray)
        // const res = recursionFunc(baseLength, m, bucketCount, arr)
        // const res = recursionFunc(numberDigit, bucketCount, arr)
        // console.log("🚀 ~ file: algorithmsTraining.js:333 ~ res:", res)

          if (baseLength === numberDigit) {
            // return tmpArr
            // return tmpArrEmpty
            return allArraysFromPhases

          } else {
              const tmpRes = recursionFunc(numberDigit, bucketCount, allArraysFromPhases[allArraysFromPhases.length-1])

            allArraysFromPhases.push(tmpRes)
            // console.log("🚀 ~ file: algorithmsTraining.js:394 ~ allArraysFromPhases:", allArraysFromPhases)
            // recursionFunc(numberDigit, bucketCount, allArraysFromPhases[allArraysFromPhases.length-1])

        }

    }
    // function recursionFunc(baseLength, m, bucketCount, baseEmptyArray, filledTmpArr) {
    // function recursionFunc(baseLength, m, bucketCount, filledTmpArr) {
    function recursionFunc(numberDigit, bucketCount, filledTmpArr) {
        // console.log("🚀 ~ file: algorithmsTraining.js:342 ~ filledTmpArr:", filledTmpArr)
        // let tmpArrEmpty = baseEmptyArray
        // let allArraysFromPhases = []

        let tmpArrEmpty = Array(+bucketCount + 1).fill([])
        // console.log("🚀 ~ file: algorithmsTraining.js:337 ~ tmpArrEmpty:", tmpArrEmpty)
        // let tmpArr = filledTmpArr.length !==0 ? filledTmpArr.flat() : filledTmpArr
        // let tmpArr = filledTmpArr

        let tmpArr = filledTmpArr.flat()
        // console.log("🚀 ~ file: algorithmsTraining.js:338 ~ tmpArr:", tmpArr)
        // let numberDigit = baseLength - m

        // if (baseLength !== m) {
        //     for (let i = 0; i < tmpArr.length; i += 1) {
        //         for (let j = 0; j <= bucketCount; j += 1) {

        //             // if (+secondSimpleBucket[i][baseLength - 2] === j) {
        //             if (+tmpArr[i][numberDigit] === j) {
        //                 tmpArrEmpty[j] = [...tmpArrEmpty[j], tmpArr[i]]
        //             }

        //         }
        //     }
        //     return recursionFunc(baseLength, m, bucketCount, tmpArrEmpty, tmpArr)
        // } else {
        //     return tmpArr
        // }



        for (let i = 0; i < tmpArr.length; i += 1) {
            for (let j = 0; j <= bucketCount; j += 1) {

                // if (+secondSimpleBucket[i][baseLength - 2] === j) {
                if (+tmpArr[i][numberDigit] === j) {
                    tmpArrEmpty[j] = [...tmpArrEmpty[j], tmpArr[i]]
                }

            }
        }
        return tmpArrEmpty
        // if (baseLength === m) {
        // if (baseLength === numberDigit) {
        //     // return tmpArr
        //     // return tmpArrEmpty
        //     return allArraysFromPhases

        // } else {
        //     // allArraysFromPhases.push(recursionFunc(numberDigit, bucketCount, allArraysFromPhases[allArraysFromPhases.length-1]))
        //     allArraysFromPhases.push(tmpArrEmpty)
        //     console.log("🚀 ~ file: algorithmsTraining.js:394 ~ allArraysFromPhases:", allArraysFromPhases)
        //     recursionFunc(numberDigit, bucketCount, allArraysFromPhases[allArraysFromPhases.length-1])
        //     // return recursionFunc(numberDigit, bucketCount, allArraysFromPhases[allArraysFromPhases.length-1])
        //     // return recursionFunc(baseLength, m, bucketCount, tmpArrEmpty, tmpArr)
        //     // return recursionFunc(baseLength, m, bucketCount, tmpArr)
        //     // return recursionFunc(numberDigit, bucketCount, tmpArrEmpty)
        // }
    }

    resultArr = Object.values(buckets)
    // console.log(phases);
    // console.log("🚀 ~ file: algorithmsTraining.js:262 ~ sortingByBit ~ resultArr:", resultArr)

console.log(allArraysFromPhases);

    // return {
    //     initialArray: arr,
    //     sortedArray: resultArr,
    //     buckets: buckets,

    // }
    return [
        arr,
        resultArr,
        buckets,

    ]

}

const [, ...tests] = lines
// console.log("🚀 ~ file: algorithmsTraining.js:285 ~ tests:", tests)

const result = sortingByBit(lines[0], tests)
// console.log("🚀 ~ file: algorithmsTraining.js:288 ~ result:", result)
//  // результат приводим к строке
writeFileSync("output.txt", result.join('\n'));
//  writeFileSync("output.txt", result.join(" "));

// console.log(sortingByBit(9, [12, 32, 45, 67, 98, 29, 61, 35, 09])); // 09, 12, 29, 32, 35, 45, 61, 67, 98