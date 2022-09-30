import { useSelector } from 'react-redux';
import { filterContact } from 'components/FilterContact/FilterContact';
import { contactsState, filterState } from 'redux/selectors';
import {
  Button,
  ContactItem,
  ContactText,
} from '../ContactList/ContactList.styled';

export const ContactList = () => {
  const contactsItem = useSelector(contactsState);
  const filter = useSelector(filterState);

  console.log(contactsItem);
  console.log(filter);

  const contacts = filterContact(contactsItem, filter);

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts &&
          contacts.map(({ id, name, phone }) => {
            return (
              <ContactItem key={id}>
                <ContactText>{name}: </ContactText>
                <ContactText>{phone}</ContactText>
                <Button type="button">Delete</Button>
              </ContactItem>
            );
          })}
      </ul>
    </div>
  );
};
