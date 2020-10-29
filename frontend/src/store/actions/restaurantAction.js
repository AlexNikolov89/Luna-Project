import baseUrl from '../../helpers/baseUrl'

export const restaurantAction = () => async (dispatch, getState) => {
    const url = `${baseUrl}/backend/api/restaurants/`;
    //console.log(url)
    const config = {
        method: 'GET',
        headers: new Headers ({
            'Content-Type': 'application/json',
        }),
    }
    const response = await fetch(url, config);
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
}