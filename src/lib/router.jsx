import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Upload from '../pages/Upload';
import Summary from '../pages/Summary';
import Export from '../pages/Export';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/upload',
    element: <Upload />,
  },
  {
    path: '/summarize',
    element: <Summary />,
  },
  {
    path: '/export',
    element: <Export />,
  },
]);