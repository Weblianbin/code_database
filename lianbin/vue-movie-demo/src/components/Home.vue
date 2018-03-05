<template>
  <div>
      <ul>
          <li v-for='film in films' :key='film.id'>
              <div>
                  <img :src="film.images.small" :alt="film.title">
              </div>
              <div>
                  <h3>{{film.title}}</h3>
                  <h3>{{film.year}}</h3>
                  <h3>{{film.subtype}}</h3>
              </div>
          </li>
      </ul>
  </div>
</template>
<style>
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  padding-bottom: 8px;
}
</style>
<script>
import axios from "axios"
export default {
  data() {
    return {
      films: []
    };
  },
  created: function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=20').then((res)=>{
        this.films = res.body.subjects
    })
  }
};
</script>