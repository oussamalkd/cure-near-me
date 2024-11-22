<template>
  <h1>Cure Near me </h1>
</template>

<script>
export default {
  name: 'IndexPage',
  head () {
    return {
      title: 'Cure Near Me',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'One Stop solutions for all medical needs'
        },

        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Cure Near Me'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'One Stop solutions for all medical needs'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'// replace with your image URL
        }

      ]
    }
  }
}
</script>
