import React from 'react';
import { Outlet, Route, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import First from '../First/First';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
           <Header></Header>
           <div>
            {navigation.state === 'loading' && 'loading...'}
           </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;