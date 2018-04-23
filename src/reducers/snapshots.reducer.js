export const snapshotsReducer = (updateGrid, generateGrid) =>
    (state = [], {type, payload}) => {
        switch (type) {
            case 'ADD_SNAPSHOT':
                let lastSnapshot = state[state.length-1];
                return [
                    ...state,
                    updateGrid(lastSnapshot, payload)
                ];

            case 'DROP_SNAPSHOTS':
                return [generateGrid()];

            default:
                return state;
        }
    };
