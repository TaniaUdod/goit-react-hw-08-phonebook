import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Loader } from '../../components/Loader/Loader';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { ErrorText, Text } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <div>
        <h2>Contacts</h2>

        {isLoading && <Loader />}

        {contacts.length > 0 ? (
          <Filter />
        ) : (
          <Text>Your phonebook is empty 🥺</Text>
        )}

        {contacts.length > 0 && <ContactList />}

        {error && <ErrorText>Sorry. {error} 😭</ErrorText>}
      </div>
    </>
  );
};

export default Contacts;
