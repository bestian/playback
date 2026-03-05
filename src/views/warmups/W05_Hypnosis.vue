<template lang="pug">
.warmup-page
  .ui.segment.container
    .svg-hero
      svg(viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg")
        //- 引導者（左）
        circle(cx="60" cy="40" r="14" fill="#2980b9")
        line(x1="60" y1="54" x2="60" y2="90" stroke="#2980b9" stroke-width="3")
        line(x1="60" y1="65" x2="45" y2="78" stroke="#2980b9" stroke-width="2.5")
        //- 引導者的手
        line(x1="60" y1="65" x2="95" y2="55" stroke="#2980b9" stroke-width="3")
        circle(cx="95" cy="55" r="5" fill="#3498db")
        //- 手指
        line(x1="95" y1="50" x2="95" y2="42" stroke="#3498db" stroke-width="2")
        line(x1="92" y1="51" x2="88" y2="45" stroke="#3498db" stroke-width="1.5")
        line(x1="98" y1="51" x2="102" y2="45" stroke="#3498db" stroke-width="1.5")
        line(x1="60" y1="90" x2="50" y2="118" stroke="#2980b9" stroke-width="2.5")
        line(x1="60" y1="90" x2="70" y2="118" stroke="#2980b9" stroke-width="2.5")
        //- 引導虛線
        line(x1="95" y1="55" x2="130" y2="55" stroke="#3498db" stroke-width="1.5" stroke-dasharray="5,4")
        //- 被引導者（右）- 身體彎曲跟隨
        circle(cx="145" cy="50" r="14" fill="#1abc9c")
        line(x1="145" y1="64" x2="142" y2="95" stroke="#1abc9c" stroke-width="3")
        line(x1="143" y1="75" x2="128" y2="82" stroke="#1abc9c" stroke-width="2.5")
        line(x1="143" y1="75" x2="158" y2="82" stroke="#1abc9c" stroke-width="2.5")
        line(x1="142" y1="95" x2="132" y2="118" stroke="#1abc9c" stroke-width="2.5")
        line(x1="142" y1="95" x2="152" y2="118" stroke="#1abc9c" stroke-width="2.5")
        //- 眼睛看向手
        circle(cx="140" cy="47" r="2" fill="white")
        circle(cx="139" cy="47" r="1" fill="#2c3e50")

    h1.ui.header 練習五：哥倫比亞催眠術
    .ui.divider

    p 哥倫比亞催眠術並不是真正的催眠，它是一個兩人一組的活動。

    p 引導的一方把手比在被引導的一方的臉的前面，被引導的一方就看著引導者的手指，臉朝著他的中指。

    p 如果引導者的手稍微彎了一點，被引導者就跟著彎他的臉。如果引導者把手往後拉一些，被引導者就往前一些，總之保持固定的距離。

    p 引導者的手可以上上下下左右移動，或者是隨著腳步來移動，但是過程要慢，不要讓被引導者太勉強。

    p 當音樂開始的時候，所有的人兩個人一組就這樣開始走位，在空間中就好像在舞蹈一樣，可以做出很多有趣的動作。

    p 對於被引導者，就是練習放鬆放空的，讓自己的身體產生各種各樣的姿勢跟變化。

    p 對於引導者來說，他可以練習怎麼樣照顧被引導者，不要讓被引導者的身體過於勉強。

    .ui.divider
    router-link.ui.large.green.button(to="/warmups") ← 回到暖身活動

</template>

<script>
export default {
  name: 'W05Hypnosis'
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
