import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Series } from './pages/Series'
import { Movies } from './pages/Movies'
import { Home } from './pages/Home'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/series' element={ <Series/> } />
          <Route path='/movies' element={ <Movies/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
