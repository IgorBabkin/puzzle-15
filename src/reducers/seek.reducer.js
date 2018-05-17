export const seekReducer = (state = 0, {type, payload}) => {
    switch (type) {
        case 'UPDATE_SEEK':
            return payload;

        default:
            return state;
    }
};
