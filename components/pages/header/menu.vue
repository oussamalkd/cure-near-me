<template>
	<div class="hero-section">
     
        <header>   
            <desktopnav></desktopnav>
            <mobilenav></mobilenav>
        </header>

        <search_head></search_head>
       
    </div>
</template>
<script>
   import mobilenav from './mobile_nav';
   import desktopnav from './desktop_nav';
   import search_head from './search';
   export default{
      created(){

      },
      
      components:{
         mobilenav,
         desktopnav,
         search_head
      }
   }
</script>