<template>
    <div v-if="showRef == 0" class="story-background" :style="{backgroundImage: `url(${require('../assets/home1.jpg')})`}">
        <Frame
            conClasses="pt-5"
            rowClasses="pt-lg-5"
            colClasses="col-md-6 col-lg-4 pt-lg-5"
            textClasses="wow fadeIn"
            :textData="part1Text"
            showNext
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 1" class="story-background" :style="{backgroundImage: `url(${require('../assets/marla.png')})`}">
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

    <div v-if="showRef == 2" class="story-background" :style="{backgroundImage: `url(${require('../assets/kit.jpg')})`}">
        <Frame
            conClasses=""
            rowClasses=""
            colClasses="col-md-4 offset-md-6 lg-mt"
            textClasses="wow fadeIn"
            :textData="part3Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 3" class="story-background" :style="{backgroundImage: `url(${require('../assets/marla.png')})`}">
        <Frame
            conClasses="pt-lg-5"
            rowClasses="pt-5"
            colClasses="col-md-6 col-lg-4 lg-mt"
            textClasses="wow fadeIn"
            :textData="part4Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 4" class="story-background" :style="{backgroundImage: `url(${require('../assets/fineillgo.png')})`}">
        <Frame
            conClasses=""
            rowClasses=""
            colClasses="col-md-6 offset-md-6 col-lg-4 offset-lg-8 lg-mt"
            textClasses="wow fadeIn"
            :textData="part5Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 5" class="story-background" :style="{backgroundImage: `url(${require('../assets/burlesque.png')})`, backgroundPosition: 'top'}">
        <Frame
            conClasses="pt-5"
            rowClasses="pt-5 lg-mt"
            colClasses="col-md-6 offset-md-6 col-lg-4 offset-lg-8 lg-mt"
            textClasses="wow fadeIn"
            :textData="part6Text"
            showNext
            showBack
            @transition="transitionPart"
        />
        <!-- <div class="stick-bottom bg-dark"><small class="text-light">Drawing inspired by Jo Weldon performing at the Burlesque Hall of Fame in 2010</small></div> -->
    </div>

    <div v-if="showRef == 6" class="story-background" :style="{backgroundImage: `url(${require('../assets/burlesque.png')})`, backgroundPosition: 'top'}">
        <Frame
            conClasses="pt-5"
            rowClasses="pt-5 lg-mt"
            colClasses="col-md-6 col-lg-4 lg-mt"
            textClasses="wow fadeIn"
            :textData="part7Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 7" class="bbg-dark story-background wow fadeIn">
        <TransitionFrame text="After the show..." classes="pt-5 text-center" @finished="transitionPart" />
    </div>

    <div v-if="showRef == 8" class="story-background pt-5" :style="{backgroundImage: `url(${require('../assets/aftershow.jpg')})`}">
        <Frame
            conClasses="pt-5"
            rowClasses="lg-mt"
            colClasses="col-md-6 col-lg-4 pt-5 lg-mt"
            textClasses="wow fadeIn"
            :textData="part8Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 9" class="story-background pt-5" :style="{backgroundImage: `url(${require('../assets/aftershow.jpg')})`}">
        <Frame
            conClasses="pt-5"
            rowClasses="lg-mt"
            colClasses="col-md-6 offset-md-4 col-lg-4 pt-5 lg-mt"
            textClasses="wow fadeIn"
            :textData="part9Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 10" class="story-background pt-5" :style="{backgroundImage: `url(${require('../assets/aftershow.jpg')})`}">
        <Frame
            conClasses="pt-5"
            rowClasses="lg-mt"
            colClasses="col-md-6 col-lg-4 pt-5 lg-mt"
            textClasses="wow fadeIn"
            :textData="part10Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 11" class="story-background pt-5" :style="{backgroundImage: `url(${require('../assets/aftershow2.jpg')})`}">
        <Frame
            conClasses="pt-5"
            rowClasses="lg-mt"
            colClasses="col-md-6 col-lg-4 offset-md-6 pt-5"
            textClasses="wow fadeIn"
            :textData="part11Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 12" class="story-background pt-5" :style="{backgroundImage: `url(${require('../assets/aftershow3.jpg')})`}">
        <Frame
            conClasses="pt-5"
            rowClasses="lg-mt"
            colClasses="col-md-6 col-lg-4 offset-md-6 pt-5"
            textClasses="wow fadeIn"
            :textData="part12Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 13" class="bbg-dark story-background wow fadeIn">
        <TransitionFrame text="Two weeks later<br>August 6th, 2:18PM" classes="pt-5 text-center" @finished="transitionPart" />
    </div>

</template>
<script>
import "../styles/main.scss";
import TransitionFrame from "../components/Transition.vue"
import Frame from "../components/Frame.vue"
import data from "../data/scene2.js"

export default {
    name: 'Scene2',
    components: {
        TransitionFrame,
        Frame
    },
    data() {
    return {
        showRef: 0,
        part1Text: data.Part1,
        part2Text: data.Part2,
        part3Text: data.Part3,
        part4Text: data.Part4,
        part5Text: data.Part5,
        part6Text: data.Part6,
        part7Text: data.Part7,
        part8Text: data.Part8,
        part9Text: data.Part9,
        part10Text: data.Part10,
        part11Text: data.Part11,
        part12Text: data.Part12,
        rockerAudio: new Audio(require('../music/audio2.mp3')),
        burlesqueAudio: new Audio(require('../music/burlesque.mp3'))
    }
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
                this.burlesqueAudio.pause();
                this.rockerAudio.pause();
                this.rockerAudio.play();
                break;
            case 4:
                this.rockerAudio.pause();
                this.burlesqueAudio.pause();
                break;
            case 5:
                this.burlesqueAudio.pause();
                this.burlesqueAudio.play();
                break;
            case 14:
                this.$router.push('/chapter3')
                break;
            default:
                break;
        }
    }
  }
}
</script>