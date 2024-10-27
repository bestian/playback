<template lang="pug">
.courses
  h1.ui.header Playback精華
    .sub.header 深入瞭解Playback同理心回饋劇
  a.ui.purple.button(href="https://docs.google.com/document/d/17lp1gGyKwxt8gU64gMlOwPE-_p5lQeWaZ-8g8T7KsDU/edit?usp=sharing", target="_blank", rel="noopener norefferer")
    i.file.pdf.icon
    | Google文件檢視
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
      YourDocumentID: '17lp1gGyKwxt8gU64gMlOwPE-_p5lQeWaZ-8g8T7KsDU'
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
