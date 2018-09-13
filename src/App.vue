


<template >
  <div id="app">
     
    <header> 
      
     Subbreddits
    </header>
   
    <router-view  :category="name"/>
    <router-view  :category="name1"/>
    <router-view  :category="name2"/>
    <router-view  :category="name3"/>
    <router-view  :category="name4"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function () {
   return {
    name: 'space',
    name1: 'food',
    name2: 'art',
    name3: 'movies',
    name4: 'funny'
   };
  }
  
  
  }
  

</script>

<style>
body {
  font-family: arial;
  color: #666666;
  background: #f4f4f4;
  margin: 0;
  padding: 0;


}
a{
  text-decoration: none;

}
header{
  background: coral;
  color: #ffffff;
  padding: 10px;
  text-align: center;

}
</style>
