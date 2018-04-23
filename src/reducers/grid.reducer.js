export const gridReducer = (updateGrid, generateGrid) =>
    (state = [], {type, payload}) => {
        switch (type) {
            case 'UPDATE_GRID':
                return updateGrid(state, payload);

            case 'GENERATE_NEW_GRID':
                return generateGrid();

            default:
                return state;
        }
    };
