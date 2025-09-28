<template>
    <div v-if="showRef == 0" class="story-background" :style="{backgroundImage: `url(${require('../assets/painting1.jpg')})`}">
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

    <div v-if="showRef == 1" class="story-background" :style="{backgroundImage: `url(${require('../assets/painting1.jpg')})`}">
        <Frame
            conClasses="pt-lg-5"
            rowClasses="pt-5"
            colClasses="col-md-6 col-lg-4"
            textClasses="wow fadeIn"
            :textData="part2Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 2" class="story-background" :style="{backgroundImage: `url(${require('../assets/mysteriouswoman.jpg')})`}">
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

    <div v-if="showRef == 3" class="story-background" :style="{backgroundImage: `url(${require('../assets/painting2.jpg')})`}">
        <Frame
            conClasses="pt-lg-5"
            rowClasses="pt-5"
            colClasses="col-sm-12 col-md-6 col-lg-4"
            textClasses="wow fadeIn"
            :textData="part4Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 4" class="story-background" :style="{backgroundImage: `url(${require('../assets/painting2.jpg')})`}">
        <Frame
            conClasses="pt-lg-5"
            rowClasses="pt-5"
            colClasses="col-sm-12 col-md-6 col-lg-4"
            textClasses="wow fadeIn"
            :textData="part5Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 5" class="story-background" :style="{backgroundImage: `url(${require('../assets/mysteriouswoman3.jpg')})`}">
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

    <div v-if="showRef == 6" class="story-background">
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

    <div v-if="showRef == 7" class="story-background" :style="{backgroundImage: `url(${require('../assets/painting3.jpg')})`}">
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

    <div v-if="showRef == 8" class="story-background" :style="{backgroundImage: `url(${require('../assets/painting4.jpg')})`}">
        <Frame
            conClasses="pt-5"
            rowClasses="pt-5 lg-mt"
            colClasses="col-md-6 col-lg-4 lg-mt"
            textClasses="wow fadeIn"
            :textData="part9Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 9" class="story-background" :style="{backgroundImage: `url(${require('../assets/painting5.jpg')})`}">
        <Frame
            conClasses="pt-5"
            rowClasses="pt-5 lg-mt"
            colClasses="col-md-6 col-lg-4 lg-mt"
            textClasses="wow fadeIn"
            :textData="part10Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 10" class="story-background" :style="{backgroundImage: `url(${require('../assets/painting6.jpg')})`}">
        <Frame
            conClasses="pt-5"
            rowClasses="pt-5 lg-mt"
            colClasses="col-md-6 col-lg-4 lg-mt"
            textClasses="wow fadeIn"
            :textData="part11Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 11" class="story-background">
        <Frame
            conClasses="pt-5"
            rowClasses="pt-5 lg-mt"
            colClasses="col-md-6 col-lg-4 lg-mt"
            textClasses="wow fadeIn"
            :textData="part12Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 12" class="story-background" :style="{backgroundImage: `url(${require('../assets/tearswell.gif')})`}">
        <Frame
            conClasses="pt-5"
            rowClasses="pt-5 lg-mt"
            colClasses="col-md-6 col-lg-4 lg-mt"
            textClasses="wow fadeIn"
            :textData="part13Text"
            showNext
            showBack
            @transition="transitionPart"
        />
    </div>

    <div v-if="showRef == 13" class="story-background" :style="{backgroundImage: `url(${require('../assets/mysteriouswoman3.jpg')})`}">
        <Frame
            conClasses="pt-5"
            rowClasses="pt-5 lg-mt"
            colClasses="col-md-6 col-lg-4 lg-mt"
            textClasses="wow fadeIn"
            :textData="part14Text"
        />
        <div class="container dialogue-container p-3 mt-5 wow fadeIn border-5" data-wow-delay="1s">
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(19)">1. I need to find her.</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(20)">2. I should have done things differently.</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart('next')">3. I'm so sorry.</button><br>
        </div>
    </div>

    <div v-if="showRef == 14" class="story-background" :style="{backgroundImage: `url(${require('../assets/mysteriouswoman3.jpg')})`}">
        <Frame
            conClasses="pt-5"
            rowClasses="pt-5 lg-mt"
            colClasses="col-md-6 col-lg-4 lg-mt"
            textClasses="wow fadeIn"
            :textData="part15Text"
        />
        <div class="container dialogue-container p-3 mt-5 wow fadeIn border-5" data-wow-delay="1s">
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(19)">1. I need to apologize to her.</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(20)">2.  It's all my fault.</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart('next')">3. Let me return.</button><br>
        </div>
    </div>

    <div v-if="showRef == 15" class="story-background" :style="{backgroundImage: `url(${require('../assets/mysteriouswoman3.jpg')})`}">
        <Frame
            conClasses="pt-5"
            rowClasses="pt-5 lg-mt"
            colClasses="col-md-6 col-lg-4 lg-mt"
            textClasses="wow fadeIn"
            :textData="part16Text"
        />
        <div class="container dialogue-container p-3 mt-5 wow fadeIn border-5" data-wow-delay="1s">
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(21)">1. Home.</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart(22)">2. Reality.</button><br>
            <button type="button" class="dialogue-btn border-0" @click="transitionPart('next')">3. The summer of 1996.</button><br>
        </div>
    </div>

    <div v-if="showRef == 16" class="story-background" :style="{backgroundImage: `url(${require('../assets/office1.jpg')})`}">
        <TransitionFrame classes="wow fadeIn m-0 p-0" @finished="transitionPart" />
    </div>

    <div v-if="showRef == 17" class="story-background" :style="{backgroundImage: `url(${require('../assets/summer.jpg')})`}">
        <TransitionFrame classes="wow fadeIn m-0 p-0" @finished="transitionPart" />
    </div>

    <div v-if="showRef == 18" class="story-background" :style="{backgroundImage: `url(${require('../assets/hugend.gif')})`}">
        <TransitionFrame time classes="wow fadeIn m-0 p-0" @finished="endGame" />
    </div>

    <div v-if="showRef == 19" class="story-background m-0 p-0" :style="{background: `black`}">
        <div class="wow fadeIn container text-light pt-5">
            <h1 class="text-center text-rdanger">Game Over</h1>
            <p>You haven't seen her in 30 years and she has a new number. How will you find her?</p>
            <a href="/chapter3" class="text-rdanger no-style-button text-underline"> >>> Retry chapter</a>
        </div>
    </div>

    <div v-if="showRef == 20" class="story-background m-0 p-0" :style="{background: `black`}">
        <div class="wow fadeIn container text-light pt-5">
            <h1 class="text-center text-rdanger">Game Over</h1>
            <p>You could have done things differently, but you didn't.</p>
            <a href="/chapter3" class="text-rdanger no-style-button text-underline"> >>> Retry chapter</a>
        </div>
    </div>

    <div v-if="showRef == 21" class="story-background m-0 p-0" :style="{background: `black`}">
        <div class="wow fadeIn container text-light pt-5">
            <h1 class="text-center text-rdanger">Game Over</h1>
            <p>Remembering the anguish and despair you've felt over the past 30 years trying to find your sister and make things right with her leaves you breathless and devoid of sanity.</p>
            <a href="/chapter3" class="text-rdanger no-style-button text-underline"> >>> Retry chapter</a>
        </div>
    </div>

    <div v-if="showRef == 22" class="story-background m-0 p-0" :style="{background: `black`}">
        <div class="wow fadeIn container text-light pt-5">
            <h1 class="text-center text-rdanger">Game Over</h1>
            <p>What is reality? Many people have different personal definitions of what reality is. How do you know that you aren't in reality right now?</p>
            <a href="/chapter3" class="text-rdanger no-style-button text-underline"> >>> Retry chapter</a>
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
        part13Text: data.Part13,
        part14Text: data.Part14,
        part15Text: data.Part15,
        part16Text: data.Part16,
        emotionalAudio: new Audio(require('../music/emotional.mp3')),
        endAudio: new Audio(require('../music/feather.mp3'))
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
                this.emotionalAudio.pause();
                this.emotionalAudio.volume = 0.3;
                this.emotionalAudio.play();
                break;
            case 16:
                this.emotionalAudio.pause();
                this.endAudio.play();
                break;
            case 19:
                this.emotionalAudio.pause();
                break;
            case 20:
                this.emotionalAudio.pause();
                break;
            case 21:
                this.emotionalAudio.pause();
                break;
            case 22:
                this.emotionalAudio.pause();
                break;
            default:
                break;
        }
    },
    endGame() {
        this.$router.push('/credits')
    }
  }
}
</script>