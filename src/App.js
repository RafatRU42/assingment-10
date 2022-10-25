import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/Routers/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
   
   <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
