import { useState } from 'react'
import ItemList from '../../components/ItemList/itemList'
import './search.css'

export default function Search() {
  const [user, setUser] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState(null)

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()
    console.log(newUser)
    if (newUser) {
      const { avatar_url, name, bio, login } = newUser
      setCurrentUser({ avatar_url, name, bio, login })
    }

    const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
    const newRepos = await reposData.json()

    if (newRepos.length) {
      setRepos(newRepos)
    }
  }

  return (
    <>
      <div className="input-container">
        <input
          name="usuário"
          value={user}
          onChange={event => setUser(event.target.value)}
          placeholder="@usuário"
        ></input>
        <button onClick={handleGetData}>Buscar</button>
      </div>
      {currentUser?.name ? (
        <>
          <div className="result-container">
            <img src={currentUser.avatar_url} alt="imageprofile"></img>

            <div className="information-container">
              <h2 className="user-name">{currentUser.name}</h2>
              <span className="user">@{currentUser.login}</span>

              <p className="description">{currentUser.bio}</p>
            </div>
          </div>
          <hr />
        </>
      ) : null}
      {repos?.length ? (
        <div>
          <h4>Repositórios</h4>

          {repos.map(repo => (
            <ItemList title={repo.name} description={repo.description} />
          ))}
        </div>
      ) : null}
    </>
  )
}
