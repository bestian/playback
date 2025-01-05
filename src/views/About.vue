<template lang="pug">
.about
  img.avatar(src="../assets/Bestian.jpg")
  h1.ui.header 小巴老師的故事
    
    i.sub.header 「每個人的生命，都是可歌可泣的故事。
      br
      | 可歌，是因為有力量；可泣，是因為有磨難。
      br
      | 聆聽自我，面對真實，專注當下，生命便會成長」-- 小巴
  
    .ui.divider
    i.sub.header 「我們不能改變過去，
      br
      | 但是可以改變過去對我們的影響。」 - 薩提爾
  
  .ui.text.container
    .ui.segments
      .ui.segment
        h3.ui.header 生命初期
        p 小巴老師，本名唐宗浩。
        p 還在媽媽肚子裡的時候，就因為媽媽受傷，醫生建議使用X光檢查，並說：「胎兒還小，你還年輕，可以再生一個」感受到這個世界上，生存這件事情是有危險的。
        p 幼年時期，父母都上夜班，曾經一度有嚴重的分離焦慮，直到媽媽辭職回家。
        p 在家中排行老二，上面的老大被認為是天才兒童，因此活在光環之下的陰影之中很長一段時間，覺得自己沒什麼特殊之處和價值感。
      
      .ui.segment
        h3.ui.header 童年時期
        p 從小觸覺敏感和聽覺敏感，幼兒時期曾被大人性騷擾，也不敢求助。
        p 兒童時期曾經隨家人出國留學，經驗過語言不通而無法和周圍的人溝通的情況，深感溝通之必要性。
        p 回國後在當年的體制內小學就讀，因受不了老師的言語霸凌和體罰其他同學時產生的壓迫感，而休學在家一年有餘。
        p 後來父母和其他類似需求的家長共同創辦種籽實驗小學，第一次有了快樂的童年回憶。
      
      .ui.segment
        h3.ui.header 青少年時期
        p 但由於媽媽是學校老師的雙重身份，少年和青少年時期，一直覺得有愛被瓜分的感覺。
        p 青少年時期，因為自身的心理壓抑、學校的兩制衝突等種種壓力，開始出現雙極性情感疾患的徵兆。
        p 也是青少年時期，開始有性倒錯與客體轉移的心理動力問題。
        p 另一方面，在學業成績優異的表現下，心理方面的問題卻被自己和周圍的人忽視，而沒有徹底的去面對和解決。

      .ui.segment
        h3.ui.header 求學與工作
        p 大學曾經念心理系一年，並接受心理治療一段時間，對於重新認識心理動力很有幫助。
        p 應用數學系教育學程畢業之後，專注投入從事數學教育和協助有特殊學習需求的學生，在工作的過程當中持續維持自己的心理平衡和成長。
        p 結婚和孩子出生產生的幸福和壓力，讓我有了更豐富跟深刻的人生體驗，雖然壓力最大時也曾經因此住院過。

      .ui.segment
        h3.ui.header 人生轉折
        p 在八八風災的時候，離開安定熟悉的山中小屋，也脫離原本熟悉的支持社群，工作和社會支持上頓失倚靠。
        p 在失去平衡、心智退化的狀態下，曾因對兒童不適當的接觸而遭受刑事判決，入獄十個月。也因此受到媒體和輿論的嚴厲批評。
        p 在監獄當中持續自我治療，在有限的資源之下，學習如何讓自己平衡、認識並轉化自己的心理動力。

      .ui.segment
        h3.ui.header 重新出發
        p 出獄後的更生生活，在家人和朋友的陪伴支持下，一面進行自我心理治療以及接受藥物治療，一面回歸真實生活；並在網路社群隱姓埋名，致力貢獻於開放源碼和自學社群相關的網路開發工程。
        p 曾經試著以接案網路工程師當作新的專業工作，但最終發現自己還是更重視人與人、面對面的直接交流。
        p 重新出發，也是從心出發。我決定用自我心理治療與社群支持的過程當中，累積二十年的Playback同理回饋即興劇場經驗，當作與人面對面的連結起點，分享專注平衡的愛與力量。

      .ui.divider
      router-link.ui.large.green.button(to="/courses", @click="trackEvent('internal_link', '/courses')") 瞭解更多
        i.chevron.right.icon
      br
      br
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about {
  position: relative;
  padding: 2em;
  width: 100%;
  max-width: 100%;
}

img.avatar {
  position: absolute;
  top: 0;
  left: 15vw;
  width: 150px;
  display: block;
  border-radius: 50%;
  margin: 1em auto;
}

.ui.text.container {
  margin-top: 2em;
  margin-bottom: 4em;
}

p {
  font-size: 18px;
  line-height: 1.8;
  margin: 1em 0;
  color: rgba(0, 0, 0, 0.87);
}

i.sub.header {
  display: inline-block;
  text-align: left;
  margin: 0.62em auto !important;
  width: fit-content;
  max-width: 320px;
  font-size: 16px !important;
}

.ui.segments {
  box-shadow: none;
}

.ui.segment {
  padding: 2em;
  background: rgba(255, 255, 255, 0.95);
}

h3.ui.header {
  margin-bottom: 1.5em;
  color: #2185d0;
}

@media only screen and (max-width: 767px) {
  .about {
    padding: 0 !important;
  }

  .ui.segments {
    border-bottom: none !important;
  }

  img.avatar {
    position: relative;
    top: 0;
    left: 0;
    width: 140px;
    margin: 0 auto;
  }

  .ui.text.container {
    margin-left: 0 !important;  
    margin-right: 0 !important;
  }
  
  .ui.segment {
    padding: 1em .2em !important;
  }
  
  p {
    padding: 0 !important;
    font-size: 18px;
  }
}
</style>
