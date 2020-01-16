import React, { useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css'

function App() {
 

  return (
   <div id="app">
     <aside>
       <strong>Cadastrar</strong>
       <form>
        <div class="input-block">
         <label htmlFor="github_username">Usuário do Github</label>
         <input name="github_username" id="github_username" require/>
         </div>

         <div class="input-block">
         <label htmlFor="techs">Tecnologias</label>
         <input name="techs" id="techs" require/>
         </div>

        <div className="input-group">
          <div class="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input name="latitude" id="latitude" require/>
          </div>

        <div class="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input name="longitude" id="techs" require/>
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
