<template lang="pug">
.courses
  h1.ui.header Playback二階體驗工作坊
    .sub.header 四種基本元素、五個基本形式
  .ui.segmant.container
    iframe(width="100%", 
      height="600px",
      frameborder="0",
      allowfullscreen,
      :src="'https://docs.google.com/document/d/' + YourDocumentID + '/preview'")

</template>

<script>

export default {
  name: 'Faq',
  data () {
    return {
      YourDocumentID: '/1CAAYMp5snFeLRUNJIFdV7OpuH7_WKYfKFXSXBvLoYXc'
    }
  }
}
</script>

<style scoped>
.ui.card {
  padding: 1em;
}

img.card-img {
  max-width: 33vmin;
}

p {
  font-size: 18px;
  text-align: left;
  max-width: 620px;
  margin: .6em auto;
  color: rgb(64, 3, 206);
}
</style>
