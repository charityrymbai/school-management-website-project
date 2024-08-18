import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import Loader from './components/Loader.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
          <Suspense fallback={<Loader />}>
               <BrowserRouter>
                    <App />
               </BrowserRouter>
          </Suspense>
     </React.StrictMode>
);
