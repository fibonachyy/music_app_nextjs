const setToken = (token)=>{
    try{
        localStorage.setItem('Bearer', String(token))
    }catch(e){
        console.log(e);
    }
}


const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const checkToken = ()=>{
    if (process.browser) {
        if(localStorage.getItem("Bearer") == null ) 
        return false
    else{
        if(window.location.search.length > 0 ){
            window.location.search = ''
        }
        return true
    }
    }else{
        console.log('is not browser');
    }
    
}




export {getParameterByName, setToken, checkToken}