import { Routes, Route }from 'react-router-dom'

import WithHeaderFooter from './Routes/WithHeaderFooter';
import WithoutHeaderFooter from './Routes/WithoutHeaderFooter';

function App() {
  return (
      <Routes>
        {/* Route without header and footer */}
        <Route path="/dashboard/*" element={<WithoutHeaderFooter />} />

        {/* Routes with header and footer */}
        <Route path='/*' element={<WithHeaderFooter />} />
      </Routes>
  )
}

export default App