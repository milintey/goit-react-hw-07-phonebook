// import { nanoid } from 'nanoid';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
// import * as yup from 'yup';
import { FormButton, FormInput } from './ContactForm.styled';
import { contactsState } from 'redux/selectors';

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   phone: yup.number().required(),
// });

const initialValues = {
  name: '',
  phone: '',
};

export const ContactForm = () => {
  const contactsItem = useSelector(contactsState);
  const dispatch = useDispatch();

  const formSubmit = (value, { resetForm }) => {
    if (contactsItem.some(cont => cont.name === value.name)) {
      alert(`${value.name} is already in contacts`);
      return;
    }

    if (contactsItem.some(cont => cont.phone === value.phone)) {
      alert(`User number ${value.phone} already exists`);
      return;
    }

    dispatch(addContact(value));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={formSubmit}
      // validationSchema={schema}
    >
      <Form>
        <label>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          <FormInput
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          {/* <ErrorMessage name="number" component="div" /> */}
        </label>
        <FormButton type="submit">Add Contact</FormButton>
      </Form>
    </Formik>
  );
};
