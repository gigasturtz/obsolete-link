<template>
<v-container fluid class="events">
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <template v-slot:activator="{ on }">
      <v-btn
      v-on="on"
      >submit</v-btn>
    </template>

    <v-card>
      <v-card-title
        class="headline grey lighten-2"
        primary-title
      >
        submit an event
      </v-card-title>
      <v-card-text>
        <v-text-field
        v-model="description"
        :messages="['Description']"/>
        <v-text-field
        v-model="location"
        :messages="['Location']"/>
        <v-text-field
        v-model="date"
        :messages="['Date']"/>
        <v-text-field
        v-model="time"
        :messages="['Time']"/>
        <v-text-field
        v-model="cover"
        :messages="['Cover']"/>
        <v-text-field
        v-model="image"
        :messages="['Image URL']"/>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="submit"
        >
        submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-cols cols="2">
  <v-row
    :align="alignment"
    :justify="justify">
    <v-card v-for='event in events' v-bind:key="event.id"
      class="event"
      min-height="auto"
      max-width="600"
      outlined
    >
        <v-img class="show" max-height="75%" :src="event.image" />
        <v-card-text class="description">
          <div>{{ event.description }}</div>
          <div>{{ event.date }}</div>
          <div>{{ event.time }}</div>
          <div>{{ event.location }}</div>
          <div>{{ event.cover }}</div>
        </v-card-text>
    </v-card>
  </v-row>
  </v-cols>
</v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  props: {
    msg: String
  },
  methods: {
    ...mapActions(['getEvents', 'addEvent']),
    submit() {
      if (this.description === undefined) {
        return
      }

      const submittedEvent = {
        description: this.description,
        location: this.location,
        date: this.date,
        time: this.time,
        cover: this.cover,
        image: this.image
      }
      this.addEvent(submittedEvent)
      this.dialog = false 
    }
  }, 
  computed:
  {
    ...mapState(['events'])
  },
  mounted() {
    this.getEvents()
  },
  data () {
      return {
        alignmentsAvailable: [
          'start',
          'center',
          'end',
          'baseline',
          'stretch',
        ],
        alignment: 'center',
        dense: false,
        justifyAvailable: [
          'start',
          'center',
          'end',
          'space-around',
          'space-between',
        ],
        justify: 'center',
        dialog: false,
        description: undefined,
        location: undefined,
        date: undefined,
        time: undefined,
        cover: undefined,
        image: undefined
      }
    },
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
