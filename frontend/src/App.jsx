import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RoutesWithHeaderFooter from './Routes/RoutesWithHeaderFooter';
import Loader from './components/Loader';

const RoutesWithoutHeaderFooter = React.lazy(() => import('./Routes/RoutesWithoutHeaderFooter'));

function App() {
    return (
        <React.Suspense fallback={<Loader />}>
            <Routes>
                {/* Route without header and footer */}
                <Route
                    path="/dashboard/*"
                    element={<RoutesWithoutHeaderFooter />}
                />

                {/* Routes with header and footer */}
                <Route path="/*" element={<RoutesWithHeaderFooter />} />
            </Routes>
        </React.Suspense>
    );
}

export default App;
