import PropTypes from 'prop-types';
import { Component } from 'react';

class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            }),
        ).isRequired,
    };
    render() {
        const { contacts, onDelete } = this.props;
        return (
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <p>
                            {contact.name}: <span>{contact.number}</span>
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                onDelete(contact.id);
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
}
export default ContactList;
