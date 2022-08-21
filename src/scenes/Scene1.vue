<template>
    <div v-if="showRef == -1">
        <p class="wow fadeIn text-center pt-5">Loading...</p>
    </div>

    <div v-if="showRef == 0">
        <div class="container pt-5">
            <div class="container">
                <h1 class="text-center wow fadeIn">Vol 1:<br>Meeting Devon</h1>
                <p v-if="windowWidth < 1024" class="wow fadeIn text-center">
                    This visual novel is best experienced on tablets (in landscape mode), laptops, and computers.
                    Your screen is too small to experience this visual novel.
                </p>
                <div class="text-center">
                    <button v-if="windowWidth >= 1024" type="button" class="wow fadeInLeft text-rdanger no-style-button text-underline" data-wow-duration="3s" data-wow-delay="2s" @click="transitionPart('next')">Start reading <i class="fa-solid fa-angles-right"></i></button>
                </div>
                <div class="row m-0 p-0 wow fadeIn" data-wow-duration="3s" data-wow-delay="2s">
                    <img :src="require('../assets/covercensored.png')" alt="picture of Kit and Haruko hands stretched out towards each other" />
                    <div class="col-sm-12 text-end">
                        <small class="text-rdanger">By <a href='http://katieliu.ca' target='_blank' class="text-rdanger">Katie</a><br>All rights reserved &copy; 2022</small>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="showRef == 1" class="story-background" :style="{backgroundImage: `url(${require('../assets/office1.jpg')})`}">
        <Frame
            conClasses="pt-5"
            rowClasses="pt-lg-5"
            colClasses="col-md-6 col-lg-4 offset-lg-2 pt-lg-5"
            textClasses="wow fadeIn"
            :textData="part1Text"
            showNext
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 2" class="story-background" :style="{backgroundImage: `url(${require('../assets/office2.jpg')})`}">
        <Frame
            conClasses="pt-lg-5"
            rowClasses="pt-5"
            colClasses="col-md-6 col-lg-4 lg-mt"
            textClasses="wow fadeIn"
            :textData="part2Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 3" class="story-background" :style="{backgroundImage: `url(${require('../assets/typing.jpg')})`}">
        <Frame
            conClasses=""
            rowClasses="pt-lg-5"
            colClasses="col-md-6 offset-lg-6 mt-5"
            textClasses="wow fadeIn"
            :textData="part3Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 4" class="story-background" :style="{backgroundImage: `url(${require('../assets/subway1.jpg')})`}">
        <Frame
            conClasses="pt-lg-5"
            rowClasses="pt-lg-5"
            colClasses="col-md-4 mt-5"
            textClasses=""
            :textData="part4Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 5" class="story-background" :style="{backgroundImage: `url(${require('../assets/subway2.png')})`}">
        <Frame
            conClasses="pt-lg-5"
            rowClasses="pt-lg-5"
            colClasses="col-md-4 mt-5"
            textClasses=""
            :textData="part5Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 6" class="story-background" :style="{backgroundImage: `url(${require('../assets/bed1.png')})`}">
        <Frame
            conClasses=""
            rowClasses="pt-lg-5"
            colClasses="col-md-6 mt-md-5 p-lg-5"
            textClasses="wow fadeIn"
            :textData="part6Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 7" class="bbg-dark story-background wow fadeIn">
        <TransitionFrame text="2 days later..." classes="pt-5 text-center" @finished="transitionPart" />
    </div>
</template>
<script>
import "../styles/main.scss";
import Frame from "../components/Frame.vue"
import data from "../data/scene1.js"
import TransitionFrame from "../components/Transition.vue"

export default {
  name: 'Scene1',
  data() {
    return {
        windowWidth: window.innerWidth,
        showRef: -1,
        part1Text: data.Prologue,
        part2Text: data.Part2,
        part3Text: data.Part3,
        part4Text: data.Part4,
        part5Text: data.Part5,
        part6Text: data.Part6,
        introAudio: new Audio(require('../music/intro-looped.mp3')),
        rockerAudio: new Audio(require('../music/audio2.mp3'))
    }
  },
  components: {
    TransitionFrame,
    Frame
  },
  methods: {
    transitionPart(dir) {
        if (dir == "next") {
            this.showRef += 1
        } else if (dir == "prev") {
            this.showRef -= 1
        }

        switch (this.showRef) {
            case 1:
                this.introAudio.pause();
                this.rockerAudio.pause();

                this.introAudio.volume = 0.3;
                this.introAudio.play()
                break;
            case 6:
                this.introAudio.pause();
                this.rockerAudio.pause();
                break;
            case 8:
                this.$router.push('/chapter2')
                break;
            default:
                break;
        }
    },

    onResize() {
        location.reload()
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
    setTimeout(() => {
        this.showRef += 1
    }, 5000);
  }
}
</script>
<style scoped>
h1 {
    color: red;
}
p {
    color: white;
}
img {
    width: 100%;
}
</style>