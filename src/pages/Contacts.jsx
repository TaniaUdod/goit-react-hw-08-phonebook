import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Loader } from '../components/Loader/Loader';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';

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
      <h1>Your Phonebook</h1>
      <ContactForm />
      <div>
        <h2>Contacts</h2>

        {isLoading && <Loader />}

        {contacts.length > 0 ? (
          <Filter />
        ) : (
          <div style={{ textAlign: 'center', fontSize: '20px' }}>
            Your phonebook is empty 🥺
          </div>
        )}

        {contacts.length > 0 && <ContactList />}

        {error && (
          <p
            style={{
              textAlign: 'center',
              marginTop: '20px',
              fontSize: '28px',
            }}
          >
            Sorry. {error} 😭
          </p>
        )}
      </div>
    </>
  );
};

export default Contacts;
