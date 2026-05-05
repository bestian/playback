<template lang="pug">
.warmup-page
  .ui.segment.container
    .svg-hero
      svg(viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg")
        //- 場地底線
        line(x1="10" y1="140" x2="250" y2="140" stroke="#bdc3c7" stroke-width="1" stroke-dasharray="3,3")

        //- A組基地（左側藍色柱子）
        rect(x="28" y="55" width="14" height="85" rx="3" fill="#3498db")
        ellipse(cx="35" cy="55" rx="10" ry="4" fill="#2980b9")
        //- 充電閃電（A基地）
        polygon(points="22,30 38,30 30,42 42,42 26,58 32,46 20,46" fill="#f1c40f" stroke="#f39c12" stroke-width="0.8")

        //- B組基地（右側紅色柱子）
        rect(x="218" y="55" width="14" height="85" rx="3" fill="#e74c3c")
        ellipse(cx="225" cy="55" rx="10" ry="4" fill="#c0392b")
        //- 充電閃電（B基地）
        polygon(points="212,30 228,30 220,42 232,42 216,58 222,46 210,46" fill="#f1c40f" stroke="#f39c12" stroke-width="0.8")

        //- A組玩家1：手碰基地（充電中）
        circle(cx="55" cy="80" r="7" fill="#3498db")
        line(x1="55" y1="87" x2="55" y2="105" stroke="#3498db" stroke-width="2.5")
        line(x1="55" y1="92" x2="42" y2="88" stroke="#3498db" stroke-width="2")
        line(x1="55" y1="92" x2="65" y2="95" stroke="#3498db" stroke-width="2")
        line(x1="55" y1="105" x2="50" y2="120" stroke="#3498db" stroke-width="2")
        line(x1="55" y1="105" x2="60" y2="120" stroke="#3498db" stroke-width="2")

        //- A組玩家2：奔跑中（中間）
        circle(cx="115" cy="78" r="7" fill="#3498db")
        line(x1="115" y1="85" x2="118" y2="103" stroke="#3498db" stroke-width="2.5")
        line(x1="115" y1="90" x2="105" y2="85" stroke="#3498db" stroke-width="2")
        line(x1="115" y1="90" x2="128" y2="92" stroke="#3498db" stroke-width="2")
        line(x1="118" y1="103" x2="108" y2="118" stroke="#3498db" stroke-width="2")
        line(x1="118" y1="103" x2="128" y2="115" stroke="#3498db" stroke-width="2")
        //- 動態線（奔跑感）
        line(x1="98" y1="80" x2="105" y2="80" stroke="#3498db" stroke-width="1" opacity="0.4")
        line(x1="95" y1="85" x2="103" y2="85" stroke="#3498db" stroke-width="1" opacity="0.3")

        //- B組玩家1：奔跑中（中間，要去抓A組）
        circle(cx="155" cy="78" r="7" fill="#e74c3c")
        line(x1="155" y1="85" x2="152" y2="103" stroke="#e74c3c" stroke-width="2.5")
        line(x1="155" y1="90" x2="165" y2="85" stroke="#e74c3c" stroke-width="2")
        line(x1="155" y1="90" x2="142" y2="92" stroke="#e74c3c" stroke-width="2")
        line(x1="152" y1="103" x2="162" y2="118" stroke="#e74c3c" stroke-width="2")
        line(x1="152" y1="103" x2="142" y2="115" stroke="#e74c3c" stroke-width="2")
        //- 動態線
        line(x1="172" y1="80" x2="165" y2="80" stroke="#e74c3c" stroke-width="1" opacity="0.4")
        line(x1="175" y1="85" x2="167" y2="85" stroke="#e74c3c" stroke-width="1" opacity="0.3")

        //- B組玩家2：手碰基地（充電中）
        circle(cx="200" cy="80" r="7" fill="#e74c3c")
        line(x1="200" y1="87" x2="200" y2="105" stroke="#e74c3c" stroke-width="2.5")
        line(x1="200" y1="92" x2="213" y2="88" stroke="#e74c3c" stroke-width="2")
        line(x1="200" y1="92" x2="190" y2="95" stroke="#e74c3c" stroke-width="2")
        line(x1="200" y1="105" x2="195" y2="120" stroke="#e74c3c" stroke-width="2")
        line(x1="200" y1="105" x2="205" y2="120" stroke="#e74c3c" stroke-width="2")

        //- 標籤
        text(x="35" y="155" text-anchor="middle" font-size="10" fill="#2980b9" font-weight="bold") A基地
        text(x="225" y="155" text-anchor="middle" font-size="10" fill="#c0392b" font-weight="bold") B基地

    h1.ui.header 練習十二：充電柱（台語：佔條子）
    .ui.divider

    p 充電柱是一種多人的實體遊戲，需要的道具很簡單：只要可以奔跑的場地，和兩根穩固的柱子（也可以用椅子等定著物代替）。

    p 一局大約 5～10 分鐘。人數 4 人以上可玩，6～16 人為佳。

    h3.ui.header 玩法
    ol.rules
      li 首先，將玩家分為 A、B 兩組，人數平均。建議每組 3 人以上較好玩。
      li A 組和 B 組各選一個柱子，當自己組別的基地。
      li 所有玩家一開始，身體的某部位（通常是手或腳）要碰到自己的基地，當作充電中。
      li 當玩家離開自己的基地時，就不再充電，視為開始漏電。
      li 愈早離開柱子的玩家，電愈少。
      li 抓人的規則是比電：當不同組別的兩名玩家碰觸到時，電少的一方就被抓走。
      li 只要 A 組的任一玩家，在不被抓到的前提下，碰到 B 組的柱子，A 組就獲勝，反之亦然。
      li 被抓走的玩家，就成為另一組的俘虜。
      li 俘虜要持續碰著對方的基地，連成一線，等待救援。

    h3.ui.header 救援範例
    ul.rules
      li 若 A 組有 3 名被 B 組抓走的俘虜，由內而外連著，連成「B基地–甲–乙–丙」，而 A 組的「丁」去碰到乙，則乙、丙都會被救，而甲沒有被救。
      li 被救的乙、丙，必須先回到 A 組的基地。過程中是無敵狀態，既不能抓人、也不能救人、也不能被抓、也不能去佔 B 組的柱子。
      li 注意：救人的「丁」還是活的，他可以再去抓人、救人、被抓，或佔 B 組的柱子。

    .ui.divider
    p.epilogue 充電柱在種籽實小、早期非學校的 2nd Tue 社群都很受親子歡迎，是一個有趣、手腳腦並用、又能奔跑的團體遊戲。

    .ui.divider
    router-link.ui.large.green.button(to="/warmups") ← 回到暖身活動

</template>

<script>
export default {
  name: 'W12Pillar'
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
    width: 360px;
    max-width: 95%;
    height: auto;
  }
}

h1.ui.header {
  color: #16a085;
  text-align: center;
}

h3.ui.header {
  max-width: 620px;
  margin: 1.2em auto 0.6em;
  color: #16a085;
}

p {
  font-size: 18px;
  text-align: left;
  max-width: 620px;
  margin: 0.6em auto;
  color: #2c3e50;
}

.rules {
  max-width: 620px;
  margin: 0.4em auto 0.8em;
  padding-left: 1.4em;
  color: #2c3e50;

  li {
    font-size: 17px;
    line-height: 1.7;
    margin-bottom: 0.3em;
  }
}

p.epilogue {
  font-style: italic;
  color: #555;
}

ol.rules, ul.rules li {
  text-align: left;
}
</style>
