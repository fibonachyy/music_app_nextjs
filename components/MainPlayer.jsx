export default class MainPlayer extends React.PureComponent{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render(){
        return(
            <>
                <div className='m_player_container'>
                    <div className='progress_player'></div>

                    <div className="item_c block_l">
                        <span className='item_b'>
                        <i className="far fa-bookmark"></i>
                        </span>
                        <span className='item_b'>
                            <i className="fas fa-heart"></i>
                        </span>
                        <span className='item_b'>
                            <i className="far fa-heart"></i>
                        </span>
                    </div>

                    <div className="item_c block_c">
                    <span className='item_b'>
                        <i className="fas fa-angle-left biger"></i>
                        </span>

                        <span className='item_b'>
                        <i className="far fa-play-circle important"></i>
                        </span>
                        <span className='item_b'>
                        <i className="far fa-pause-circle important"></i>
                        </span>
                        
                        <span className='item_b'>
                        <i className="fas fa-angle-right biger"></i>
                        </span>
                       
                    </div>

                    <div className="item_c block_r">
                        <span className='item_b'>
                            <i className="fas fa-list-ul"></i>
                        </span>
                        
                    </div>
                </div>
            </>
        )
    }
    
}