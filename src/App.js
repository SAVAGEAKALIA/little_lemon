import './App.css';
import { useEffect, useState } from 'react';
import { Navbar, Hero, Specials, Testimonials, About, Footer, Login, Promotion, Reservations, Alert } from './components';

function App() {

  const [navBg, setNavBg] = useState('')
  // login component hide/show state
  const [login, setLogin] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [scrollDirection, setScrollDirection] = useState("")
  const [hamIcon, setHamIcon] = useState('hamburger')
  // Login and Logout Text State
  const [userLogin, setUserLogin] = useState(false)
  // Alert Dialog State
  const [alert, setAlert] = useState({showAlert: false, color: '', text: ''})

  // Handle Nav display on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      if (currentScrollPos > 300 && currentScrollPos > prevScrollPos){
        setScrollDirection("down")
      }else if(currentScrollPos > 50 && currentScrollPos < prevScrollPos){
        setScrollDirection("up")
      }
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  // Handle Nav Background Color
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      if (currentScrollPos > 50){
        setNavBg('nav-dark')
      } else {
        setNavBg('nav-transparent')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const triggerLogin = () => {
    setLogin(prev => !prev)
  }
  const handleLogin = () => {
    if (userLogin === true){
      // changes Logout button to Login button
      setUserLogin((prevState) => !prevState)
      handleAlert("Logged Out", "red") //Displays Alert
    }
    else{
      // opens login component
      setLogin((prevState) => !prevState)
      // Add log in prompt
    }
  }
  const handleSetUserLogin = () => {
    if (userLogin === true){
      setUserLogin((prevState) => !prevState)
      // Add log out prompt to alert user that they're logged out
    }
    else{
      setUserLogin((prevState) => !prevState)
      // Add log in prompt
    }
  }

  const toggleIcon = () =>  {
    setHamIcon(() => {
      return hamIcon === 'hamburger'? 'closeIcon' : 'hamburger'
    })
  }
  const toggleIconClose = () => {
    if (hamIcon === "closeIcon"){
      setHamIcon('hamburger')
    }
  }

  // Alert Handler
  // USAGE: Pass handleAlert to component
  //  - Trigger handleAlert passing color and text as parameter
  //  - handleAlert automatically displays alert and unmounts it
  const handleAlert = (text, color) => {
    if (alert.showAlert){
      // Means Alert is currently been diplayed, Returns to default OFF
      setAlert(() => ({
        showAlert: false,
        color: '',
        text: ''
      }))
    }
    else //Shows Alert for x seconds and toggles it OFF
    {
      setAlert((prev) => ({
        ...prev,
        showAlert: !alert.showAlert,
        color: color,
        text: text
      }))
      setTimeout(()=>{
        setAlert((prev) => ({
          showAlert: false,
          color: '',
          text: ''
        }))
      }, 1000)
    }
  }

  return (
    <>
    {alert.showAlert && <Alert text={alert.text} color={alert.color} />}
      <header className={`${navBg} ${scrollDirection}`}>
        <Navbar toggleIcon={toggleIcon} hamIcon={hamIcon} toggleIconClose={toggleIconClose} handleLogin={handleLogin}
         navBg={navBg} scrollDirection={scrollDirection} userLogin={userLogin} setUserLogin={handleSetUserLogin} />
      </header>
      <main>
        {login && <Login setLogin={triggerLogin} userLogin={userLogin} setUserLogin={handleSetUserLogin} login={login} handleAlert={handleAlert} />}
        <Hero toggleIconClose={toggleIconClose}/>
        <Specials toggleIconClose={toggleIconClose}/>
        <Promotion toggleIconClose={toggleIconClose}/>
        <About toggleIconClose={toggleIconClose}/>
        <Testimonials />
        <Reservations handleAlert={handleAlert} toggleIconClose={toggleIconClose}/>
      </main>
      <footer>
        <Footer userLogin={userLogin} toggleIconClose={toggleIconClose} handleLogin={handleLogin}/>
      </footer>
    </>
  );
}

export default App;