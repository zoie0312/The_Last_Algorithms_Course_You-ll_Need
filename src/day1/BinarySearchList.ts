export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length - 1;
    let middle = 0;
    do {
        middle = low + Math.floor((high - low) / 2);
        //console.log(`low ${}`)
        if (haystack[middle] === needle) {
            return true;
        } else if (haystack[middle] < needle) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    } while (high >= low);
    return false;
}
