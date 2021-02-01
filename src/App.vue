<template>
<div id="app">
 <button id="toggle-btn"><i class="fas fa-bars"></i></button>

<div class="nav" >




 <router-link class="link" to="/">Home</router-link>
 <router-link class="link" to="/product">Products</router-link>
 <router-link class="link" to="/about">About</router-link>
 <router-link class="link" to="/cart"><i class="fas fa-shopping-bag"></i></router-link>

</div>


 <router-view>
 
 </router-view>

 
</div>

</template>

<script>



export default {
  components:{
    
  },
  data() {
    return {
  
        
  
    }
  },
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500&family=Yusei+Magic&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;

}
.nav{
  background-color: black;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#toggle-btn{
  display: none;
}
.link{
  color: white;
  margin-right:30px ;
  text-decoration: none;
  text-transform: uppercase;
	font-family: 'Roboto', sans-serif;
  font-size: 0.8em;
  font-weight: bold;
  letter-spacing: 2px;


}
.fa-shopping-bag{
  font-size: 1.1rem;
}
@media(max-width:576px){
  .nav{
    width: 100vw;
    height: fit-content;
    flex-direction: column;
    display: none;
  }
  #toggle-btn{
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    margin: 7px;
    color: white;
    font-size: 30px;
    background: none;
    outline: none;
    border: none;
    height: 60px;
  }
  .link{
    height: 30px;
  }
}

</style>
