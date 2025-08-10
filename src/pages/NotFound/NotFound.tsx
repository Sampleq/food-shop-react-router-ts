import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.scss';

interface NotFoundProps {}

export const NotFound = ({}: NotFoundProps) => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className={styles.notFound}>NotFound Component</h2>
      <button className={styles.btn + ' btn'} onClick={() => navigate(-1)}>
        ← Go Back
      </button>
    </>
  );
};

export default NotFound;
