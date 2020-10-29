export const getMyProfileAction = (dispatch, getState) => {
    // const token = getState().auth.token;
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA0MTc4MTkyLCJqdGkiOiJkMjNiM2M1ZWViYzQ0ZmRlOTYzYTMyZTFmMzY0NTc3NCIsInVzZXJfaWQiOjEyfQ.c2lG_vLaCk7c-Rwe0rCb47jVBo0rjZo5s6A3xg144YE"
    fetch('http://0.0.0.0:8000/backend/api/users/me/', {
        headers: new Headers({
            Authorization: `Bearer ${token}`,
        }),
    })
        .then((r) => r.json())
        .then((profile) => {
            console.log("profile", profile);
            dispatch({
                type: "GET_MY_PROFILE",
                payload: profile,
            });
        }).catch(e => console.error(e));
};
