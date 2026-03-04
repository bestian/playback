<template>
  <div class="about">
    <h1 class="ui header">
      流動塑像
    </h1>
    <p>
      流動塑像是第一個也是最重要的一個形式。掌握了流動塑像這個形式之後，所有其他的形式都可以從這上面演化出來。流動塑像的進行方式是這樣子的：由一個主持人、一個說故事的人，跟一些演員。
    </p>
    <p>
      演員一開始是黏土，沒有自己的意圖，就純粹是坐在椅子上。然後呢，說故事的人開始講他的故事，由主持人負責聆聽、問答跟回饋，綜合整理，並且找出重點讓演員可以掌握中間的關鍵元素。
    </p>
    <p>
      純粹在椅子上並不容易。有的人會下意識地翹起二郎腿，那是一種具有防衛性的動作；或是把雙手抱在胸前，這也是不合適的。
    </p>
    <p>
      理想的黏土動作就是雙手平放在腿上，平平穩穩地坐在椅子上，專注而放鬆地聆聽。
    </p>
    <p>
      等到開始的時候，主持人就說：「我們把某某人的故事用流動塑像的方式來呈現，請看。」然後這個時候就有一位演員站起來，然後開始往前走。
    </p>
    <p>
      他會用他的肢體，用非語言的方式來呈現出他抓到的情感或者是意念，並且用很簡單的短句，通常不超過十個字，去描述他的感受。
    </p>
    <p>
      比方說：「我好累」，或者是「我好快樂」，或者是「來這裡真新鮮」之類的。
    </p>
    <p>
      然後重複三次之後，他就會停格變成冰凍狀態，後續的演員就依次的上來，也是以一樣的方式呈現。
    </p>
    <p>
      等到所有人都結凍之後，主持人會說：「請我們把這個故事送給你。」這個時候所有的演員一起看向說故事的人，用眼神把這個故事的能量還給他，然後我們把這個故事的能量還給他。
    </p>
    <p>
      <strong>變化形式：持續流動塑像</strong>
    </p>
    <p>
      當後面的塑像進來時，先出來的塑像不要停，而是逐漸變弱、成為搭配的背景。最後一位塑像結束時再一起定格。
    </p>
    <p>
      這種變化形式會讓整場的持續動態更顯著，定格的張力也更高。
    </p>
    <div class="ui buttons">
        <a class="ui green button" v-for = "f in forms" :key="f.n" @click = "myF = f" :class = "{active: myF.css == f.css}">{{f.n}}</a>
    </div>
    <section class = "stage">
        <div class="statue" id="s1" :class="myF.css"></div>
        <div class="statue" id="s2" :class="myF.css"></div>
        <div class="statue" id="s3" :class="myF.css"></div>
        <div class="statue" id="s4" :class="myF.css"></div>
    </section>
  </div>
</template>

<script type="text/javascript">
    
export default {
  name: 'Statues',
  data () {
    return {
      myF:  {n: '起點', css: ''},
      forms:  [
            {n: '起點', css: ''},
            {n:'定格流動塑像',
             c:'流動塑像', 
             css:'shiftingStatue',
             d:'每人出來講同樣短句三次，之後定格，換下一位出來。\n全部定格後，送給說故事的人。',
             g:'心情或小故事'},
            {n:'持續流動塑像', c:'流動塑像',
             css:'rollingStatue',
              d:'每人出來講同樣短句三次，之後轉小聲、持續動作，換下一位出來。\n最後一位講完再一起定格，送給說故事的人。',
             g:'心情或小故事'}
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

$step-one: 33px;
$step-two: 66px;
$step-three: 100px;
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

@include keyFrames(shiftingStatue) {
  0% { top:0px }
  20% { top:$step-one; }
  33% { top:$step-one; }
  53% { top:$step-two; }
  66% { top:$step-two; }
  87% { top:$step-three; }
  100% { top:$step-three; }
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

@include keyFrames(murmur) {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2);
    background-color: $primary-color; opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}

/* 塑像 */
.shiftingStatue {
  animation: shiftingStatue 3s ease forwards 1, speak 3s ease forwards 1;
}

.rollingStatue {
  animation: shiftingStatue 3s ease forwards 1,
    speak 3s ease forwards 1,
    murmur 2.5s ease forwards 6;
}

#s1 {
    animation-delay: 0s;
}
#s2 {
    animation-delay: 3s;
}
#s3 {
    animation-delay: 6s;
}
#s4 {
    animation-delay: 9s;
}

/* ~塑像 */

</style>