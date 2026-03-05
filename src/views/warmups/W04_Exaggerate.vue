<template lang="pug">
.warmup-page
  .ui.segment.container
    .svg-hero
      svg(viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg")
        //- 圍成一圈的人（簡化）
        circle(cx="120" cy="75" r="55" fill="none" stroke="#e74c3c" stroke-width="1" stroke-dasharray="6,4" opacity="0.3")
        //- 小動作人
        circle(cx="65" cy="75" r="8" fill="#e74c3c" opacity="0.4")
        line(x1="65" y1="83" x2="65" y2="100" stroke="#e74c3c" stroke-width="2" opacity="0.4")
        line(x1="65" y1="90" x2="58" y2="85" stroke="#e74c3c" stroke-width="1.5" opacity="0.4")
        //- 中等動作人
        circle(cx="95" cy="35" r="9" fill="#e74c3c" opacity="0.6")
        line(x1="95" y1="44" x2="95" y2="65" stroke="#e74c3c" stroke-width="2.5" opacity="0.6")
        line(x1="95" y1="52" x2="82" y2="42" stroke="#e74c3c" stroke-width="2" opacity="0.6")
        line(x1="95" y1="52" x2="108" y2="42" stroke="#e74c3c" stroke-width="2" opacity="0.6")
        //- 大動作人
        circle(cx="155" cy="30" r="12" fill="#e74c3c")
        line(x1="155" y1="42" x2="155" y2="70" stroke="#e74c3c" stroke-width="3")
        line(x1="155" y1="52" x2="135" y2="35" stroke="#e74c3c" stroke-width="2.5")
        line(x1="155" y1="52" x2="175" y2="35" stroke="#e74c3c" stroke-width="2.5")
        line(x1="155" y1="70" x2="140" y2="90" stroke="#e74c3c" stroke-width="2.5")
        line(x1="155" y1="70" x2="170" y2="90" stroke="#e74c3c" stroke-width="2.5")
        //- 放大箭頭
        path(d="M75 70 L88 50" fill="none" stroke="#c0392b" stroke-width="2")
        polygon(points="88,50 84,56 92,55" fill="#c0392b")
        path(d="M115 38 L140 32" fill="none" stroke="#c0392b" stroke-width="2")
        polygon(points="140,32 134,28 135,36" fill="#c0392b")
        text(x="120" y="140" text-anchor="middle" font-size="13" fill="#c0392b") 越來越大 →

    h1.ui.header 練習四：誇張與縮小
    .ui.divider

    p 誇張與縮小的練習分成兩個部分，一個是誇張的模仿，一個是縮小的模仿。

    p 做法是所有的參與者圍成一圈，互相沒有肢體接觸。

    p 從主帶的人開始設計一個動作，可能是一個簡單的動作，可以搭配一個簡單的聲音，不需要很長。

    p 然後由比如說順時針轉下去，下一個人必須要把這個動作稍微放大一點點，只要一點點就好。然後再下一個人就把它再放大一點點，也是只要一點點就好。然後繞一圈的時候到後面就可以看到這個動作被放大的越來越大越來越大，到最後的人就會把它放得更大。

    p 這個遊戲是輪流出題的，從主帶的人開始出，然後就換下一個人出。所以每個人都會輪到第一個，也會輪到最後一個。這是放大練習。

    p 縮小練習就是正好相反。出題的人必須要做一個很大很大的動作，搭配一個很大的聲音，然後後面的人就把它縮小一點，然後接下來越縮越小越縮越小，但是不要完全沒有。

    p 這樣子是練習收跟放，也是練習觀察別人的動作並且做出模仿。我們可以看到其他人的創意，也可以看到我們平常不常做的動作是怎麼樣被做出來的。

    .ui.divider
    router-link.ui.large.green.button(to="/warmups") ← 回到暖身活動

</template>

<script>
export default {
  name: 'W04Exaggerate'
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
    width: 320px;
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
