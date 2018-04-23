export const GridActions = {
    update: payload => ({
        type: 'UPDATE_GRID',
        payload,
    }),
    generateNew: () => ({
        type: 'GENERATE_NEW_GRID',
    }),
};
