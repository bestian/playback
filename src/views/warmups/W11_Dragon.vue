<template lang="pug">
.warmup-page
  .ui.segment.container
    .svg-hero
      svg(viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg")
        //- 噴火龍（中間，戴眼罩）
        circle(cx="110" cy="45" r="20" fill="#e74c3c")
        //- 眼罩
        rect(x="95" y="38" width="30" height="8" rx="3" fill="#2c3e50")
        //- 嘴巴
        path(d="M102 52 Q110 58 118 52" fill="none" stroke="#c0392b" stroke-width="2")
        //- 龍角
        polygon(points="95,28 85,12 98,22" fill="#e74c3c")
        polygon(points="125,28 135,12 122,22" fill="#e74c3c")
        //- 噴火（指向）
        line(x1="110" y1="65" x2="110" y2="78" stroke="#e74c3c" stroke-width="3")
        line(x1="110" y1="78" x2="110" y2="95" stroke="#e74c3c" stroke-width="2.5")
        //- 指向右方（噴火）
        line(x1="110" y1="78" x2="160" y2="60" stroke="#f39c12" stroke-width="3")
        path(d="M155 55 L165 58 L158 65" fill="none" stroke="#f39c12" stroke-width="2.5")
        //- 火焰
        path(d="M160 58 Q168 50 165 60 Q172 52 168 62" fill="#f39c12" opacity="0.6")
        //- 寶藏
        polygon(points="95,110 110,95 125,110" fill="#f1c40f")
        polygon(points="100,110 110,100 120,110" fill="#f39c12")
        circle(cx="110" cy="106" r="4" fill="#e67e22")
        rect(x="98" y="110" width="24" height="10" rx="3" fill="#f1c40f")
        //- 勇士（右側，攝手攝腳）
        circle(cx="185" cy="70" r="10" fill="#3498db" opacity="0.6")
        line(x1="185" y1="80" x2="185" y2="100" stroke="#3498db" stroke-width="2.5" opacity="0.6")
        line(x1="185" y1="88" x2="175" y2="92" stroke="#3498db" stroke-width="2" opacity="0.6")
        line(x1="185" y1="88" x2="195" y2="92" stroke="#3498db" stroke-width="2" opacity="0.6")
        line(x1="185" y1="100" x2="180" y2="118" stroke="#3498db" stroke-width="2" opacity="0.6")
        line(x1="185" y1="100" x2="190" y2="118" stroke="#3498db" stroke-width="2" opacity="0.6")
        //- 攝手攝腳步伐
        text(x="180" y="132" font-size="9" fill="#3498db" opacity="0.5") . . .
        //- 觀眾半圓（左側）
        circle(cx="30" cy="60" r="7" fill="#bdc3c7")
        circle(cx="20" cy="80" r="7" fill="#bdc3c7")
        circle(cx="25" cy="100" r="7" fill="#bdc3c7")
        circle(cx="35" cy="115" r="7" fill="#bdc3c7")
        text(x="28" y="138" text-anchor="middle" font-size="9" fill="#95a5a6") 觀眾

    h1.ui.header 練習十一：噴火龍
    .ui.divider

    p 噴火龍是一個專注與感知練習的小遊戲。玩起來很有意思，而且非常安靜。

    p 他是由一個人在中間當噴火龍，看守一個寶藏，可能是一個袋子之類的當作寶藏。然後呢，所有其他的人圍成一個半圓圈。

    p 噴火龍的眼睛要蒙著，閉起來，而且戴上眼罩或毛巾，以至於他看不到。

    p 每次有一個人出發當勇士，其他人就說：「勇士出發了」。

    p 然後呢，那個人要攝手攝腳的，不要被噴火龍聽見。

    p 噴火龍有五次噴火的機會，也就是用手指向某個方向。他如果聽到了這個勇士的腳步聲，或者感知到他的氣場的話呢，可以用手指向某個方向。如果被指到了，其他人就說勇士被指到了。

    p 那如果勇士一直沒有被指到，或者是噴火龍的噴火次數用完了，勇士呢，就把寶藏悄悄地拿了回到他的座位上，就算勇士獲勝。那如果勇士被指到了，那勇士被燒了退回原位，就換另外一個勇士出場。

    p 然後每個人可以輪流擔任噴火龍。

    .ui.divider
    router-link.ui.large.green.button(to="/warmups") ← 回到暖身活動

</template>

<script>
export default {
  name: 'W11Dragon'
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
