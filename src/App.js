import React from 'react';
import { CustomerReview, Footer, Hero, PopularProduct, Services, SpecialOffers, Subscribe, SuperQuality } from './sections';
import Nav from './components/Nav.jsx'

function App() {
  return (
    <main className="relative overflow-hidden ">
      <Nav />
      <section className='xl:padding-l wide:padding-r  padding-b'>
        <Hero/>
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App