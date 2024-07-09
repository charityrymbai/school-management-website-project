import { Routes, Route }from 'react-router-dom'

import RoutesWithHeaderFooter from './Routes/RoutesWithHeaderFooter';
import RoutesWithoutHeaderFooter from './Routes/RoutesWithoutHeaderFooter';

function App() {
  return (
      <Routes>
        {/* Route without header and footer */}
        <Route path="/dashboard/*" element={<RoutesWithoutHeaderFooter />} />

        {/* Routes with header and footer */}
        <Route path='/*' element={<RoutesWithHeaderFooter />} />
      </Routes>
  )
}

export default App