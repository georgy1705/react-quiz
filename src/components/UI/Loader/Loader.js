import React from "react";
import classes from './Loader.module.scss'


const Loader = props => {
    return (
        <div className={classes.Center}>
            <div className={classes.Loader} />
        </div>     
    )
}

export default Loader