import React, { Fragment } from 'react'

import Header from './components/header/header';
import RecipeControls from './containers/RecipeControls';
import RecipeList from './containers/RecipeList';

export default () => {
    return (
        <Fragment>
            <Header/>
            <div className="wrapper">
                <RecipeControls/>
                <RecipeList/>
            </div>
        </Fragment>
    )
}

