import Head from 'next/head';
import '../style/main.css';
import {Dashboard, Login} from '../components/content';
import {checkToken} from '../components/commonFunc';
import {InterCept} from '../Configs/Intercet';
class Home extends  React.PureComponent{

  render() {
    return (
      <div>
      <Head>
        <title>Home</title>
        <link href="https://fonts.googleapis.com/css?family=Inria+Serif&display=swap" rel="stylesheet"/>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" />
      </Head>
        { checkToken() === true ? <Dashboard/> : <Login/> }
    </div>
    );
  }
}

export default Home
