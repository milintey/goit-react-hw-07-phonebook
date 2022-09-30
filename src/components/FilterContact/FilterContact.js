export const filterContact = (contacts, filterState) => {

  if (filterState === "") {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterState.toLowerCase().trim())
  );
}
