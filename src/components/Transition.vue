<template>
  <div :class='[classes]'>
    <p v-if="text" class="transition-text" v-html="text"></p>
  </div>
</template>

<script>
export default {
  name: 'TransitionFrame',
  props: {
    text: String,
    classes: String
  },
  mounted() {
    let timeout = 3000;
    if(!this.text){
      timeout = 5000;
    }
    setTimeout(() => {
        this.$emit('finished', 'next')
    }, timeout);
  }
}
</script>
<style>
    .transition-text {
        color: white;
        font-size: 25px;
        margin-top: 15vh;
    }
</style>
