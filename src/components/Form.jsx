import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { LabelText, Input, FormBtn } from './PhonebookStyled';
import { useState } from 'react';


export default function Form({onSubmit}) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const nameId = nanoid();
    const phoneId = nanoid();

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                return setName(value);
            case 'phone':
                return setPhone(value);
            default:
                return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({name, phone});
        setName('');
        setPhone('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            <LabelText>Name:</LabelText>
            <Input
                type="text"
                name="name"
                id={nameId}
                value={name}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </label>
        <label>
            <LabelText>Number:</LabelText>
            <Input
                type="tel"
                name="phone"
                id={phoneId}
                value={phone}
                onChange={handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
        </label>
        <FormBtn type="submit">Add contact</FormBtn>
    </form>
  )
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

