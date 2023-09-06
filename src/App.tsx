import { ToastContainer } from 'react-toastify';
import { Form } from './components';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <Form />
      <ToastContainer />
    </main>
  );
};
