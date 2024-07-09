import './App.css'
import { Outlet } from 'react-router-dom'
import MNav from './assets/mainnav/MNav'
import Contact from './assets/contact/Contact'
function App() {

  return (
    <>
    <MNav/>
    <Outlet/>
    <Contact/>
    </>
  )
}

export default App
