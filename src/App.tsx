import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Works} from "./layout/sections/works/Works.tsx";
import {Testimony} from "./layout/sections/testimony/Testimony.tsx";
import {Contact} from "./layout/sections/contacts/Contacts.tsx";
import {Slogan} from "./layout/sections/slogan/Slogan.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {GoToBtn} from "./components/goToBtn/GoToBtn.tsx";



function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Works/>
      <Testimony/>
      <Contact/>
      <Slogan/>
      <Footer/>
      <GoToBtn/>
    </div>
  )
}

export default App

