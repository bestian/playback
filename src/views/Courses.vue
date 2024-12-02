<template lang="pug">
.courses
  h1.ui.header 課程
    .sub.header.text-left.padded
      br
      | 我想像中的Playback練習，分為三個階段：
      br
      | 一階是入門體驗聆聽和即興的肢體表達；
      br
      | 二階是學習五種基本的Playback形式；
      br
      | 三階是主持人技巧與態度。
      br
  .ui.four.doubling.stackable.cards.container
    .ui.card
      h4.ui.header Playback-聆聽學習工作坊
        .sub.header Playback入門
      img.card-img(src="/img/lev1.jpg")
      // router-link(to="/lev1")
      // p 八月父親節「從心出發」已截止報名，進行中。
      // p 九月中秋節「從心出發」開放報名中(8/26截止)，
      
      // router-link(to="/lev1") 十二月【從心出發】工作坊開放報名中(12/01截止)
        br
        | 時間為12/08(六), 12/15(日)上午9:00~12:00。
      //router-link(to="/lev1_s")  十一月中壢夢田場「從心出發」開放報名中。
        br
        | 時間為11/09(六), 11/10(日)上午9:00~12:00。
      //router-link(to="/lev1") 
        | 十月華山文創場「從心出發」開放報名中。
        br 
        | 時間為10/26(六), 10/27(日)上午9:00~12:00。

    .ui.card
      h4.ui.header Playback二階體驗工作坊
        .sub.header 四種基本元素、五個基本形式
      img.card-img(src="/img/lev2.jpg")
      router-link(to="/lev2")
        p 課程規畫已完成，歡迎邀約協辦
        p 洽詢email:
          a(href="mailto:bestian@gmail.com") bestian@gmail.com
    .ui.card
      h4.ui.header Playback主持人體驗工作坊
        .sub.header 主持人技巧與態度
      img.card-img(src="/img/lev3.jpg")
      p 尚未開課...
    .ui.card
      h4.ui.header 長線成長團體
        .sub.header 穩定的持續練習節奏
      img.card-img(src="/img/group.jpg")
      p 每月一次，需先參與過初階課程，或具有Playback經驗且有認識的人引介。
      p 洽詢email:
        a(href="mailto:bestian@gmail.com") bestian@gmail.com

</template>

<script>

export default {
  name: 'CourSes',
}
</script>

<style scoped>
.ui.card {
  padding: 1em;
}

img.card-img {
  max-width: 100%;
}

.text-left {
  display: block;
  text-align: left;
  width: fit-content !important;
  margin: 0 auto !important;
}

.padded {
  padding: 1em !important;
}

a, p {
  font-size: 18px;
  text-align: left;
  max-width: 620px;
  margin: .6em auto;
  color: rgb(64, 3, 206);
}

p.gray {
  color: #999;
}
</style>
