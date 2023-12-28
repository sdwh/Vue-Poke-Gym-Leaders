<template>
  <div id="nav">
    <router-link to="/" class="btn btn-secondary me-2" :class="{'btn-primary': 1 > 0}">Home</router-link>
    <router-link to="/Generation1" class="btn btn-secondary me-2">Gen 1</router-link>
    <router-link to="/Letsgo" class="btn btn-secondary me-2 mt-3 mt-md-0">Let's Go</router-link>
    <router-link to="/Letsgo2nd" class="btn btn-secondary me-2 mt-3 mt-md-0">Let's Go 2nd</router-link>
  </div>
  <router-view/>

  <footer class="mt-5 d-inline-block w-100">
    Designed By <a target="_blank" href="https://sdwh.dev">sdwh.dev</a><br/>
    Pokémon Images & Data Copyright From <a target="_blank" href="https://bulbapedia.bulbagarden.net/wiki/Gym_Leader">bulbagarden</a> & <a target="_blank" href="https://pokemondb.net/">Pokémon Database</a> <br/>
    All Pokémon images & names © 1995-{{ new Date().getFullYear()}} Nintendo/Game Freak.
  </footer>
</template>

<style>
@import'~bootstrap/dist/css/bootstrap.css';
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

#app {
  font-family: 'Press Start 2P', sans-serif, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

.router-link-active:hover, .router-link-active:focus, .router-link-active {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}

footer {
  font-size: 0.5rem;
}
</style>
