export const SnapshotActions = {
    addSnapshot: payload => ({
        type: 'ADD_SNAPSHOT',
        payload,
    }),
    dropSnapshots: () => ({
        type: 'DROP_SNAPSHOTS',
    }),
};
