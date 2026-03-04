<template>
  <div class="about">
    <h1 class = "ui header">一對對
    </h1>
    <p>
      一對一對（簡稱一對對）是用來呈現說故事的人的內在衝突。我們時常會有內在矛盾，像是內心的拉扯和小劇場。
    </p>
    <p>
      比方說一個人在考慮要不要離職休息一陣子，他可能會有兩邊不同的內在聲音。
    </p>
    <p>
      一邊是希望離職的，例如：「我好累、我好累、我好累」、「這工作太勉強、這工作太勉強、這工作太勉強」
    </p>
    <p>
      另一邊是希望留下的，例如：「這份工作對我很重要、這份工作對我很重要、這份工作對我很重要」，「我要養家、我要養家、我要養家」
    </p>
    <p>
      演員們，如果有四位的話，先走出一位。
    </p>
    <p>
      先走來的人決定子型式和他扮演的面向。
    </p>
    <p>
      <strong>一對一對常見的子型式有四種</strong>（如果不好記，用前三種也就夠了）：
    </p>
    <p>
      <strong>手勾手：</strong><br>
      先站出來的演員擺出一隻彎曲的手，等著第二位也就是他的搭擋來勾住。勾住之後，先站出來的演員像流動塑像一樣，重覆一個動作和短句三次。唯一不同的是他同時要拉扯第二位站出來的演員。
    </p>
    <p>
      接著，第二位站出來的演員反向拉扯先站出來的演員，並站在相反的立場，重覆一個動作和短句三次。
    </p>
    <p>
      來回各講三輪之後一起定格結凍。
    </p>
    <p>
      <strong>背靠背：</strong>先出來的人往前一站。後出來的人站在他的背後。
    </p>
    <p>
      <strong>面對面：</strong>先出來的人往斜前方走位，面向一側。後出來的人站在他的對面。
    </p>
    <p>
      <strong>下對上：</strong>先出來的人往下一蹲。後出來的人站在他的背後。
    </p>
    <hr class="ui divider">
    <div class="ui vertical buttons thin-only">
        <a class="ui green button" v-for = "f in forms" :key="f.n" @click = "myF = f" :class = "{active: myF.css == f.css}">{{f.n}}</a>
    </div>
    <div class="ui buttons fat-only">
        <a class="ui green button" v-for = "f in forms" :key="f.n" @click = "myF = f" :class = "{active: myF.css == f.css}">{{f.n}}</a>
    </div>
    <section class = "stage">
        <div id ="backToBack" v-if = "myF.css == 'backToBack'">
            <div class="statue" id="b1" :class="myF.css" v-if="myF.css == 'backToBack'"></div>
            <div class="statue" id="b2" :class="myF.css" v-if="myF.css == 'backToBack'"></div>
        </div>
        <div id = "handToHand" v-if = "myF.css == 'handToHand'">
            <div class="statue" id="h1" :class="myF.css" v-if="myF.css == 'handToHand'"></div>
            <div class="statue" id="h2" :class="myF.css" v-if="myF.css == 'handToHand'"></div>
        </div>
        <div class="statue" id="f1" :class="myF.css" v-if="myF.css == 'faceToFace'"></div>
        <div class="statue" id="f2" :class="myF.css" v-if="myF.css == 'faceToFace'"></div>
        <div class="statue" id="d1" :class="myF.css" v-if="myF.css == 'downToUp'"></div>
        <div class="statue" id="d2" :class="myF.css" v-if="myF.css == 'downToUp'"></div>
    </section>
  </div>
</template>

<script type="text/javascript">
    
export default {
  name: 'OneToOne',
  data () {
    return {
      myF:  {n: '起點', css: ''},
      forms:  [
            {n: '起點', css: ''},
            {n:'背靠背', c:'一對對',
              css:'backToBack',
              d:'背對背旋轉，從背面轉向正面時說話，轉三圈。\n兩人各三段、每段三句話。',
              g:'內心的衝突，有時這樣有時那樣的感覺'},

            {n:'手勾手', c:'一對對',
              css:'handToHand',
              d:'拉住對方的手，一面說，一面拉扯對方。',
              g:'內心的衝突，拉扯的感覺'},

            {n:'面對面', c:'一對對',
              css:'faceToFace',
              d:'走直線-，一面說，一面靠近對方。',
              g:'內心的衝突，對立的感覺'},

            {n:'下對上', c:'一對對',
              css:'downToUp',
              d:'先出來的人在下，後出來的人在上。',
              g:'內心的衝突，壓抑和對抗的感覺'}
        ]
    }
  }
}

</script>

<style lang="scss" scoped="">

p {
  text-align: left;
  font-size: 16px !important;
  white-space: pre-line !important;
  padding: 0 1em !important;
  line-height: 1.8 !important;
  max-width: 620px !important;
  margin: 1em auto !important;
}

