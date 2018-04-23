export const stepsReducer = (state = 0, {type}) => {
        switch (type) {
            case 'UPDATE_GRID':
                return state + 1;

            case 'GENERATE_NEW_GRID':
                return 0;

            default:
                return state;
        }
    };
