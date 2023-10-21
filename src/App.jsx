import './App.css'
import {RouterProvider} from 'react-router-dom';
import routes from './router/router.jsx';

function App() {
  return (
    <div className='bg-blue-100 text-blue-900'>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
