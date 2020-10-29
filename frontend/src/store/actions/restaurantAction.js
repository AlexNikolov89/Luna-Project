import baseUrl from '../../helpers/baseUrl'


export const restaurantAction = () => async (dispatch, getState) => {
    //const { token } = getState();
    //console.log(token)
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA0MTM3NjExLCJqdGkiOiI3M2JiN2IwMThiOGY0MGY0ODE3NWNiOTVhYjM0MzYzOSIsInVzZXJfaWQiOjZ9.RG4akWylGVhq4I8NtPsmEeX4-Nm_GiwJYK9FPjS2krg"
    const url = `${baseUrl}/home/`
    const config ={
        method: 'GET',
        headers: new Headers ({
            "Authorization": `Bearer ${token}`,
            "Content-Type" : "application/json"
        }),
    }

    const response = await fetch(url, config)
    const data = await response.json();
    console.log('testing', data)
    return data;
}
   
