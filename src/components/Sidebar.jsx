
import Logo from '../img/lobus.jpg'

import '../styles/components/sidebar.sass'
import Contact from './Contact'
import InformationContainer from './InformationContainer'
import SocialNetworkContainer from './SocialNetworkContainer'



const Sidebar = () => {
  return (
  <aside id="sidebar">
    <img src={Logo} alt="" />
    <p className="title">Desenvolvedor Front-End</p>
    <SocialNetworkContainer/>
    <InformationContainer/>
    <Contact/> 
    <a href="https://www.linkedin.com/in/guilherme-lopes-24a816232/" className="btn">
      Veja meu Linkedin
    </a>
  </aside>
  )
  
}

export default Sidebar
