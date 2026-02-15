import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Emergency } from './pages/Emergency';
import { Tips } from './pages/Tips';
import { Stories } from './pages/Stories';
import { HowCanIHelp } from './pages/HowCanIHelp';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="tips" element={<Tips />} />
          <Route path="stories" element={<Stories />} />
          <Route path="how-can-i-help" element={<HowCanIHelp />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="help" element={<Emergency />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
