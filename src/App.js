import './App.css'
import { Route,Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Main/Main'
import Letra from './components/Letra/Letra'
import Detalhes from './components/Detalhes/Detalhes'
import Favoritos from './components/Favoritos/Favoritos'

function App(){
  
  return(
      <Routes>
          <Route path="/" element={
              <div className='app'>
                  <Header/>
                  <Home/>
                  <Footer/>
              </div>
          }/>
          <Route path="/letra/:letra" element={
              <div className='app'>
                  <Header/>
                  <Letra/>
                  <Footer/>
              </div>
          }/>
          <Route path="/detalhes/:id" element={
              <div className='app'>
                  <Header/>
                  <Detalhes/>
                  <Footer/>
              </div>
          }/>
          <Route path="/favoritos" element={
              <div className='app'>
                  <Header/>
                  <Favoritos/>
                  <Footer/>
              </div>
          }/>
      </Routes>
        

    
  )
}

export default App;