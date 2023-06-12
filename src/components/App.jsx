
import { Component } from 'react';

import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export class App extends Component {

  



  isContactExist = (name) => {
    const { contacts } = this.state;
    return contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter} = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSubmit}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}