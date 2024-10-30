<template lang="pug">
.courses
  h1.ui.header Playback初階體驗工作坊
    .sub.header 同理心回饋劇初探
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
      YourDocumentID: '13xauwSwg4mGcRON6S46ngJhICxtnKnufXBm-Sl8hWMg'
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
