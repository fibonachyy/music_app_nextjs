import {PlayList, Container, MainPlayer} from '../';


const Dashboard = props =>(
    <>
    <Container>
        
        <div className="content_player">
        <PlayList/>
        </div>
      <MainPlayer/>
    </Container>
    </>
)


export default Dashboard;