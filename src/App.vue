<template>
  <router-view/>
  <div class="d-none">
    <img v-for="img in images" :key="images.indexOf(img)" :src="require(`./assets/${img}`)" rel="preload" />
  </div>
</template>
<script>
  export default {
    name: "App",
    data() {
      return {
        images: [
          'countsheep.jpg',
          'fallinganimated.gif',
          'fallingmodel.png',
          'fallingwhitedivider.jpg',
          'hugend.gif',
          'mysteriouswoman.jpg',
          'mysteriouswoman2.jpg',
          'mysteriouswoman3.jpg',
          'office1.jpg',
          'office2.jpg',
          'paintbrush.jpg',
          'paintbrushunblurred.jpg',
          'painting1.jpg',
          'painting2.jpg',
          'painting3.jpg',
          'painting4.jpg',
          'painting5.jpg',
          'painting6.jpg',
          'practice.jpg',
          'subway1.jpg',
          'summer.jpg',
          'tearswell.gif',
          'typing.jpg'
        ]
      }
    }
  }
</script>
