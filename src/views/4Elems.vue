<template lang="pug">
  .about
    .ui.segment.container
      h1.ui.header 四元素
      p 說故事的人講的可能是某個事件，但是這個事件，卻牽涉到比較抽象的主題的時候，我們就可以使用「四元素」這種形式來表達呈現。
      p 這種形式適合表現抽象的主題，例如至高存有，或是生命與死亡等等， 不是單一的時間而是一個抽象的課題。
      p 什麼是四元素呢？四個元素分別是：
      .ui.bulleted.list
        .item 塑像：和流動塑像類似，但不發出聲音
        .item 布：舞布的人可以拿各種顏色的布，來代表不同的意象。例如紅色可能和衝突有關、白色則是天真和純潔等等，依故事的性質而定。
        .item 音樂：音樂作為串場和總結
        .item 詩：詩是作為總結的話語。即興詩的流動，往往會讓說故事的人心中的意象精華明確化、結晶成凝練的文字。
      p 在形式上，塑像先出來，定格後，布再出來，總結是詩。
      p 音樂作為中間的串場和總結。
</template>

<script type="text/javascript">
export default {
  name: 'FourElems',
  data () {
    return {}
  }
}
</script>

<style scoped>
.ui.list .item {
  text-align: left;
  font-size: 16px;
}

p {
  font-size: 16px;
}
</style>
