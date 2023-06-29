import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import style from "../app.module.css"

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getVisibleContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const visibleContacts = getVisibleContact();
  return (
    <div >
      <ul >
        {visibleContacts.map(contact => (
          <li key={contact.id} >
            <span>{contact.name}</span>
            <span > : {contact.number}</span>
            <button
              className={style.dltbtn}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
