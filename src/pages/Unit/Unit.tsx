import styles from './Unit.module.scss';

import { useParams, useNavigate, useLocation } from 'react-router-dom';

interface UnitProps {}

type UnitParams = {
  id: string;
  lang?: 'en' | 'ru' | 'es'; // или просто string
};

export const Unit = ({}: UnitProps) => {
  const params = useParams<UnitParams>();
  console.log('params', params);

  const navigate = useNavigate();
  console.log('navigate', navigate);

  const location = useLocation();
  console.log('location', location);

  return (
    <div className={styles.unit}>
      Unit Component
      <h2>id: {params.id}</h2>
      <p>lang: {params.lang || 'not specified'}</p>
      <button onClick={() => navigate(1)}>goForward</button>
      <button onClick={() => navigate(-1)}>goBack</button>
    </div>
  );
};
