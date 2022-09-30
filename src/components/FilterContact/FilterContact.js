export const filterContact = (contacts, filtere) => {

  if (filtere === "") {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filtere)
  );
}
