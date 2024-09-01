<template lang="pug">
  .keep-neutral
    .card-container
      img.card-image(:src="imagePath", :alt="randomCard")
      p.card-text {{ randomCard }}
  </template>
  
  <script>
  export default {
    name: 'KeepNeutral',
    data () {
      return {
        cards: [
          '持守界限',
          '放下評斷',
          '活在當下',
          // 其他卡片請在此添加
        ],
        randomCard: '', // 隨機選擇的卡片
      }
    },
    computed: {
      // 根據隨機選擇的卡片動態計算圖片路徑
      imagePath() {
        return `/img/${this.randomCard}.webp`;
      }
    },
    methods: {
      // 從cards陣列中隨機選擇一個卡片
      getRandomCard() {
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        this.randomCard = this.cards[randomIndex];
      }
    },
    created() {
      // 組件創建時隨機選擇卡片
      this.getRandomCard();
    }
  }
  </script>
  
  <style scoped>
  .card-container {
    text-align: center;
    margin: 20px;
  }
  .card-image {
    width: 100%;
    max-width: 300px;
    height: auto;
  }
  .card-text {
    font-size: 1.2em;
    margin-top: 10px;
  }
  </style>
  