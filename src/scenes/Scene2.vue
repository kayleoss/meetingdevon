<template>
    <div v-if="showRef == 0" class="story-background">
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

    <div v-if="showRef == 1" class="story-background" :style="{backgroundImage: `url(${require('../assets/mysteriouswoman.jpg')})`}">
        <Frame
            conClasses="pt-lg-5"
            rowClasses="pt-5"
            colClasses="col-md-6 col-lg-4 lg-mt"
            textClasses="wow fadeIn"
            :textData="part2Text"
            @transition="transitionPart"
        />
        <div class="container dialogue-container p-3 mt-5 wow fadeIn border-5" data-wow-delay="1s">
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(20)">1. Who are you?</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(20)">2. Where am I?</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(20)">3. Why am I here?</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart('next')">4. Can you help me?</button><br>
        </div>
    </div>

    <div v-if="showRef == 20" class="story-background" :style="{backgroundImage: `url(${require('../assets/mysteriouswoman.jpg')})`}">
        <Frame
            conClasses="pt-lg-5"
            rowClasses="pt-5"
            colClasses="col-md-4 lg-mt"
            textClasses="wow fadeIn"
            :textData="part20Text"
            showBack
            @transition="transitionPart(1)"
        />
    </div>
    
    <div v-if="showRef == 2" class="story-background" :style="{backgroundImage: `url(${require('../assets/paintbrush.jpg')})`}">
        <Frame
            conClasses=""
            rowClasses=""
            colClasses="col-md-4 offset-md-6 lg-mt"
            textClasses="wow fadeIn"
            :textData="part3Text"
            @transition="transitionPart"
        />
        <div class="container dialogue-container p-3 mt-5 wow fadeIn border-5" data-wow-delay="1s">
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(19)">1. Pencil</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart('next')">2. Paintbrush</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(19)">3. Knife</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(19)">4. Scissors</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(19)">5. Flashlight</button><br>
        </div>
    </div>

    <div v-if="showRef == 3" class="story-background" :style="{backgroundImage: `url(${require('../assets/paintbrushunblurred.jpg')})`}">
        <Frame
            conClasses="pt-lg-5"
            rowClasses="pt-5"
            colClasses="col-md-6 col-lg-4 lg-mt"
            textClasses="wow fadeIn"
            :textData="part4Text"
            showNext
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 4" class="story-background" :style="{backgroundImage: `url(${require('../assets/paintbrushunblurred.jpg')})`}">
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

    <div v-if="showRef == 5" class="story-background" :style="{backgroundImage: `url(${require('../assets/practice.jpg')})`, backgroundPosition: 'top'}">
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
    </div>

    <div v-if="showRef == 6" class="story-background" :style="{backgroundImage: `url(${require('../assets/mysteriouswoman2.jpg')})`}">
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

    <div v-if="showRef == 7" class="story-background" :style="{backgroundImage: `url(${require('../assets/mysteriouswoman.jpg')})`}">
        <Frame
            conClasses="pt-5"
            rowClasses="pt-5 lg-mt"
            colClasses="col-md-6 col-lg-4 lg-mt"
            textClasses="wow fadeIn"
            :textData="part8Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 8" class="bbg-dark story-background wow fadeIn">
        <TransitionFrame text="The brush seemed to move by itself. <br>While I was physically holding it, whatever it was painting was entirely of its own volition." classes="pt-5 text-center" @finished="transitionPart" />
    </div>

    <div v-if="showRef == 19" class="story-background m-0 p-0" :style="{background: `black`}">
        <div class="wow fadeIn container text-light pt-5" data-wow-delay="1s">
            <h1 class="text-center text-rdanger">Game Over</h1>
            <p>The woman looks down at you with contempt. "You are not worthy."</p>
            <a href="/chapter2" class="text-rdanger no-style-button text-underline"> >>> Retry chapter</a>
        </div>
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
        part10Text: data.Part10,
        part11Text: data.Part11,
        part12Text: data.Part12,
        part20Text: data.Part20,
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
        } else {
            this.showRef = dir
        }

        switch (this.showRef) {
            case 1:
                this.burlesqueAudio.pause();
                this.rockerAudio.pause();
                this.rockerAudio.play();
                break;
            case 5:
                this.rockerAudio.pause();
                this.burlesqueAudio.pause();
                this.burlesqueAudio.play();
                break;
            case 9:
                this.burlesqueAudio.pause();
                this.$router.push('/chapter3')
                break;
            default:
                break;
        }
    }
  }
}
</script>