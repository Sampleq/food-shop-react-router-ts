import { createRoot } from 'react-dom/client';

import './resets.scss';
import './index.scss';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(<App />);
