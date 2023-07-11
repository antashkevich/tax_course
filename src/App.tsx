import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { Home } from 'pages/home'
import { Product } from 'pages/product';
import { Contacts } from 'pages/contacts';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/product/:productId' element={<Product />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
