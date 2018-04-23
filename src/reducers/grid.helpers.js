import * as _ from 'lodash';

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

export function generateGrid() {
    const grid = [[], [], [], []];
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const randNumber = numbers[Math.round(Math.random() * (numbers.length - 1))];
            numbers.splice(numbers.indexOf(randNumber), 1);
            grid[i][j] = randNumber;
        }
    }

    return grid;
}

export function isGameFinished(grid) {
    const values = _.flatten(grid);

    if (values[15] !== 0)
        return false;

    for (let i=0; i<14; i++) {
        if (values[i] > values[i+1])
            return false;
    }

    return true;
}