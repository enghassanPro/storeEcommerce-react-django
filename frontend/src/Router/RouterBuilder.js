import React, { Component, Suspense } from 'react';
import Router from './Router';


import Loading from '../Base/Loading/Loading';
import { Routes } from './Routes';

class RouterBuilder extends Component {

    render() {
        return (
            <Suspense fallback={<Loading />}>
                <Router routes={Routes} />
            </Suspense>
        )
    }
}

export default RouterBuilder;