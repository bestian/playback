<template lang="pug">
.courses
  h1.ui.header 小巴老師(唐宗浩)的故事
    i.sub.header 「我們不能改變過去，
      br
      | 但是可以改變過去對我們的影響。」 - 薩提爾
  .ui.segmant.container
    iframe(width="100%", 
      height="600px",
      frameborder="0",
      allowfullscreen,
      :src="'https://docs.google.com/document/d/' + YourDocumentID + '/preview'")

</template>

<script>

export default {
  name: 'AboutView',
  data () {
    return {
      YourDocumentID: '10UJMg4wQB6h1vHC_l_CeHdTr-PjDXZoqDDPBmdOqGvc'
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

i.sub.header {
  display: inline-block;
  text-align: left;
  margin: .62em auto !important;
  width: fit-content;
  max-width: 320px;
}
</style>
