<template>
  <div class="container">
      <template v-for="(leader, index) in leadersData" :key="leader">
      <div class="row mb-5">
          <div class="col-md-4" :class="{ 'order-md-1': index % 2 === 1}">
              <img alt="Gym Leader" :src="require('../assets/' + leader['leader-name'] + '.png')" class="gym-leader">
              <h2 class="gym-leader-name">{{ leader['leader-name'] }}</h2>
          </div>
          <div class="col-11 col-md-8 border shadow pb-5 m-auto rounded-3">
              <div class="gym-name">{{ leader['gym-name'] }}</div>
              <div class="row h-100">
                  <div class="col-6 col-md-4" v-for="poke in leader['pokemons']" :key="poke">
                      <img :src="require('../assets/' + poke.name + '.png')" class="img-fluid">
                      <div class="poke-name">{{ poke.name }}</div>
                      <div>Lv.{{ poke.lv }}</div>
                  </div>
              </div>
          </div>
      </div>
      </template>
  </div>  
</template>

<script>
export default {
    name: 'LeaderPokeBoxes',
    props: ['leadersData'],
}
</script>

<style scoped>
    .gym-leader {
        max-width: 100%;
    }
    .pokebox {
        border-radius: 10px;
    }
    .poke-name {
        font-size: 1rem;
        font-weight: 600;
    }
    .gym-leader-name {
        margin-top: 20px;
        font-weight: 700;
    }
    .gym-name {
        margin: 1rem 0;
        font-size: 1.5rem;
    }
</style>