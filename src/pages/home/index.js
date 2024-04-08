import Header from '../../components/Header/header'
import BackGround from '../../assets/background.png'
import './index.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={BackGround} className="backGround" alt="background app" />
        <div className="information">
          <div className="input-container">
            <input name="usuario" placeholder="@usuário" />
            <button>Buscar</button>
          </div>

          <div className="user-result">
            <img
              src="https://avatars.githubusercontent.com/u/101511389?s=400&u=6ec652370c207b0b561f208806eee38e6ad8035d&v=4"
              className="user-image"
              alt="imagem de perfil"
            />
            <div className="user-info">
              <div className='user'>
                <h3>Daniel Freitas</h3>
                <span>@daniielluiiz</span>
              </div>

              <p>
                Full Stack Developer web and mobile, passionate to javascript
                and all your ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
