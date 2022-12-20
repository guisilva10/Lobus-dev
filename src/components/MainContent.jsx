import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TechnologiesContainer from './TechnologiesContainer'

import '../styles/components/maincontent.sass'

const MainContent = () => {
  return ( 
  <main id='main-content'>
      <AboutContainer/>
      <TechnologiesContainer/>
      <ProjectsContainer/>
    <p className='copyright'>&copy; 2022 | Todos os Direitos Reservados!.</p>
  </main>
  )
}

export default MainContent