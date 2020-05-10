<template>
  <div id="app">  
    <Loading       
      :displayLoadingMessage="displayLoadingMessage"
    />  
    <Person
      v-if="people.length > 0"
      gender="Male"
      :people="people"
    />
    <Person
      v-if="people.length > 0"
      gender="Female"
      :people="people"
    />
  </div>
</template>

<script>
import axios from 'axios'

import Loading from './components/Loading.vue'
import Person from './components/Person.vue'

export default {
  name: 'App',
  data () {
    return {
      people: [],
      displayLoadingMessage: true      
    }
  },
  components: {
    Person,
    Loading
  },
  created() {
    this.displayLoadingMessage = true
  },
  mounted() {
    let url = 'https://agltestfunction.azurewebsites.net/api/getPeople'

    axios.get(url).then(response => {        
      this.people = response.data                 
      this.displayLoadingMessage = false
    }).catch(e => {
      console.log(e)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
