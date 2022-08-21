<template>
    <div :class='["container", conClasses]'>
        <div :class='["row", rowClasses]'>
            <div :class='["col-sm-12", colClasses]'>
                <TextWall :classes="textClasses" :text="textData" :showNext="showNext" :showBack="showBack" @clicked="onTransition" />
            </div>
        </div>
    </div>
</template>

<script>
import TextWall from "./TextWall.vue";
export default {
  name: 'Frame',
  props: {
    conClasses: String,
    rowClasses: String,
    colClasses: String,
    textClasses: String,
    textData: String,
    showNext: Boolean,
    showBack: Boolean
  },
  components: {
    TextWall
  },
  methods: {
    onTransition(dir) {
        this.$emit('transition', dir)
    }
  }
}
</script>
