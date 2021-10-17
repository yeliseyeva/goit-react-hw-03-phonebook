import React from "react";
import s from "../Container/Container.module.css"
import PropTypes from "prop-types";

function Container ({title, children}) {
    return (
        <div className={s.container}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

Container.propTypes = {
    title: PropTypes.string.isRequired
}

export default Container;