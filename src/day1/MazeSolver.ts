type Point = {
    x: number;
    y: number;
};

const dir = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
];

function walk(
    maze: string[],
    wall: string,
    end: Point,
    curr: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    const { x, y } = curr;

    // off grid
    if (x < 0 || x > maze[0].length - 1 || y < 0 || y > maze.length - 1) {
        return false;
    }
    //hit the wall
    if (maze[y][x] === wall) {
        return false;
    }
    //visted
    if (seen[y][x]) {
        return false;
    }
    // reach to the end
    if (x === end.x && y === end.y) {
        path.push(curr);
        return true;
    }

    path.push(curr);
    seen[y][x] = true;
    for (let i = 0; i < dir.length; i++) {
        const [diffX, diffY] = dir[i];
        if (walk(maze, wall, end, { x: x + diffX, y: y + diffY }, seen, path)) {
            return true;
        }
    }
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    let path: Point[] = [];
    let seen = [];

    for (let i = 0; i < maze.length; i++) {
        seen[i] = new Array(maze[0].length).fill(false);
    }
    walk(maze, wall, end, start, seen, path);

    return path;
}
