<template>
<div class="events">
  <ul v-for='event in events' v-bind:key="event.id">
    <img class="show" :src="event.image" />
    <li>{{ event.description }}</li>
    <li>{{ event.date }}</li>
    <li>{{ event.time }}</li>
    <li>{{ event.location }}</li>
    <li>{{ event.cover }}</li>
  </ul>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    ...mapActions(['getEvents'])
  }, 
  computed:
  {
    ...mapState(['events'])
  },
  mounted() {
    this.getEvents()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  margin: 20px 0 0;
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}

img {
  display: block;
}

.events {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 25vw);
  grid-gap: 15px;
}

.show {
  height: 100%;
  width: 100%;
  object-fit: contain;  
}
</style>
