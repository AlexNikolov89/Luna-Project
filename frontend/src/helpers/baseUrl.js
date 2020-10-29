let baseUrl = ''

if(process.env.NODE_ENV === 'development'){
    baseUrl = 'http://localhost:8000'
} else {
    baseUrl = 'http://taurus-luna.propulsion-learn.ch/'
}

export default baseUrl;