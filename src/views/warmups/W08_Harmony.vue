<template lang="pug">
.warmup-page
  .ui.segment.container
    .svg-hero
      svg(viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg")
        //- 閉眼的人們圍成半圓
        circle(cx="40" cy="90" r="12" fill="#9b59b6" opacity="0.7")
        line(x1="38" y1="87" x2="34" y2="87" stroke="white" stroke-width="1.5")
        line(x1="42" y1="87" x2="46" y2="87" stroke="white" stroke-width="1.5")
        circle(cx="80" cy="60" r="12" fill="#8e44ad" opacity="0.8")
        line(x1="78" y1="57" x2="74" y2="57" stroke="white" stroke-width="1.5")
        line(x1="82" y1="57" x2="86" y2="57" stroke="white" stroke-width="1.5")
        circle(cx="130" cy="55" r="12" fill="#7d3c98" opacity="0.8")
        line(x1="128" y1="52" x2="124" y2="52" stroke="white" stroke-width="1.5")
        line(x1="132" y1="52" x2="136" y2="52" stroke="white" stroke-width="1.5")
        circle(cx="175" cy="80" r="12" fill="#6c3483" opacity="0.7")
        line(x1="173" y1="77" x2="169" y2="77" stroke="white" stroke-width="1.5")
        line(x1="177" y1="77" x2="181" y2="77" stroke="white" stroke-width="1.5")
        //- 音符
        circle(cx="52" cy="72" r="4" fill="#9b59b6")
        line(x1="56" y1="72" x2="56" y2="55" stroke="#9b59b6" stroke-width="2")
        path(d="M56 55 Q62 52 60 58" fill="#9b59b6")
        circle(cx="95" cy="40" r="4" fill="#8e44ad")
        line(x1="99" y1="40" x2="99" y2="22" stroke="#8e44ad" stroke-width="2")
        path(d="M99 22 Q105 19 103 26" fill="#8e44ad")
        circle(cx="145" cy="35" r="4" fill="#7d3c98")
        line(x1="149" y1="35" x2="149" y2="18" stroke="#7d3c98" stroke-width="2")
        path(d="M149 18 Q155 15 153 22" fill="#7d3c98")
        circle(cx="185" cy="58" r="3.5" fill="#6c3483")
        line(x1="188.5" y1="58" x2="188.5" y2="42" stroke="#6c3483" stroke-width="2")
        path(d="M188.5 42 Q194 39 192 46" fill="#6c3483")
        //- 和聲波紋
        path(d="M30 115 Q70 100 110 115 Q150 130 190 115" fill="none" stroke="#9b59b6" stroke-width="2" opacity="0.4")
        path(d="M30 122 Q70 108 110 122 Q150 136 190 122" fill="none" stroke="#8e44ad" stroke-width="1.5" opacity="0.3")
        path(d="M30 128 Q70 116 110 128 Q150 140 190 128" fill="none" stroke="#7d3c98" stroke-width="1" opacity="0.2")

    h1.ui.header 練習八：即興合聲
    .ui.divider

    p 即興和聲是一種非常祥和的體驗活動，所有的人閉上眼睛即興的發出音調，比方說「嗚」或者是「阿」或者是「歐」。所有的人的聲音音頻的高低會交織成一種非常和諧美妙的樂音。這種練習有點像是布農族原住民的八步和音的概念，它沒有歌詞，只有旋律。

    p 旋律也不是固定的，它是即興的一種和音方式。它的開始是由引導者開始，而結尾則是由團體共同決定。當沒有人想要發出聲音的時候會自然而然的收尾。

    p 整個練習的時間大概會是在10到15分鐘左右自然而然會收尾，也可能會長一些，看團體的動力而定。

    .ui.divider
    router-link.ui.large.green.button(to="/warmups") ← 回到暖身活動

</template>

<script>
export default {
  name: 'W08Harmony'
}
</script>

<style scoped lang="scss">
.warmup-page {
  padding: 2em 1em 4em;
}

.svg-hero {
  text-align: center;
  margin-bottom: 1.5em;
  svg {
    width: 300px;
    max-width: 90%;
    height: auto;
  }
}

h1.ui.header {
  color: #16a085;
  text-align: center;
}

p {
  font-size: 18px;
  text-align: left;
  max-width: 620px;
  margin: 0.6em auto;
  color: #2c3e50;
}
</style>
