import { Component } from 'react/cjs/react.production.min';
import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './Components/ContactList/ContactList';

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
    };
    addContact = name => {
        console.log(name);
        name.id = nanoid();
        this.setState(prevState => ({
            contacts: [...prevState.contacts, name],
        }));
    };
    getContacts = () => {
        const { contacts } = this.state;
        return contacts.map(contact => contact.name.toLowerCase());
    };
    render() {
        const getContacts = this.getContacts();
        return (
            <div className="App">
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.addContact} />
                <h2>Contacts</h2>
                {getContacts.length ? (
                    <ContactList contacts={this.state.contacts} />
                ) : (
                    <p>Nothing</p>
                )}
            </div>
        );
    }
}

export default App;
