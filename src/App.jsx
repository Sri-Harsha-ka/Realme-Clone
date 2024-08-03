import React from 'react'
import NavBar from './components/NavBar'
import SlideShow from './components/SlideShow'
import ItemNav from './components/ItemNav';
import IntroBeg from './components/IntroBeg';
import Events from './components/Events';
import BestSellers from './components/BestSellers';
import Recommanded from './components/Recommanded';
import Footer from './components/Footer';


function App() {
  return (
    <>
     <div className='w-full h-screen'>
        <NavBar />
        <SlideShow />
        <ItemNav />
        <IntroBeg/>
        <Events />
        <BestSellers />
        <Recommanded />
        <Footer />
     </div>
    </>
  )
}

export default App
