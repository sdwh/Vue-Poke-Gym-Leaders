<template>
  <h1 class="mb-5">Generation 1</h1>
  <LeaderPokeBoxes :leadersData="leaders['Gen1']"/>
</template>

<script>
import leaders from '../data/leaders.json'
import LeaderPokeBoxes from '../components/LeaderPokeBoxes'

export default {
    name: "Generation1",
    components: {LeaderPokeBoxes},
    data() {
        return {
            leaders
        };
    }
}
</script>

<style>
</style>