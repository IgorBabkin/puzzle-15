export const seekReducer = (state = 0, {type, payload}) => {
        switch (type) {
            case 'UPDATE_SEEK':
                return payload;

            case 'NEXT_SEEK':
                return state + 1;

            case 'PREV_SEEK':
                return state - 1;

            default:
                return state;
        }
    };
