import { useDispatch, useSelector } from 'react-redux';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const formName = form.elements.name.value;
    const formNumber = form.elements.number.value;

    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === formName.toLowerCase()
    );

    if (isExist) {
      toast.error(`${formName} is already in contacts.`, {
        theme: 'colored',
        autoClose: 2500,
      });
      return;
    }

    dispatch(addContact({ name: formName, phone: formNumber }));

    toast.success(`${formName} has been successfully added to your contacts!`, {
      theme: 'colored',
      autoClose: 2500,
    });

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={contacts.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Enter name"
          title="Name can include letters, apostrophes, spaces, and hyphens."
          autoComplete="off"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={contacts.number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          placeholder="Enter number"
          title="Phone number must consist of numbers and can contain spaces, periods, hyphens, and parentheses."
          autoComplete="off"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
      <ToastContainer />
    </Form>
  );
};
