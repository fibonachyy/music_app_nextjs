import MainFetch from './MainFetch';
import {apis} from '../Configs/Conf_api';
export default class PlayList extends React.PureComponent{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.searchMusic = this.searchMusic.bind(this);
    }
    handelInput(e){
        this.setState({
            [e.target.name] : e.target.value
        },()=> this.searchMusic())
    }

    searchMusic(){
        MainFetch.get(apis.search + `?q=${encodeURIComponent(this.state.searchKey)}&type=track&limit=50`,{},
            (data)=>{
                console.log(data);
            },
            (err)=>{
                console.log(err);
            })
    }

    render(){
        return(
            <>
                <div className='playlist_container'>
                    <div className="search_bar">
                        <input type="text" name='searchKey' onChange={e => this.handelInput(e)}/>
                    </div>
                </div>

            </>
        )
    }
    
}