import avatar from '../img/avatar.png'


import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworkContainer from './SocialNetworkContainer'



const Sidebar = () => {
  return (
  <aside id="sidebar">
    <img src={avatar} alt="lobus-dev" />
    <p className="title">Desenvolvedor Front-End</p>
    <SocialNetworkContainer/>
    <InformationContainer/>
    <a href="https://www.linkedin.com/in/guilherme-lopes-24a816232/" className="btn">
      Veja meu Linkedin
    </a>
  </aside>
  )
  
}

export default Sidebar