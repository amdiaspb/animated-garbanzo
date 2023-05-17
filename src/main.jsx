import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './assets/reset.css';
import './assets/base.css';

import { UserProvider } from './components/UserContext.jsx';
import { setAppElement } from 'react-modal';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <App />
  </UserProvider>
);

setAppElement('#root');
