<template>
    <div v-if="showRef == 0" class="story-background" :style="{backgroundImage: `url(${require('../assets/park.jpg')})`}">
        <Frame
            conClasses="pt-5"
            rowClasses="pt-lg-5 lg-mt"
            colClasses="col-md-6 col-lg-4 pt-lg-5"
            textClasses="wow fadeIn"
            :textData="part1Text"
            showNext
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 1" class="story-background" :style="{backgroundImage: `url(${require('../assets/park.jpg')})`}">
        <Frame
            conClasses="pt-lg-5"
            rowClasses="pt-5"
            colClasses="col-md-6 col-lg-4"
            textClasses="wow fadeIn"
            :textData="part2Text"
        />
        <div class="container dialogue-container p-3 mt-5 wow fadeIn border-5" data-wow-delay="2s">
            <button type="button" class="dialogue-btn border-0" @click="transitionPart('next')">1. Prepare to go the burlesque show tonight.</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(16)">2. Skip the show tonight and go next week instead.</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(16)">3. Run errands instead. Your floors need to be vaccuumed.</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(16)">4. Relax in the park for the rest of the day and evening.</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(16)">5. Do literally anything else instead of going to the show.</button>
        </div>
    </div>

    <div v-if="showRef == 2" class="story-background" :style="{backgroundImage: `url(${require('../assets/park1.jpg')})`}">
        <Frame
            conClasses=""
            rowClasses=""
            colClasses="col-md-6 col-lg-4 offset-lg-6 lg-mt"
            textClasses="wow fadeIn"
            :textData="part3Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 3" class="story-background" :style="{backgroundImage: `url(${require('../assets/park2.jpg')})`}">
        <Frame
            conClasses="pt-lg-5"
            rowClasses="pt-5"
            colClasses="col-md-6 col-lg-4 offset-lg-6 lg-mt"
            textClasses="wow fadeIn"
            :textData="part4Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 4" class="story-background">
        <TransitionFrame text="Later that evening..." classes="wow fadeIn pt-5 text-center" @finished="transitionPart" />
    </div>

    <div v-if="showRef == 5" class="story-background" :style="{backgroundImage: `url(${require('../assets/walking.png')})`, backgroundPosition: 'bottom'}">
        <Frame
            conClasses="pt-5"
            rowClasses="pt-5 lg-mt"
            colClasses="col-md-6 col-lg-4 lg-mt"
            textClasses="wow fadeIn"
            :textData="part5Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 6" class="story-background" :style="{backgroundImage: `url(${require('../assets/opendoor.jpg')})`, backgroundPosition: 'top'}">
        <Frame
            conClasses="pt-5"
            rowClasses="pt-5 lg-mt"
            colClasses="col-md-6 col-lg-4 lg-mt"
            textClasses="wow fadeIn"
            :textData="part6Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 7" class="story-background m-0 p-0" :style="{backgroundImage: `url(${require('../assets/firstsight.png')})`, backgroundPosition: 'bottom'}">
        <TransitionFrame classes="wow fadeIn m-0 p-0" @finished="transitionPart" />
    </div>

    <div v-if="showRef == 8" class="story-background m-0 p-0" :style="{backgroundImage: `url(${require('../assets/devon1.png')})`, backgroundPosition: 'top'}">
        <TransitionFrame classes="wow fadeIn m-0 p-0" @finished="transitionPart" />
    </div>

    <div v-if="showRef == 9" class="story-background">
        <TransitionFrame text="You're drawn in by a beautiful mysterious woman who instantly pulls you out of the crowd." classes="wow fadeIn pt-5 text-center" @finished="transitionPart" />
    </div>

    <div v-if="showRef == 10" class="story-background m-0 p-0" :style="{backgroundImage: `url(${require('../assets/devon2.png')})`, backgroundPosition: 'top'}">
        <TransitionFrame classes="wow fadeIn m-0 p-0" @finished="transitionPart" />
    </div>

    <div v-if="showRef == 11" class="story-background m-0 p-0" :style="{backgroundImage: `url(${require('../assets/together.png')})`}">
        <TransitionFrame classes="wow fadeIn m-0 p-0" @finished="transitionPart" />
    </div>

    <div v-if="showRef == 12" class="story-background">
        <TransitionFrame text="You realize there's a world out there worth exploring and how much of it you were missing." classes="wow fadeIn pt-5 text-center" @finished="transitionPart" />
    </div>

    <div v-if="showRef == 13" class="story-background m-0 p-0" :style="{backgroundImage: `url(${require('../assets/together2.png')})`, backgroundPosition: 'top left'}">
        <TransitionFrame classes="wow fadeIn m-0 p-0" @finished="transitionPart" />
    </div>

    <div v-if="showRef == 14" class="story-background m-0 p-0" :style="{backgroundImage: `url(${require('../assets/together3.png')})`, backgroundPosition: 'center bottom'}">
        <TransitionFrame classes="wow fadeIn m-0 p-0" @finished="transitionPart" />
    </div>

    <div v-if="showRef == 16" class="story-background m-0 p-0" :style="{background: `black`}">
        <div class="wow fadeIn container text-light pt-5">
            <h1 class="text-center text-rdanger">Game Over</h1>
            <p> You feel as though you might've missed something important, something that might have changed your sorry life. However, it's too late to go back and change your past actions. You spend the rest of your days moping around.</p>
            <a href="/" class="text-rdanger no-style-button text-underline"> >>> Main Menu</a>
        </div>
    </div>

</template>
<script>
import "../styles/main.scss";
import TransitionFrame from "../components/Transition.vue"
import Frame from "../components/Frame.vue"
import data from "../data/scene3.js"

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
        devonAudio: new Audio(require('../music/meetingdevon.mp3')),
        comehereAudio: new Audio(require('../music/comehere.mp3')),
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
            case 7:
                this.devonAudio.pause();
                this.devonAudio.play();
                break;
            case 10:
                setTimeout(() => {
                    this.comehereAudio.play();
                }, 2000);
                break;
            case 15:
                this.$router.push('/credits')
                break;
            default:
                break;
        }
    }
  }
}
</script>