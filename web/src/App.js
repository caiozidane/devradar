import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  const [ github_username, setGithubUsername ] = useState('');
  const [ techs, setTechs ] = useState('');

  const [ latitude, setLatitude ] = useState('');
  const [ longitude, setLongitude ] = useState('');

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e){
    e.preventDefult();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,            
    })

    console.log(response.data);
  }

  return (
   <div id="app">
     <aside>
       <strong>Cadastrar</strong>
       <form onSubmit={handleAddDev}>
        <div className="input-block">
         <label htmlFor="github_username">Usuário do Github</label>
         <input 
            name="github_username" 
            id="github_username" 
            required
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}
            />
         </div>

         <div className="input-block">
         <label htmlFor="techs">Tecnologias</label>
         <input 
            name="techs"
            id="techs" 
            required
            onChange={e => setTechs(e.target.value)}
            />
         </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input 
              type="number" 
              name="latitude"
              id="latitude"
              required 
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
              />
          </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input 
            type="number" 
            name="longitude" 
            id="longitude" 
            required 
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
            />
        </div>
        </div>
        <button type="submit">Salvar</button>
         
       </form>
     </aside>

     <main>
      <ul>
        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/39561223?s=460&v=4" alt="Caio Zidane" />
            <div className="user-info">
              <strong>Caio Zidane</strong>
              <span> React, ReactNative</span>
            </div>
          </header>
          <p>Nice Guy</p>
          <a href="https://github.com/caiozidane">Acessar Perfil</a>
        </li>

        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/4248081?s=460&v=4" alt="Caio Zidane" />
            <div className="user-info">
              <strong>Filipe Deschamps</strong>
              <span> JavaScritp, React, ReactNative</span>
            </div>
          </header>
          <p>Nice Guy</p>
          <a href="https://github.com/filipedeschamps" target="_black">Acessar Perfil</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/2254731?s=64&v=4" alt="Caio Zidane" />
            <div className="user-info">
              <strong>Diego</strong>
              <span> React, ReactNative, NodeJs</span>
            </div>
          </header>
          <p>Nice Guy</p>
          <a href="https://github.com/diego3g">Acessar Perfil</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/19453244?s=64&v=4" alt="Caio Zidane" />
            <div className="user-info">
              <strong>MaqBr</strong>
              <span> C#, C++, .Net, ASP.NET</span>
            </div>
          </header>
          <p>Nice Guy</p>
          <a href="https://github.com/MaqBr">Acessar Perfil</a>
        </li>

      </ul>
     </main>
   </div>
  );
}

export default App;
