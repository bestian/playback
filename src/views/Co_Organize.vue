  <template lang="pug">
  .faq
    .ui.segment.container
      h2.ui.header 協辦工作坊
      p 如欲協辦，請來信註明：
      .ui.ordered.left.aligned.list
        .item 邀約協辦人 / 邀約協辦單位
        .item 是否可提供地板空間？
        .item 是否可協助報名等行政事宜？
        .item 希望邀約的工作坊性質（擇一）
          .ui.ordered.left.aligned.list
            .item 單次三小時體驗工作坊
            .item 兩次(三小時+三小時)體驗工作坊
            .item 八週(每週一次三小時)連續深度體驗工作坊
        .item 預計參與人數及講師 + 助教費預算(推廣價)，不含場租
          .ui.ordered.left.aligned.list
            .item 4~8人(5000/次，或採隨喜贊助講師費)
            .item 9~16人(8000/次，或採隨喜贊助講師費)
            .item 17~24人(12000/次，或採隨喜贊助講師費)
          
      p 聯絡方式(電子郵件)：bestian@gmail.com
  </template>

  <script>
  export default {
    name: 'CoOrganize',
    data() {
      return {
      }
    }
  }
  </script>

  <style scoped>

    img {
      max-width: 160px;  
      margin-top: 10px;
    }
    p {
      font-size: 18px;
      text-align: left;
      max-width: 620px;
      margin: .6em auto;
      color: rgb(64, 3, 206);
    }

    .column {
      padding: 10px;
      height: 360px;
      display: flex !important;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .ui.ordered.left.aligned.list {
      margin-left: 1em;
      text-align: left;
      font-size: 18px;
    }
  </style>
