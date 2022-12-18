import './index.css';
import App from './App';
/* istanbul ignore file */
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
