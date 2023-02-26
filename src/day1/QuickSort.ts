// function sort(arr: number[]): number[] | [] {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     const pIdx = Math.floor(arr.length / 2);
//     const p = arr[pIdx];
//     let leftArr = [];
//     let rightArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i !== pIdx) {
//             if (arr[i] <= p) {
//                 // const temp = arr[i];
//                 // arr.splice(i, 1);
//                 // arr.unshift(temp)
//                 leftArr.push(arr[i]);
//             } else {
//                 rightArr.push(arr[i]);
//             }
//         }
//     }
//     console.log("left: ", leftArr);
//     console.log("right: ", rightArr);
//     const sortedLeft = sort(leftArr);
//     const sortedRight = sort(rightArr);
//     console.log("sortedLeft: ", sortedLeft);
//     console.log("sortedRight: ", sortedRight);
//     return [...sortedLeft, p, ...sortedRight];
//     //return sortedLeft.concat(p, sortedRight);
// }

// export default function quick_sort(arr: number[]): void {
//     // arr[pIdx] = a[0];
//     // a[0] = p;

//     // const newPIdx = arr.indexOf(p);

//     arr = sort(arr);
//     console.log("new arr ", arr);
//     console.log("len ", arr.length);
// }

function qs(arr: number[], low: number, high: number) {
    if (low >= high) {
        return;
    }
    const pIdx = partition(arr, low, high);

    qs(arr, low, pIdx - 1);
    qs(arr, pIdx + 1, high);
}

//do weak sort and return index of pivot
function partition(arr: number[], lo: number, hi: number): number {
    const p = arr[lo];

    let idx = lo; //[3, 4, 1, 2]
    for (let i = lo + 1; i <= hi; i++) {
        if (arr[i] <= p) {
            idx++;
            const temp = arr[idx];
            arr[idx] = arr[i];
            arr[i] = temp;
        }
    }
    //[3, 1, 2, 4] idx=2
    arr[lo] = arr[idx];
    arr[idx] = p; //[1, 0]

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
