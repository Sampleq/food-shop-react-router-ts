import { useNavigate } from 'react-router-dom';
import styles from './About.module.scss';

interface AboutProps {}

export const About = ({}: AboutProps) => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className={styles.about}>About Component</h2>
      <button className={styles.btn + ' btn'} onClick={() => navigate(-1)}>
        ← Go Back
      </button>
    </>
  );
};
