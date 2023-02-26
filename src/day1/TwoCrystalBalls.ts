export default function two_crystal_balls(breaks: boolean[]): number {
    const step = Math.floor(Math.sqrt(breaks.length));
    let i = 0; //jump
    for (i = 0; i < breaks.length; i = i + step) {
        if (breaks[i]) break;
    }
    let j; //walk
    for (j = i - step + 1; j <= i; j++) {
        if (breaks[j]) {
            return j;
        }
    }
    return -1;
}

// [true]
// step= 1
// i = 0
// j=0

// [false, true]
// step=1
// i= 1
// j=1

// [false, false, true]
// step=1
// i=2
// j=2

// [false, true, true]
// step=1
// i=1
// j=1

// [false, false, true, true]
// step=2
// i=2
// j=2

// [false, false, false, true]
// step=2
// i=4
// j=3
