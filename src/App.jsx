import React from 'react'
import styles from './style'

import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from './components'

const App = () => (
  <main className='bg-primary w-full overflow-hidden'>
    {/* navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* hero section */}
    <header className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </header>

    {/* Features sections*/}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing /> 
        <CardDeal />
        <Testimonials /> 
        <Clients /> 
        <CTA /> 
        <Footer /> 
      </div>
    </div>
  </main>
)

export default App