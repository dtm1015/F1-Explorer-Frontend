import Head from 'next/head'
import Header from '../components/Header'
import CircuitMap from '../components/CircuitMap'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="Home">
      <Header/>
      
      <CircuitMap/>

      <Footer/>
    </div>
  )
}
