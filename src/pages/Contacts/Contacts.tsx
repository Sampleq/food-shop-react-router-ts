import { useNavigate } from 'react-router-dom';
import styles from './Contacts.module.scss';

interface ContactsProps {}

export const Contacts = ({}: ContactsProps) => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className={styles.contacts}>Contacts Component</h2>
      <button className={styles.btn + ' btn'} onClick={() => navigate(-1)}>
        ← Go Back
      </button>
    </>
  );
};