$primary-color: hsla(0,45%,50%,1);

.statue {
  display: inline-block;
  position: relative;
  margin: 50px;
  width: 50px;  
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
}

@media screen and (max-width: 600px) {
  .statue {
    margin: 10px;
  }
}

.statue:before {
  position: absolute;
  left: 50%;
  margin-left: -8px;
  top: 100%;
  content: "";
  display: inline-block;
  border-top: 8px solid black; 
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}

@mixin keyFrames($animation-name) {
  @-webkit-keyframes #{$animation-name} {   @content; }
  @-moz-keyframes #{$animation-name} {  @content; }
  @keyframes #{$animation-name} {  @content; }
}



/*  一對對 */

@include keyFrames(backToBackS) {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}

@include keyFrames(speakBTB) {
  0% { transform: scale(1) }
  20% { transform: scale(1.2) ;
      background-color: $primary-color; }
  30% { transform: scale(1) }
  50% { transform: scale(1.2) ;
        background-color: $primary-color; }
  66% { transform: scale(1) }
  100% { transform: scale(1) }
}

#backToBack {
    width: 300px;
    height: 150px;
    animation: backToBackS 3s linear forwards 3;
}

@media (min-width: 601px) {
  #backToBack {
    width: 300px;
    height: 250px;
    animation: backToBackS 3s linear forwards 3;
  }
}

#b1 {
    position: absolute;
    top: 0;
    left: 125px;
    &::before {
      position: absolute;
      left: 50%;
      margin-left: -8px;
      top: -16px;
      content: "";
      display: inline-block;
      border-bottom: 8px solid black;
      border-top: 8px solid transparent; 
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
    }
    animation: speakBTB 3s linear forwards 3;
}

#b2 {
    position: absolute;
    bottom: 0;
    left: 125px;
    animation: speakBTB 3s linear forwards 3;
    animation-delay: 1.5s;
}

@include keyFrames(handToHandS) {
  0% { transform: translateX(0px) }
  10% { transform: translateX(-15px) }
  20% { transform: translateX(-30px) }
  30% { transform: translateX(-30px) }
  40% { transform: translateX(-45px) }
  50% { transform: translateX(-45px) }
  60% { transform: translateX(-30px) }
  70% { transform: translateX(-30px) }
  80% { transform: translateX(-15px) }
  90% { transform: translateX(-15px) }
  100% { transform: translateX(0px) }
}

#handToHand {
    width: 300px;
    height: 150px;
    animation: handToHandS 3s linear forwards 3;
}

@media (min-width: 601px) {
  #handToHand {
    width: 600px;
    height: 400px;
    animation: handToHandS 3s linear forwards 3;
  }
}

#h1 {
    animation: speakBTB 3s linear forwards 3;
}

#h2 {
    position: relative;
    left: -20px;
    animation: speakBTB 3s linear forwards 3;
    animation-delay: 1.5s;
}

@include keyFrames(speakFTF1) {
  0% { left: -100px }
  50% { left: -50px }
  100% { left: 0px }
}

@include keyFrames(speakFTF2) {
  0% { left: 100px }
  50% { left: 50px }
  100% { left: 0px }
}

@include keyFrames(speak) { 
  0% { transform: scale(1) }
  20% { transform: scale(1.2) ;
      background-color: $primary-color; }
  33% { transform: scale(1) }
  66% { transform: scale(1) }
  87% { transform: scale(1.2) ;
        background-color: $primary-color;}
  100% { transform: scale(1) }
}

#f1 {
    position: relative;
    left: -100px;
    &::before {
      position: absolute;
      left: 100%;
      margin-left: 0;
      top: 35%;
      content: "";
      display: inline-block;
      border-bottom: 8px solid transparent;
      border-top: 8px solid transparent; 
      border-left: 8px solid black;
      border-right: 8px solid transparent;
    }
    animation: speakFTF1 9s linear forwards 1, speak 3s linear forwards 3;
}

#f2 {
    position: relative;
    left: 100px;
    &::before {
      position: absolute;
      left: -8px;
      top: 35%;
      content: "";
      display: inline-block;
      border-bottom: 8px solid transparent;
      border-top: 8px solid transparent; 
      border-left: 8px solid transparent;
      border-right: 8px solid black;
    }
    animation:  speakFTF2 9s linear forwards 1, speak 3s linear forwards 3;
    animation-delay: 1.5s;
}

#d1 {
    position: absolute;
    top: 0;
    left: 100px;
    animation: speak 3s linear forwards 3;
}

#d2 {
    position: absolute;
    top: 100px;
    left: 100px;
    animation: speak 3s linear forwards 3;
    animation-delay: 1.5s;
}

/* ~一對對 */

</style>
