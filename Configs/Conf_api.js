const account = "https://accounts.spotify.com/";
const baseURL = "https://api.spotify.com/v1"
const apis = {
    login : account +  "authorize",
    search: baseURL + "/search"
}


export {baseURL, apis}