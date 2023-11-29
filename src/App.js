import './App.css';
import AreasOfPractice from './Components/AreasOfPractice';
import Introduction from './Components/Introduction';
import WhyUs from './Components/WhyUsSection';
import ClientReviews from './Components/ClientReviews';
import OurTeam from './Components/OurTeam';
import FAQSection from './Components/FAQSection';
import SubscribeSection from './Components/SubscribeSection';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Introduction></Introduction>
      <WhyUs></WhyUs>
      <AreasOfPractice></AreasOfPractice>
      <ClientReviews></ClientReviews>
      <OurTeam></OurTeam>
      <FAQSection></FAQSection>
      <SubscribeSection></SubscribeSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
