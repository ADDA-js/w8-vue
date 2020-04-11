//storing our vue instance in a var
var vue = new Vue({
  el: '#app',
  data: {
    lookup: "",
    gifs: []
  },
  methods: {
    get: function(){
    	var url = 'http://api.giphy.com/v1/gifs/search?q=' + this.lookup+ '&key=M3d14RUITzv3YFZyIztoI1k5aaf7apz5';
      axios.get(url).then(function (response){
        vue.gifs = response.data.data
        //why not this???
      })
    }
  }
})
