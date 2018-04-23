import {generateGrid} from "../reducers/grid.helpers";

export const StateMemento = {
    setState: data => {
        localStorage.setItem('state', JSON.stringify(data));
    },

    getState: () => {
        const {steps, grid} = JSON.parse(localStorage.getItem('state')) || {};
        return {
            steps: steps || 0,
            grid: grid || generateGrid(),
        };
    }
};
