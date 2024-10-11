<template>
  <div>
    <div id="narration">
      <h2 class="ui header">【手勾手】
        <div class="sub header">一對一對中的子形式</div>
      </h2>
      <p>先站出來的演員擺出一隻彎曲的手，等著第二位也就是他的搭擋來勾住。</p>
      <p>勾住之後，先站出來的演員像流動塑像一樣，重覆一個動作和短句三次。唯一不同的是他同時要拉扯第二位站出來的演員。</p>
      <p>接著，第二位位站出來的演員反向拉扯先站出來的演員，並站在相反的立場，重覆一個動作和短句三次。</p>
      <p>來回各講三輪之後一起定格結凍。</p>
    </div>
    <canvas ref="gameCanvas" width="360" height="400"></canvas>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      circle1: {
        x: 75,
        y: 200,
        radius: 40,
        color: 'red',
        dx: 0
      },
      circle2: {
        x: 225,
        y: 200,
        radius: 40,
        color: 'green',
        dx: 0
      },
      handLength: 0,
      pullDistance: 2,
      iterations: 6,
      currentIteration: 0,
      pullingLeft: true,
      tiredTextCount: 0,
      familyTextCount: 0,
      faceVisible: true,
      redCircleTexts: [
        '我好累',
        '這工作太勉強',
        '真的不行了',
        '我好累',
        '這工作太勉強',
        '真的不行了'
      ],
      greenCircleTexts: [
        '這份工作對我很重要',
        '我要養家',
        '我要融入社會',
        '這份工作對我很重要',
        '我要養家',
        '我要融入社會'
      ],
    };
  },
  mounted() {
    this.canvas = this.$refs.gameCanvas;
    this.ctx = this.canvas.getContext('2d');
    this.update();
    this.appearAnimation();
  },
  methods: {
    drawCircle(circle) {
      this.ctx.beginPath();
      this.ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = circle.color;
      this.ctx.fill();
      this.ctx.closePath();
    },
    drawHand(circle, direction) {
      this.ctx.beginPath();
      this.ctx.moveTo(circle.x, circle.y);
      if (direction === 'right') {
        this.ctx.lineTo(circle.x + this.handLength, circle.y);
      } else {
        this.ctx.lineTo(circle.x - this.handLength, circle.y);
      }
      this.ctx.strokeStyle = circle.color;
      this.ctx.stroke();
      this.ctx.closePath();
    },
    drawFace(circle) {
      // Drawing face logic for circle1 (happy face)
      this.ctx.beginPath();
      this.ctx.arc(circle.x - 10, circle.y - 10, 2, 0, Math.PI * 2);
      this.ctx.arc(circle.x + 10, circle.y - 10, 2, 0, Math.PI * 2);
      this.ctx.fillStyle = 'black';
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.arc(circle.x, circle.y + 5, 10, 0, Math.PI, false);
      this.ctx.strokeStyle = 'black';
      this.ctx.stroke();
      this.ctx.closePath();
    },
    drawFace2(circle) {
      // Drawing face logic for circle2 (angry face)
      this.ctx.beginPath();
      this.ctx.arc(circle.x - 10, circle.y - 10, 2, 0, Math.PI * 2);
      this.ctx.arc(circle.x + 10, circle.y - 10, 2, 0, Math.PI * 2);
      this.ctx.fillStyle = 'black';
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.arc(circle.x, circle.y + 10, 20, Math.PI, 0, true);
      this.ctx.strokeStyle = 'black';
      this.ctx.stroke();
      this.ctx.closePath();
    },
    drawText(text, x, y) {
      this.ctx.fillStyle = 'black';
      this.ctx.font = '20px Arial';
      this.ctx.fillText(text, x, y);
    },
    pullAction() {
      const pull = () => {
        if (this.currentIteration < this.iterations) {
          if (this.pullingLeft) {
            this.circle1.dx = -this.pullDistance;
            this.circle2.dx = -this.pullDistance;
            this.tiredTextCount = 3;
          } else {
            this.circle1.dx = this.pullDistance;
            this.circle2.dx = this.pullDistance;
            this.familyTextCount = 3;
          }

          const targetX = this.pullingLeft ? 25 : 225;          
          const interval = setInterval(() => {
            this.circle1.x += this.circle1.dx;
            this.circle2.x += this.circle2.dx;
            if ((this.pullingLeft && this.circle1.x <= targetX) || (!this.pullingLeft && this.circle1.x >= targetX)) {
              clearInterval(interval);
              this.circle1.dx = 0;
              this.circle2.dx = 0;
              this.pullingLeft = !this.pullingLeft;
              this.currentIteration++;
              this.tiredTextCount = 0;
              this.familyTextCount = 0;
              setTimeout(pull, 500);
            }
          }, 20);
        }
      };
      pull();
    },
    update() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawCircle(this.circle1);
      this.drawHand(this.circle1, 'right');
      this.drawCircle(this.circle2);
      this.drawHand(this.circle2, 'left');

      let redText = this.redCircleTexts[this.currentIteration] || '';
      let greenText = this.greenCircleTexts[this.currentIteration] || '';

      for (let i = 0; i < this.tiredTextCount; i++) {
        this.drawText(redText, this.circle1.x - 10, this.circle1.y - 50 - i * 20);
      }
      for (let i = 0; i < this.familyTextCount; i++) {
        this.drawText(greenText, this.circle2.x - 10, this.circle2.y - 50 - i * 20);
      }

      this.drawFace(this.circle1);
      this.drawFace2(this.circle2);

      requestAnimationFrame(this.update);
    },
    appearAnimation() {
      const interval = setInterval(() => {
        if (this.circle1.radius < 30) {
          this.circle1.radius += 1;
        } else if (this.handLength < 50) {
          this.handLength += 2;
        } else if (this.circle2.radius < 30) {
          this.circle2.radius += 1;
        } else if (this.handLength < 100) {
          this.handLength += 2;
        } else {
          this.faceVisible = true;
          clearInterval(interval);
          this.pullAction();
        }
      }, 50);
    }
  }
});
</script>

<style scoped>
canvas {
  border: 1px solid black;
  display: block;
  margin: 20px auto;
}
#narration {
  text-align: center;
  font-size: 16px;
  margin: 20px;
}
</style>
