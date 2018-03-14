import React from 'react';

const Main = (props) => {
    return (
        <main className="main">
            <h1>All recipes</h1>
            {props.children}
        </main>
    )
}

export default Main;