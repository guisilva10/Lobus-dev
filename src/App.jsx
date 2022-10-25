import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

import './styles/components/app.sass'

function App() {

  return (
    <div id="portfolio">
      <h1>LOBUS | DEV</h1>
      <Sidebar/>
      <MainContent/>
      <h1>copyright @ 2022 | Todos os direitos reservados .! </h1>
    </div>
  )
}

export default App
