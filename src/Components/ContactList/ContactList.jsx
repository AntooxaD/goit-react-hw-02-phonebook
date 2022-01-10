import PropTypes from 'prop-types';
import { Component } from 'react';
import { BtnDelete, List, ListItem } from '../Styled/Styled';

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
            <List>
                {contacts.map(contact => (
                    <ListItem key={contact.id}>
                        <p>
                            {contact.name}: <span>{contact.number}</span>
                        </p>
                        <BtnDelete
                            type="button"
                            onClick={() => {
                                onDelete(contact.id);
                            }}
                        >
                            Delete
                        </BtnDelete>
                    </ListItem>
                ))}
            </List>
        );
    }
}
export default ContactList;
