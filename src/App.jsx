import './index.css'
//REMOVE REDUNDANCY LATER.
import Navbar from './components/navbar/Navbar'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import Body from './components/body/Body'
import Pricing from './components/pricing/Pricing'
import Treatments from './components/treatments/Treatments'
import Doctors from './components/Doctors/Doctors'
import Consultation from './components/Consultation/Consultation'

const App = () => (
  <div className=''>
      <Navbar />
      <Header />
      <Body />
      {/* <CTA /> */}
      <Pricing />
      <Treatments />
      <Doctors />
      <Consultation />
      <Footer/>
  </div>
)


export default App