<template>
  <h1 class="mb-5">Let's Go</h1>
  <LeaderPokeBoxes :leadersData="leaders['Letsgo']"/>
</template>

<script>
import leaders from '../data/leaders.json'
import LeaderPokeBoxes from '../components/LeaderPokeBoxes'

export default {
    name: "Let's Go",
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