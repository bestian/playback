<template>
  <div class="about">
    <h1>
        <span class = "fat-only">一頁頁
        </span>
    </h1>
    <p>
      一頁一頁（簡稱一頁頁）像故事書翻頁一樣。
    </p>
    <p>
      這是用來呈現起承轉合，比較有軸線的故事。
    </p>
    <p>
      主持人將故事切成「四到七頁」。每頁用一個短句代表。
    </p>
    <p>
      當主持人說出短句的時候，所有演員一起向前踏前一步做出一個姿勢，然後就定格。
    </p>
    <p>
      演員不說話，單純當表演動作，同時出發，之後一起定格成為塑像。
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
  name: 'Pages',
  data () {
    return {
      myF:  {n: '起點', css: ''},
      forms:  [
            {n: '起點', css: ''},
            {n:'一頁頁', c:'一頁頁',
              css: 'pages',
              d:'主持人將故事切成5~7頁，每頁用一個短句表示，演員不說話，每頁聽到頁名時，一起做動作出去，一起定格。',
              g:'深度不高、情節曲折、時間較長的故事'}
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
$step-four: 133px;
$step-five: 166px;
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


@include keyFrames(pages) {
  0% { top:0px }
  10% { top:$step-one; }
  20% { top:$step-one; }
  30% { top:$step-two; }
  40% { top:$step-two; }
  50% { top:$step-three; }
  60% { top:$step-three; }
  70% { top:$step-four; }
  80% { top:$step-four; }
  90% { top:$step-five; }
  100% { top:$step-five; }
}

@include keyFrames(speak) { 
  0% { transform: scale(1) }
  50% { transform: scale(1.2) ;
        background-color: $primary-color;}
  100% { transform: scale(1) }
}

/* 一頁頁 */
.pages {
  animation: pages 5s ease forwards 1,
    speak 1s ease forwards 5;
}

#p1 {
    animation-delay: 0s;
}
#p2 {
    animation-delay: 0s;
}
#p3 {
    animation-delay: 0s;
}
#p4 {
    animation-delay: 0s;
}

/* ~塑像 */

</style>