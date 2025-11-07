import './App.css'
import AutomateSection from './Components/AutomateSection'
import FooterSection from './Components/FooterSection'
import GrowthSection from './Components/GrowthSection'
import HeroSection from './Components/HeroSection'
import IndustrySection from './Components/IndustrySection'
import Navbar from './Components/Navbar'
import PartnerSection from './Components/PartnerSection'
import SuccessStoriesSection from './Components/SuccessStoriesSection'
import Testimonials from './Components/Testimonials'
import TimingSection from './Components/TimingSection'
import ToolsSection from './Components/ToolsSection'
import TriggerSection from './Components/TriggerSection'
import Workflow from './Components/Workflow'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <Workflow />
      <TriggerSection />
      <GrowthSection />
      <TimingSection />
      <PartnerSection />
      <IndustrySection />
      <ToolsSection />
      <SuccessStoriesSection />
      <Testimonials />
      <AutomateSection />
      <FooterSection />
    </>
  )
}

export default App