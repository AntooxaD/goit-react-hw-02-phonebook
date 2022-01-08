import PropTypes from 'prop-types';
import { Component } from 'react';

class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
            }).isRequired,
        ).isRequired,
    };
    render() {
        const { contacts } = this.props;
        return (
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <p>{contact.name}</p>
                    </li>
                ))}
            </ul>
        );
    }
}
export default ContactList;
