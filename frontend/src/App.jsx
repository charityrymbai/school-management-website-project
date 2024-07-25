import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RoutesWithHeaderFooter from './Routes/RoutesWithHeaderFooter';
import Loader from './components/Loader';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <React.Suspense fallback={<Loader />}>
            <Routes>
                {/* Route without header and footer */}
                <Route path="/dashboard/:user/*" element={<Dashboard />} />

                {/* Routes with header and footer */}
                <Route path="/*" element={<RoutesWithHeaderFooter />} />
            </Routes>
        </React.Suspense>
    );
}

export default App;
