export const SeekActions = {
    update: payload => ({
        type: 'UPDATE_SEEK',
        payload,
    }),

    next: () => ({
        type: 'NEXT_SEEK',
    }),

    prev: () => ({
        type: 'PREV_SEEK',
    }),
};
