import Head from 'next/head'
import Header from '../components/Header'
import CircuitMap from '../components/CircuitMap'
import CircuitInfo from '../components/CircuitInfo'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="Home">
      <Header/>

      <CircuitMap/>
      <CircuitInfo/>

      <Footer/>
    </div>
  )
}
