<template>
 <!-- Desktop navbar -->
        <nav class=" navbar navbar-expand-lg  navbar-light bg-transparent py-0">
          <div class="container">
              <logo></logo>
              <desktop_menu></desktop_menu>

          </div>
        </nav>
</template>
<script>
  import desktop_menu from './desktop_menu';
  import logo from './logo';
export default{
      created(){

      },
      components:{
         desktop_menu,
         logo
        
      }
   }

</script>