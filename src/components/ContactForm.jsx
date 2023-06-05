export const ContactForm = ({ name, number, onInputChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
      <input
      className={style.name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={onInputChange}
        placeholder="Name"
      />
  
      <input
      className={style.tel}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={onInputChange}
        placeholder="Phone number"
      />
  
      <button className={style.addbtn} type="submit">Add contact</button>
    </form>
  );