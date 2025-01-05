<template lang="pug">
.courses
  h1.ui.header Playback初階體驗工作坊
    .sub.header 體驗聆聽和即興的肢體表達
  .ui.segmant.container
    iframe(width="100%", 
      height="600px",
      frameborder="0",
      allowfullscreen,
      :src="'https://docs.google.com/document/d/' + YourDocumentID + '/preview'")

</template>

<script>

export default {
  name: 'Lev1Course',
  data () {
    return {
      YourDocumentID: '/1Fl6TeeRD05qGiOh14kQE3gpXZfxm9ca0phKiDnAX-A8'
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
