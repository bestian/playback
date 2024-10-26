<template lang="pug">
.act_history
  .ui.segment.container
    h1.ui.header 活動回顧
    h2.left.aligned.ui.header 2024年
    .ui.list
      .item
        .content
          .header 2024/08/08(四), 2024/08/22(四)
            .sub.header 永安藝文中心
          .description 父親節Playback初階體驗工作坊
      .item
        .content
          .header 2024/10/06(日)
            .sub.header 華山文創園區
          .description 2024Playback成長團體第一次聚會
      .item
        .content
          .header 2024/10/26(六), 2024/10/27(日)
            .sub.header 華山文創園區
          .description 光復節後Playback初階體驗工作坊
      //  .item
      //  .content
      //    .header 2024/11/17(日)
      //      .sub.header 萬隆聖家會
      //    .description 2024Playback成長團體第二次聚會

</template>

<script>

export default {
  name: 'Act_History',
}
</script>

<style scoped>
  .item {
    font-size: 18px;
    text-align: left;
    max-width: 620px;
    margin: .6em auto !important;
    color: rgb(64, 3, 206);
  }

  .description {
    margin-top: 10px;
  }
</style>
