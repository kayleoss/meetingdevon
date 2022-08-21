<template>
  <router-view/>
  <div v-for="img in images" :key="images.indexOf(img)" class="d-none">
    <img :src="require(`./assets/${img}`)" rel="preload" />
  </div>
</template>
<script>
  export default {
    name: "App",
    data() {
      return {
        images: [
          'aftershow.jpg',
          'aftershow2.jpg',
          'aftershow3.jpg',
          'bed1.png',
          'burlesque.png',
          'devon1.png',
          'devon2.png',
          'fineillgo.png',
          'firstsight.png',
          'home1.jpg',
          'kit.jpg',
          'marla.jpg',
          'marla.png',
          'office1.jpg',
          'office2.jpg',
          'opendoor.jpg',
          'park.jpg',
          'park1.jpg',
          'park2.jpg',
          'subway1.jpg',
          'subway2.png',
          'together.png',
          'together2.png',
          'together3.png',
          'typing.jpg',
          'walking.png'
        ]
      }
    }
  }
</script>
