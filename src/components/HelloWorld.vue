<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <jsonViewer
      :value="jsonData"
      id="jsonViewer"
      copyable
      theme="my-awesome-json-theme" ></jsonViewer>
  </div>
</template>

<script>
// import jsonViewer from '../package/json-view/json-viewer.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    // jsonViewer
  },
  data() {
    return {
      jsonData: {
        aaa: 1,
        b: [1,2,3,4,5],
        c: true,
        d: {
          a: 1,
        },
        f: function() {}
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
../package/json-view/json-viewer.vue