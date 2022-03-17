import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Details from './components/pages/Details';

const App = () => { 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};

export default App;
