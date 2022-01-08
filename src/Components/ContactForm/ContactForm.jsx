// import PropTypes from 'prop-types';
import { Component } from 'react';

class ContactForm extends Component {
    state = {
        name: '',
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    };
    handleChange = e => {
        this.setState({ name: e.currentTarget.value });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <button type="submit">Add Contact</button>
            </form>
        );
    }
}

export default ContactForm;
