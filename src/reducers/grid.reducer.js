export const gridReducer = (canUpdateGrid, updateGrid) =>
    (state = [], {type, payload}) => {
        switch (type) {
            case 'UPDATE_GRID':
                return canUpdateGrid(state, payload) ? updateGrid(state, payload) : state;

            default:
                return state;
        }
    };
