export const selectJob = (job) => {

    return {
        type: 'JOB_SELECTED',
        payload: job
    }
};
