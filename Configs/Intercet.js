import fetchIntercept from 'fetch-intercept';
import { apis} from './Conf_api';
export const InterCept = fetchIntercept.register({
    request: function (url, config) {
        // Modify the url or config here
        if (url !== 'http://localhost:3000/static/js/bundle.js') {
            if (url === apis.login) {
                return [url, config]
            } else {
                config.headers.Authorization = "Bearer " + localStorage.getItem("Bearer");
                return [url, config];
            }
        }

    },

    requestError: function (error) {
        // Called when an error occured during another 'request' interceptor call
        // console.log(error)
        return Promise.reject(error);
    },
    response: function (response) {
        console.log(response)
        // if (response.status === 401 || response.status === 403) {
        //     localStorage.clear();
        //     window.location.href = window.location.href
        // }
        // switch (response.status) {
        //     case 401, 403:
        //         localStorage.clear();
        //         window.location.href = window.location.href;
        //         break;

        //     default:
        //         return response;
        // }
    },

    responseError: function (error) {
        // Handle an fetch error
        return Promise.reject(error);
    }
});

