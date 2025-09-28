<template>
    <div v-if="showRef == -1">
        <p class="wow fadeIn text-center pt-5">Loading...</p>
    </div>

    <div v-if="showRef == 0">
        <div class="container pt-5">
            <div class="container">
                <h1 class="text-center wow fadeIn">The Day I Fell Through The Earth</h1>
                <p v-if="windowWidth < 1024" class="wow fadeIn text-center">
                    This visual novel is best experienced on tablets (in landscape mode), laptops, and computers.
                    Your screen is too small to experience this visual novel.
                </p>
                <div class="text-center">
                    <button v-if="windowWidth >= 1024" type="button" class="wow fadeInLeft text-rdanger no-style-button text-underline" data-wow-duration="3s" data-wow-delay="1s" @click="transitionPart('next')">Start Game <i class="fa-solid fa-angles-right"></i></button>
                </div>
                <div class="row m-0 p-0 wow fadeIn" data-wow-duration="3s" data-wow-delay="1s">  
                    <div class="col-sm-12 col-md-3 offset-md-5 text-center">
                        <img :src="require('../assets/fallingmodel.png')" alt="" class="mt-5" />
                    </div>
                    <div class="col-sm-12 text-center">
                        <small class="text-rdanger">A game by <a href='http://katieliu.ca' target='_blank' class="text-rdanger">Katie</a></small>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="showRef == 1" class="story-background" :style="{backgroundImage: `url(${require('../assets/office1.jpg')})`}">
        <Frame
            conClasses="pt-5"
            rowClasses="pt-lg-5"
            colClasses="col-sm-12 col-md-8"
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

    <div v-if="showRef == 5" class="story-background" :style="{backgroundImage: `url(${require('../assets/fallinganimated.gif')})`}">
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

    <div v-if="showRef == 6" class="story-background" :style="{backgroundSize: 'contain',backgroundImage: `url(${require('../assets/countsheep.jpg')})`}">
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
        <TransitionFrame text="I assumed I survived. But I didn't know where I was. Certainly don't remember hitting pavement." classes="pt-5 text-center" @finished="transitionPart" />
    </div>

    <div v-if="showRef == 8" class="bbg-dark story-background wow fadeIn">
       <Frame
            conClasses=""
            rowClasses="pt-lg-5"
            colClasses="col-md-6 mt-md-5 p-lg-5"
            textClasses="wow fadeIn"
            :textData="part7Text"
            @transition="transitionPart"
        />
        <div class="container dialogue-container p-3 mt-5 wow fadeIn border-5" data-wow-delay="1s">
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(15)">1. Sleep.</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(16)">2. Walk around.</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(17)">3. Yell for help.</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart('next')">4. Cry.</button><br>
        </div>
    </div>

    <div v-if="showRef == 15" class="story-background m-0 p-0" :style="{background: `black`}">
        <div class="wow fadeIn container text-light pt-5" data-wow-delay="1s">
            <h1 class="text-center text-rdanger">Game Over</h1>
            <p>Sleeping gets you nowhere. You're still stuck in a bottomless black pit of nothing and you have no idea what to do.</p>
            <a href="/" class="text-rdanger no-style-button text-underline"> >>> Retry</a>
        </div>
    </div>

    <div v-if="showRef == 16" class="story-background m-0 p-0" :style="{background: `black`}">
        <div class="wow fadeIn container text-light pt-5" data-wow-delay="1s">
            <h1 class="text-center text-rdanger">Game Over</h1>
            <p>You walk until your feet bleed but you feel as if you haven't moved an inch. Still can't see anything.</p>
            <a href="/" class="text-rdanger no-style-button text-underline"> >>> Retry</a>
        </div>
    </div>

    <div v-if="showRef == 17" class="story-background m-0 p-0" :style="{background: `black`}">
        <div class="wow fadeIn container text-light pt-5" data-wow-delay="1s">
            <h1 class="text-center text-rdanger">Game Over</h1>
            <p>You yell until you lose your voice, but it seems no one can hear you.</p>
            <a href="/" class="text-rdanger no-style-button text-underline"> >>> Retry</a>
        </div>
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
        part7Text: data.Part7,
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
        } else {
            this.showRef = dir
        }

        switch (this.showRef) {
            case 2:
                this.introAudio.pause();
                this.rockerAudio.pause();

                this.introAudio.volume = 0.3;
                this.introAudio.play()
                break;
            case 9:
                this.introAudio.pause();
                this.rockerAudio.pause();
                this.$router.push('/chapter2')
                break;
            default:
                break;
        }
    },

    onResize() {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth < 1024) {
            this.showRef = 0;
        }
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
    color: rgb(236, 248, 255);
}
p {
    color: white;
}
img {
    width: 100%;
}
</style>