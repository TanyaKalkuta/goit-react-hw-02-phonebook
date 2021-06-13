import React from 'react';
import PropTypes from 'prop-types';
import ElementContactList from "../ElementContactList/ElementContactList";
import styles from './ContactList.module.css';

const ContactList = ({ shownContacts, onClick }) => {
    return (
    <ul className={styles.contact_list}>
            {shownContacts().map(({id, name, number}) => {
              return (<li key={id} className={styles.contact_item}><ElementContactList
                    name={name}
                    number={number} />
                <button type='button' onClick={() => { onClick(id) }} className={styles.item_button}>Delete</button>
                </li>)
            })}
        </ul>
  );
};

ContactList.propTypes = {
    shownContacts: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
}


export default ContactList;