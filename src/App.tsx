import Navbar from './components/Navbar';
import FooterCTA from './components/FooterCTA';
import './App.css'
import Testimonials from './components/Testimonials';
import GuideWalkthrough from './components/GuideWalkthrough';

function App() {

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#A3D953]/30 selection:text-[#528221]">
      <Navbar />
      <GuideWalkthrough />
      <Testimonials />
      <FooterCTA />
    </div>
  )
}

export default App
