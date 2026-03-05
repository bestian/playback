<template lang="pug">
.warmup-page
  .ui.segment.container
    .svg-hero
      svg(viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg")
        //- 雕刻師（左）伸手塑造雕像（右）
        circle(cx="55" cy="35" r="14" fill="#e67e22")
        line(x1="55" y1="49" x2="55" y2="85" stroke="#e67e22" stroke-width="3.5")
        line(x1="55" y1="60" x2="35" y2="72" stroke="#e67e22" stroke-width="3")
        line(x1="55" y1="60" x2="90" y2="50" stroke="#e67e22" stroke-width="3")
        line(x1="55" y1="85" x2="45" y2="115" stroke="#e67e22" stroke-width="3")
        line(x1="55" y1="85" x2="65" y2="115" stroke="#e67e22" stroke-width="3")
        //- 觸碰虛線
        path(d="M90 50 Q100 48 110 52" fill="none" stroke="#e67e22" stroke-width="1.5" stroke-dasharray="4,3")
        //- 雕像（右）被塑造的姿態
        circle(cx="135" cy="35" r="14" fill="#d35400")
        line(x1="135" y1="49" x2="135" y2="85" stroke="#d35400" stroke-width="3.5")
        line(x1="135" y1="60" x2="115" y2="48" stroke="#d35400" stroke-width="3")
        line(x1="135" y1="60" x2="155" y2="45" stroke="#d35400" stroke-width="3")
        line(x1="135" y1="85" x2="125" y2="115" stroke="#d35400" stroke-width="3")
        line(x1="135" y1="85" x2="145" y2="115" stroke="#d35400" stroke-width="3")
        //- 結凍符號
        text(x="135" y="130" text-anchor="middle" font-size="14" fill="#3498db") ❄
    h1.ui.header 練習二：輪流雕塑
    .ui.divider

    p 輪流雕塑的練習方式是兩個人一組。一個人當雕刻師，一個人當黏土。

    p 當黏土的人盡量放鬆，由雕刻師去用手或者是眼神，或者是其他的方式，將他擺到想要的姿勢。

    p 主持人可以設定一個主題，比方說某種情緒，例如「憤怒」，或者是「愛」，或者是「難過」。

    p 在這樣子的設定之下，由雕刻師把雕像塑成他想要的樣子。雕像練習的就是放鬆，不要有自己的意識跟抗拒，然後完全的順其自然。

    p 那麼雕刻師跟雕像是兩個人一組，同時可以有許多組。

    p 所有的雕刻師把雕像全部都設定好了之後，雕刻師就退位，然後大家一起去觀察那個雕像。

    p 雕像這個時候要做的就是結凍、結冰。

    p 結冰的時候就是完全在他的位置不動，要練習停住的這個力量。這個在Playback裡面是很重要的。

    p 等到主持人說：「好了，解凍」，或者是拍手給了一個提示之後，這些雕像才可以解凍。這樣子輪過一次之後，雕像換雕刻師，雕刻師換雕像，兩邊交換再做一次。

    .ui.divider
    router-link.ui.large.green.button(to="/warmups") ← 回到暖身活動

</template>

<script>
export default {
  name: 'W02Sculpture'
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
