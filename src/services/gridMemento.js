import {generateGrid} from "../reducers/grid.helpers";

export const GridMemento = {
    setState: data => {
        localStorage.setItem('grid', JSON.stringify(data));
    },

    getState: () => {
        return JSON.parse(localStorage.getItem('grid')) || generateGrid();
    }
};
