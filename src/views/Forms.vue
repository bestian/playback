<template lang="pug">
.forms-page
  .ui.container
    h1.ui.header Playback基本形式
    p.subtitle 點選各形式，了解詳細說明與示範
    .cards-grid
      router-link.form-card(to="/statues")
        svg(viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg")
          circle(cx="30" cy="35" r="12" fill="#9b59b6")
          circle(cx="70" cy="35" r="12" fill="#9b59b6")
          circle(cx="50" cy="65" r="12" fill="#8e44ad")
          line(x1="30" y1="47" x2="50" y2="53" stroke="#9b59b6" stroke-width="3")
          line(x1="70" y1="47" x2="50" y2="53" stroke="#9b59b6" stroke-width="3")
        span 流動塑像

      router-link.form-card(to="/one_to_one")
        svg(viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg")
          circle(cx="25" cy="40" r="14" fill="#e74c3c")
          circle(cx="75" cy="40" r="14" fill="#c0392b")
          path(d="M39 40 Q50 25 61 40" fill="none" stroke="#e74c3c" stroke-width="3")
          path(d="M39 40 Q50 55 61 40" fill="none" stroke="#c0392b" stroke-width="3")
        span 一對對

      router-link.form-card(to="/pages")
        svg(viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg")
          rect(x="20" y="20" width="60" height="70" rx="4" fill="#3498db")
          rect(x="27" y="30" width="40" height="6" rx="2" fill="white")
          rect(x="27" y="43" width="35" height="6" rx="2" fill="white")
          rect(x="27" y="56" width="30" height="6" rx="2" fill="white")
          rect(x="27" y="69" width="20" height="6" rx="2" fill="white")
        span 一頁頁

      router-link.form-card(to="/4elems")
        svg(viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg")
          polygon(points="50,10 60,40 90,40 68,58 76,88 50,70 24,88 32,58 10,40 40,40" fill="#f39c12")
          circle(cx="50" cy="50" r="12" fill="#e67e22")
        span 四元素

      router-link.form-card(to="/free")
        svg(viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg")
          circle(cx="50" cy="30" r="18" fill="#e91e8c")
          path(d="M20 75 Q35 55 50 60 Q65 55 80 75" fill="#e91e8c")
          path(d="M30 85 Q50 65 70 85" fill="#c2185b")
        span 自由呈現


    .ui.divider
    router-link.ui.large.green.button(to="/courses", @click="trackEvent('internal_link', '/courses')") 瞭解更多
      i.chevron.right.icon

</template>

<script>
export default {
  name: 'Forms'
}
</script>

<style scoped lang="scss">
.forms-page {
  padding: 2em 1em 4em;
}

h1.ui.header {
  text-align: center;
  color: #4a0080;
  margin-bottom: 0.3em;
}

p.subtitle {
  text-align: center;
  color: #666;
  font-size: 16px;
  margin-bottom: 2em;
}

.cards-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5em;
  max-width: 800px;
  margin: 0 auto;
}

.form-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  padding: 1.5em 1em;
  width: 140px;
  transition: transform 0.18s, box-shadow 0.18s;
  color: #333;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  }

  svg {
    width: 80px;
    height: 80px;
    margin-bottom: 0.7em;
  }

  span {
    font-size: 17px;
    font-weight: bold;
    color: #4a0080;
  }
}

@media (max-width: 600px) {
  .cards-grid {
    gap: 1em;
  }
  .form-card {
    width: 120px;
    padding: 1em 0.7em;
  }
}
</style>
