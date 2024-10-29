export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = counterSlice.actions;

export const fetchData = (url: string) => async (dispatch: any) => {
    dispatch(fetchDataStart());
    try {
        const response = await axios.get(url);
        dispatch(fetchDataSuccess(response.data));
    } catch (error) {
        dispatch(fetchDataFailure());
        alert(error);
    }
};
