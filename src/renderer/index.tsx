import { RoutesClient } from 'main/compiled/router/Routes';
import { render } from 'react-dom';
import App from './App';

declare global {
  interface Window {
    grpc: RoutesClient;
  }
}

render(<App />, document.getElementById('root'));
