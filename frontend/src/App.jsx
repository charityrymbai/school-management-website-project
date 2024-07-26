import React from 'react';
import { Routes, Route } from 'react-router-dom';

const RoutesWithHeaderFooter = React.lazy(
    () => import('./Routes/RoutesWithHeaderFooter'),
);
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

function App() {
    return (
        <Routes>
            {/* Route without header and footer */}
            <Route path="/dashboard/:user/*" element={<Dashboard />} />

            {/* Routes with header and footer */}
            <Route path="/*" element={<RoutesWithHeaderFooter />} />
        </Routes>
    );
}

export default App;
