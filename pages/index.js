import React from 'react';
import Head from 'next/head';
import {Container, MainPlayer} from '../components'
import '../style/main.css';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link href="https://fonts.googleapis.com/css?family=Inria+Serif&display=swap" rel="stylesheet"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" />
    </Head>
    <Container>
      <MainPlayer/>
    </Container>
  </div>
)

export default Home
