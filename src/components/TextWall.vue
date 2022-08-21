<template>
  <div :class='["speech-box", classes]' >
    <p v-html="text"></p>
    <div class="text-center navigation">
        <div v-if="showBack == true" class="text-start nav-button">
            <button class="no-style-button text-primary cnt-btn" type="button" aria-label="Click to go back" @click="onPrev">
                <i class="fa-solid fa-angles-left"></i>
            </button>
        </div>
        <div v-if="showNext == true" class="text-end nav-button">
            <button class="no-style-button text-primary cnt-btn" type="button" aria-label="Click to continue" @click="onNext">
                <i class="fa-solid fa-angles-right"></i>
            </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextWall',
  props: {
    text: String,
    showBack: Boolean,
    showNext: Boolean,
    classes: String
  },
  methods: {
    onNext() {
        this.$emit('clicked', 'next')
    },
    onPrev() {
        this.$emit('clicked', 'prev')
    }
  }
}
</script>
<style scoped>
    .navigation {
        display: flex;
        justify-content: flex-end;
    }
    .nav-button {
        display: inline-block;
    }
</style>
