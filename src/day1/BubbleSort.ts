export default function bubble_sort(arr: number[]): void {
    if (arr.length <= 1) {
        return;
    }
    for (let j = arr.length; j >= 2; j--) {
        for (let i = 0; i <= j - 2; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    //return arr;
}
