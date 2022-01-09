// import PropTypes from 'prop-types';
import { Component } from 'react';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };
    reset() {
        this.setState({ name: '', number: '' });
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };
    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={this.handleChange}
                />
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={this.handleChange}
                />
                <button type="submit">Add Contact</button>
            </form>
        );
    }
}

export default ContactForm;
