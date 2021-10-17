import React from "react";
import s from "../ContactsList/ContactList.module.css";
import PropTypes from "prop-types";

function ContactsList ({contacts, onDelete}) {

        return (
            <ul>
                {contacts.map(({id, name, number}) => (
                    <li key={id} className={s.item}>
                        <p className={s.contact}>{name}: {number}</p>
                        <button type="button" onClick={() => onDelete(id)} className={s.deleteBtn}>Delete</button>
                    </li>
                ))}
            </ul>
        )
}

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ContactsList;