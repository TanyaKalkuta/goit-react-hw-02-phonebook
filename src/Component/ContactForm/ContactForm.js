import React, { Component } from 'react';
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static defaultProps = {
    name: "",
    number: "",
  };

   static propTypes = {
        name: PropTypes.string,
        number: PropTypes.string,        
  };
  
  state = {
    name: '',
    number: ''
    // name: this.props.name,
    // number: this.props.number
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  /** Отвечает за обновление состояния*/
   handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  /** Вызывается при отправке формы */
  // Проп который передается форме для вызова при сабмите

  handleSubmit = (e) => {
    e.preventDefault();
     this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

render() {
    const { name, number } = this.state;
    
  return (
      <>
      <form onSubmit={this.handleSubmit} className={styles.contacts_form}>
        <div>
           <label htmlFor={this.nameInputId} className={styles.label}>
          Name
          <input
            type="text"
            value={name}              
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
            id={this.nameInputId}
            className = {styles.input}
            />
        </label>
        </div>
        <div>
          <label htmlFor={this.numberInputId} className={styles.label}>
          Number
           <input
            type="tel"
            value={number}  
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
            id={this.numberInputId}
            className = {styles.input}
          />
        </label>

        </div>   
        
        <button type="submit" className={styles.form_button}>Add contact</button>
      </form>
      </>
    );
  }
};

export default ContactForm;