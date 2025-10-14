import { Box } from '@mui/material';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import FeaturesSection from './components/FeaturesSection';
import MeetGeniusSection from './components/MeetGeniusSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Header />
      <HeroSection />
      <ValueProposition />
      <FeaturesSection />
      <MeetGeniusSection />
      <CTASection />
      <Footer />
    </Box>
  );
}

export default App;