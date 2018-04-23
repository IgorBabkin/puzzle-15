export function canUpdateGrid(grid, target) {
    const [x0, y0] = findPosition(grid, 0);
    const [x1, y1] = findPosition(grid, target);

    const isClosest = Math.abs(x1 - x0) <= 1 && Math.abs(y1 - y0) <= 1;
    const isOnTheSameLine = x0 === x1 || y0 === y1;
    return isClosest && isOnTheSameLine;
}

export function findPosition(grid, target) {
    for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
            if (grid[i][j] === target)
                return [i, j];
        }
    }

    throw new Error('Wrong arguments');
}

export function updateGrid(grid, target) {
    const [x0, y0] = findPosition(grid, 0);
    const [x1, y1] = findPosition(grid, target);

    const newGrid = grid.map(line => [...line]);
    newGrid[x0][y0] = target;
    newGrid[x1][y1] = 0;

    return newGrid;
}