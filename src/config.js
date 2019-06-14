export const config = {

    initialization: true,
    authentication: true,
    
    mountAppTo: '#app',
    requestPrefix: '/app',
    defaultRedirect: '/',
    
};

export const plugins = {

    axios: {
        enabled: true
    },
    
    laravel: {
        enabled: true
    }

};
