import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      <h1>Phonebook</h1>
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
    </section>
  );
};
