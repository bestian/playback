<template lang="pug">
.warmup-page
  .ui.segment.container
    .svg-hero
      svg(viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg")
        //- 書頁
        rect(x="40" y="15" width="120" height="100" rx="6" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="2")
        line(x1="100" y1="20" x2="100" y2="110" stroke="#bdc3c7" stroke-width="1")
        //- 左頁文字行
        line(x1="50" y1="32" x2="92" y2="32" stroke="#2c3e50" stroke-width="2" opacity="0.6")
        line(x1="50" y1="44" x2="85" y2="44" stroke="#34495e" stroke-width="2" opacity="0.5")
        line(x1="50" y1="56" x2="90" y2="56" stroke="#2c3e50" stroke-width="2" opacity="0.4")
        line(x1="50" y1="68" x2="80" y2="68" stroke="#34495e" stroke-width="2" opacity="0.5")
        line(x1="50" y1="80" x2="88" y2="80" stroke="#2c3e50" stroke-width="2" opacity="0.3")
        line(x1="50" y1="92" x2="75" y2="92" stroke="#34495e" stroke-width="2" opacity="0.4")
        //- 右頁文字行
        line(x1="108" y1="32" x2="150" y2="32" stroke="#2c3e50" stroke-width="2" opacity="0.5")
        line(x1="108" y1="44" x2="142" y2="44" stroke="#34495e" stroke-width="2" opacity="0.4")
        line(x1="108" y1="56" x2="148" y2="56" stroke="#2c3e50" stroke-width="2" opacity="0.3")
        line(x1="108" y1="68" x2="138" y2="68" stroke="#34495e" stroke-width="2" opacity="0.4")
        //- 河流流動感
        path(d="M30 125 Q60 118 100 125 Q140 132 170 125" fill="none" stroke="#3498db" stroke-width="2.5" opacity="0.5")
        path(d="M35 132 Q65 126 100 132 Q135 138 165 132" fill="none" stroke="#2980b9" stroke-width="2" opacity="0.3")
        //- 人們輪流說話的符號
        circle(cx="20" cy="60" r="6" fill="#3498db" opacity="0.5")
        circle(cx="180" cy="50" r="6" fill="#2980b9" opacity="0.5")
        path(d="M26 58 L38 45" fill="none" stroke="#3498db" stroke-width="1.5" opacity="0.4")
        path(d="M174 48 L162 38" fill="none" stroke="#2980b9" stroke-width="1.5" opacity="0.4")

    h1.ui.header 練習九：接力詩
    .ui.divider

    p 即興詩是一種練習詩這種元素的方式。在四元素裡面，詩是最後一個元素，是用來凝結總結整個演出的一個核心。

    p 即興詩的進行方式就是所有的人，可能用輪流，或者是不是輪流，而是想到的人就直接說出一句當下有感覺的話。可能是印象中的詩句，或者是即興想到的詩句，然後接力像是河流的流動一樣完成一首短詩。

    .ui.divider
    router-link.ui.large.green.button(to="/warmups") ← 回到暖身活動

</template>

<script>
export default {
  name: 'W09Poetry'
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
    width: 280px;
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
