import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar';
import Main from '../Components/Home/Main';

const HomePage = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <Main />
      </main>
    </>
  );
}

export default HomePage