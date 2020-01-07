import MainFetch from '../MainFetch';
import Router from 'next/router';
import {baseURL, apis} from '../../Configs/Conf_api';
import {connection} from '../../Configs/Conf_connection';
import redirect from 'nextjs-redirect'
import fetch from 'isomorphic-unfetch'
import {getParameterByName, setToken} from '../commonFunc';
export default class Login extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            code: ''
        }
        this.getAuth = this.getAuth.bind(this);
    }
    componentWillMount(){
        if (process.browser) {
            this.getAuth()
        }
    }


    getAuth(){
        const redirectUri = "http://localhost:3000/";
        const scopes = 'ugc-image-upload user-read-playback-state streaming user-read-email playlist-read-collaborative user-modify-playback-state user-read-private playlist-modify-public user-library-modify user-top-read user-read-currently-playing playlist-read-private user-follow-read app-remote-control user-read-recently-played playlist-modify-private user-follow-modify';
        const URL = `${apis.login}?response_type=code&client_id=${connection.app_id}${scopes ? '&scope=' + encodeURIComponent(scopes) : ''}&redirect_uri=${encodeURIComponent(redirectUri)}`
        if(getParameterByName('code') == null){
            window.location.href = URL;
        }
        if(getParameterByName('code')){
            this.setState({
                code : getParameterByName('code')
            },()=>{
                setToken(this.state.code)
            })
        }
       
    }

    
    
    render(){
        
    return(<span></span>)
    }
}