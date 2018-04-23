export const gridReducer = (canUpdateGrid, updateGrid, generateGrid) =>
    (state = [], {type, payload}) => {
        switch (type) {
            case 'UPDATE_GRID':
                return canUpdateGrid(state, payload) ? updateGrid(state, payload) : state;

            case 'GENERATE_NEW_GRID':
                return generateGrid();

            default:
                return state;
        }
    };
