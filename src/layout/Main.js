import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <>
            <Header></Header>
            {/* <LeftSideNav></LeftSideNav> */}
            <Outlet></Outlet>
        </>


    );
};

export default Main;