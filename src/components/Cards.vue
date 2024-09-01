<template lang="pug">
.keep-neutral
  .card-container
    .ui.row.img-container
      i.chevron.left.icon(@click="prevCard")
      img.card-image(:src="imagePath", :alt="randomCard", @click="nextCard")
      i.chevron.right.icon(@click="nextCard")
    .ui.row
      p.card-text {{ randomCard }}
  </template>
    
  <script>
  
  import { cards } from "../data/cards.js";
  
  export default {
    name: 'KeepNeutral',
    data () {
      return {
        cards: cards,
        randomCardIndex: 0, // 使用索引來追踪當前顯示的卡片
      }
    },
    computed: {
      // 根據當前卡片的索引動態計算圖片路徑
      imagePath() {
        return `/img/keep-nuetral/${this.cards[this.randomCardIndex]}.webp`;
      },
      randomCard() {
        return this.cards[this.randomCardIndex];
      }
    },
    methods: {
      // 切換到上一張卡片
      prevCard() {
        this.randomCardIndex = (this.randomCardIndex - 1 + this.cards.length) % this.cards.length;
      },
      // 切換到下一張卡片
      nextCard() {
        this.randomCardIndex = (this.randomCardIndex + 1) % this.cards.length;
      },
      // 組件創建時隨機選擇卡片
      getRandomCard() {
        this.randomCardIndex = Math.floor(Math.random() * this.cards.length);
      }
    },
    created() {
      this.getRandomCard();
    }
  }
  </script>
    
  <style scoped>
  .card-container {
    text-align: center;
    margin: 20px auto;
    background-color: #ccf;
    width: fit-content;
    border-radius: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  i.icon {
    font-size: 2em;
    cursor: pointer;
    padding: 0 10px;
    margin-top: 1.2em;
  }
  
  .card-image {
    width: 200px;
    height: auto;
    border-radius: 0 0 15px 15px;
    cursor: pointer;
  }
  
  .card-text {
    font-size: 1.2em;
    margin-top: 10px;
    padding-bottom: .8em;
    text-align: center;
  }
  </style>
  