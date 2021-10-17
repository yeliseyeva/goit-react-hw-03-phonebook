import React from "react";
import PropTypes from "prop-types";

function Filter ({value, changeFilter}) {
    return (
        <input
            type="text"
            placeholder="Find contacts by name"
            value={value}
            onChange={changeFilter}
            name="name"
            required
            autoComplete="off"
        />
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired
}

export default Filter;