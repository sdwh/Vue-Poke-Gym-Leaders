<template>
  <h1 class="mb-5">Let's Go 2nd</h1>
  <LeaderPokeBoxes :leadersData="leaders['Letsgo2nd']"/>
</template>

<script>
import leaders from '../data/leaders.json'
import LeaderPokeBoxes from '../components/LeaderPokeBoxes'

export default {
    name: "Let's Go 2nd",
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