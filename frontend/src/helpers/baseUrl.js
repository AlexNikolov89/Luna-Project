let baseUrl = ''

if(process.env.NODE_ENV === 'development'){
    baseUrl = 'http://localhost:8000/backend/api'
} else {
    baseUrl = 'https://taurus-luna.propulsion-learn.ch/'
}

export default baseUrl;