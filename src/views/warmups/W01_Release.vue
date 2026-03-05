<template lang="pug">
.warmup-page
  .ui.segment.container
    .svg-hero
      svg(viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg")
        //- 大樹展開
        circle(cx="60" cy="120" r="8" fill="#2ecc71")
        line(x1="60" y1="112" x2="60" y2="50" stroke="#27ae60" stroke-width="4")
        line(x1="60" y1="70" x2="35" y2="40" stroke="#27ae60" stroke-width="3")
        line(x1="60" y1="70" x2="85" y2="40" stroke="#27ae60" stroke-width="3")
        line(x1="60" y1="85" x2="30" y2="65" stroke="#2ecc71" stroke-width="2.5")
        line(x1="60" y1="85" x2="90" y2="65" stroke="#2ecc71" stroke-width="2.5")
        circle(cx="35" cy="35" r="12" fill="#2ecc71" opacity="0.6")
        circle(cx="85" cy="35" r="12" fill="#27ae60" opacity="0.6")
        circle(cx="60" cy="30" r="15" fill="#2ecc71" opacity="0.5")
        circle(cx="25" cy="60" r="8" fill="#2ecc71" opacity="0.4")
        circle(cx="95" cy="60" r="8" fill="#27ae60" opacity="0.4")
        //- 箭頭
        text(x="110" y="80" font-size="24" fill="#95a5a6") ⇌
        //- 種籽蜷縮
        circle(cx="155" cy="90" r="15" fill="#27ae60")
        circle(cx="155" cy="90" r="8" fill="#2ecc71")
        circle(cx="155" cy="90" r="3" fill="#1abc9c")

    h1.ui.header 練習一：放與收
    .ui.divider

    p 初次接觸PlayBack劇場的人，很多肢體是緊繃的。

    p 大家還不習慣把肢體打開來用來表現各式各樣的情緒或是動作。

    p 所以呢，我們可以從釋放肢體開始，把肢體打開放大，然後用不同的方式旋轉、伸展放到最大，然後再往最小的方式慢慢的收。

    p 愈放愈大，就像伸展開來的大樹一樣；愈縮愈小，就像縮小的種籽一樣。

    p 我們可以用高低的方式來處理，從1到10。10是最大，1是最小。引導人慢慢從1喊到10的時候，參與的人就把身體開展，越展越大，越展越大，大到10，然後10再慢慢縮小回到1。

    p 這個練習習慣之後，我們就可以跳著做。比方說：1、5、10、10、8、3、1，或者是1、2、6、5。有很多很多的組合可以練習。

    .ui.divider
    router-link.ui.large.green.button(to="/warmups") ← 回到暖身活動

</template>

<script>
export default {
  name: 'W01Release'
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
