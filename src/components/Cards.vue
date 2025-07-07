<template lang="pug">
.keep-neutral
  .card-container
    .ui.row.img-container
      i.chevron.left.icon(@click="prevCard")
      transition-group(name="fade" tag="div" id="group")
        img.card-image(
          v-for="(card, index) in cards", 
          :key="card", 
          :src="`/img/keep-nuetral/${card}.webp`", 
          :alt="card", 
          v-show="randomCardIndex === index",
          @click="nextCard"
        )
      i.chevron.right.icon(@click="nextCard")
    .ui.row
      p.card-text {{ cards[randomCardIndex] }}
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
  mounted () {
    setInterval(this.nextCard, 5000);
  },
  methods: {
    // 切換到上一張卡片
    prevCard() {
      this.randomCardIndex = (this.randomCardIndex - 1 + this.cards.length) % this.cards.length;
    },
    // 切換到下一張卡片
    nextCard() {
      this.randomCardIndex = (this.randomCardIndex + 1) % this.cards.length;
    }
  },
  created() {
    this.randomCardIndex = Math.floor(Math.random() * this.cards.length);
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
    height: 200px;
  }
  
  i.icon {
    font-size: 2em;
    cursor: pointer;
    padding: 0 10px;
    margin-top: 1.2em;
  }

  #group {
    display: block;
    position: relative;
    width: 200px;
    height: 200px;
  }
  
  .card-image {
    width: 200px;
    height: auto;
    border-radius: 0 0 15px 15px;
    cursor: pointer;
    position: absolute;
    left: 0;
  }
  
  .card-text {
    font-size: 1.6em;
    margin-top: 10px;
    padding-bottom: .36em;
    text-align: center;
  }

  @media (max-width: 768px) {
    .card-text {
      font-size: 1.2em;
    }
  }
  
  /* 過場效果 */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
  