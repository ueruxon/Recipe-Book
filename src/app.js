import React, { Fragment } from 'react'

import Header from './components/header/header';
import Sidebar from './containers/sidebar';

export default () => {
    return (
        <Fragment>
            <Header/>
            <div className="wrapper">
                <Sidebar/>
            </div>
        </Fragment>
    )
}

