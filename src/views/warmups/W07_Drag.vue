<template lang="pug">
.warmup-page
  .ui.segment.container
    .svg-hero
      svg(viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg")
        //- 地面
        line(x1="20" y1="120" x2="220" y2="120" stroke="#95a5a6" stroke-width="2" stroke-dasharray="8,4")
        //- 大力士（左，站立拖行）
        circle(cx="70" cy="40" r="14" fill="#16a085")
        line(x1="70" y1="54" x2="70" y2="88" stroke="#16a085" stroke-width="3.5")
        line(x1="70" y1="65" x2="52" y2="72" stroke="#16a085" stroke-width="3")
        line(x1="70" y1="65" x2="88" y2="58" stroke="#16a085" stroke-width="3")
        line(x1="70" y1="88" x2="58" y2="118" stroke="#16a085" stroke-width="3")
        line(x1="70" y1="88" x2="82" y2="118" stroke="#16a085" stroke-width="3")
        //- 力量線
        path(d="M58 35 L48 25 M70 30 L70 18 M82 35 L92 25" fill="none" stroke="#1abc9c" stroke-width="2")
        //- 沙包（右，躺在地上掛著腳踝）
        circle(cx="155" cy="105" r="10" fill="#1abc9c" opacity="0.7")
        line(x1="155" y1="95" x2="155" y2="80" stroke="#1abc9c" stroke-width="3" opacity="0.7")
        line(x1="155" y1="88" x2="165" y2="82" stroke="#1abc9c" stroke-width="2.5" opacity="0.7")
        line(x1="155" y1="88" x2="145" y2="82" stroke="#1abc9c" stroke-width="2.5" opacity="0.7")
        ellipse(cx="155" cy="112" rx="15" ry="6" fill="#1abc9c" opacity="0.3")
        //- 連接線（手勾住腳踝）
        path(d="M82 118 Q110 118 140 115" fill="none" stroke="#16a085" stroke-width="2" stroke-dasharray="5,3")
        //- 方向箭頭
        path(d="M40 130 L25 130 M25 130 L32 126 M25 130 L32 134" fill="none" stroke="#16a085" stroke-width="2.5")
        text(x="50" y="140" font-size="11" fill="#16a085") 前進方向

    h1.ui.header 練習七：拖沙
    .ui.divider

    p 這是一種加強和釋放內在力量的體驗活動，也很有運動量。

    p 拖沙需要在軟地板上才能進行。

    p 兩人一組，一個當沙包，一個人當大力士。

    p 沙包用手勾住大力士的腳踝，然後放鬆掛在地上。

    p 大力士從一個起點出發，然後拖著沈重的沙包，一步一步要抵達終點。過程中可以每一步喊出聲音，來增加爆發力。

    p 請選擇體重身型相仿的人配對，可以避免太難或太容易。

    .ui.divider
    router-link.ui.large.green.button(to="/warmups") ← 回到暖身活動

</template>

<script>
export default {
  name: 'W07Drag'
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
