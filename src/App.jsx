import './index.css'
//REMOVE REDUNDANCY LATER.
import Navbar from './components/navbar/Navbar'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import Body from './components/body/Body'
import Pricing from './components/pricing/Pricing'
import Treatments from './components/treatments/Treatments'

const App = () => (
  <div className=''>
      <Navbar />
      <Header />
      <Body />
      {/* <CTA /> */}
      <Pricing />
      <Treatments />
      <Footer/>
  </div>
)


export default App