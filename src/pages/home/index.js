import Header from '../../components/Header/header'
import BackGround from '../../assets/background.png'
import Search from '../../components/Search/search'
import Result from '../../components/ResultUser/result'
import './index.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <img src={BackGround} className="backGround" alt="background"></img>

        <div className="content">
          <Search />
          <Result />
          <hr></hr>
        </div>
      </div>
    </div>
  )
}

export default App
