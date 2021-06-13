import React from "react";
import PropTypes from 'prop-types';
import styles from "../ElementContactList/ElementContactList.module.css";

const ElementContactList = ({ name, number }) => {
    return (<>
        <span className={styles.contact_name}>{name}: </span>
        <span className={styles.contact_number}>{number}</span>
    </>
        );
    };

ElementContactList.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string
}

ElementContactList.defaultProps = {
    name: "Hello World",
    number: 123456789
}
export default ElementContactList;