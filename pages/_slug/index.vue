<template>
  <h1>index page of {{ $route.params.slug }}</h1>
</template>
<script>
export default {
  name: 'SlugPage',
  head () {
    return {
      title: `Cure Near Me - ${this.$route.params.slug}`,
      meta: [

        {
          hid: 'og:title',
          property: 'og:title',
          content: `Cure Near Me - ${this.$route.params.slug}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'One Stop solutions for all medical needs- custom descripption'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'// replace with your image URL
        }

      ]
    }
  }
}
</script>
