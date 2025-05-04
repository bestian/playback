<template lang="pug">
.act_history
  .ui.segment.container
    h1.ui.header
      i.redo.icon
      | 活動回顧
    
    //- 添加分頁按鈕
    .ui.secondary.menu
      a.item(:class="{ active: activeTab === '2025' }", @click="activeTab = '2025'") 2025年
      a.item(:class="{ active: activeTab === '2024' }", @click="activeTab = '2024'") 2024年
    
    .ui.divider
    //- 2025年的內容
    .ui.tab(:class="{ active: activeTab === '2025' }")
      h2.left.aligned.ui.header 2025年
      h3.ui.header 參考
        a(href="https://github.com/bestian/playback/wiki/2025%E5%AD%B8%E5%93%A1%E5%BF%83%E5%BE%97", target="_blank", rel="noopener noreferrer") 2025學員心得
      .ui.list
        .item
          .content
            .header 2025/01/05(日)
              .sub.header 華山文創園區
            .description 2025Playback成長團體第一次聚會
        
        .item 
          .content
            .header 2025/01/06(一)
              .sub.header 癌友新生命協會
            .description Playback初階體驗工作坊
        .item
          .content
            .header 2025/02/09(日)
              .sub.header 華山文創園區
            .description 2025Playback成長團體第二次聚會
        .item
          .content
            .header 2025/03/02(日)
              .sub.header 華山文創園區
            .description 2025Playback成長團體第三次聚會
        .item
          .content
            .header 2025/03/16(日), 2025/03/22(六), 2025/03/23(日)
              .sub.header 華山文創園區
            .description 「用心聆聽」Playback初階+二階體驗工作坊
        .item
          .content
            .header 2025/04/13(日)
              .sub.header 華山文創園區
            .description 2025Playback成長團體第四次聚會
            
    //- 2024年的內容
    .ui.tab(:class="{ active: activeTab === '2024' }")
      h2.left.aligned.ui.header 2024年
      h3.ui.header 參考
        a(href="https://github.com/bestian/playback/wiki/2024%E5%AD%B8%E5%93%A1%E5%BF%83%E5%BE%97", target="_blank", rel="noopener noreferrer") 2024學員心得
      .ui.list
        .item
          .content
            .header 2024/08/08(四), 2024/08/22(四)
              .sub.header 永安藝文中心
            .description 從心出發Playback初階體驗工作坊
        .item
          .content
            .header 2024/10/06(日)
              .sub.header 華山文創園區
            .description 2024Playback成長團體第一次聚會
        .item
          .content
            .header 2024/10/26(六), 2024/10/27(日)
              .sub.header 華山文創園區
            .description 從心出發Playback初階體驗工作坊
        .item
          .content
            .header 2024/12/01(日)
              .sub.header 華山文創園區
            .description 2024Playback成長團體第二次聚會
        .item
          .content
            .header 2024/12/08(日), 2024/12/15(日)
              .sub.header 永安藝文中心
            .description 從心出發Playback初階體驗工作坊

</template>

<script>
export default {
  name: 'Act_History',
  data() {
    return {
      activeTab: '2025'  // 預設顯示2025年
    }
  }
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

/* 添加分頁樣式 */
.ui.tab {
  display: none;
}

.ui.tab.active {
  display: block;
}
</style>
