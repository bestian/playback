<template lang="pug">
.faq
  .ui.segment.container
    h2.ui.header 相關書籍
    .ui.two.column.grid
      .column(v-for="book in books" :key="book.id")
        a(:href="book.url" target="_blank" rel="noopener noreferrer")
          img(:src="book.imageUrl")
        .filler
        p
          a(:href="book.url" target="_blank" rel="noopener noreferrer") {{ book.title }}
</template>

<script>
export default {
  name: 'Book',
  data() {
    return {
      books: [
        {
          id: 1,
          url: "https://www.psy.com.tw/ec99/ushop20128/goodsdescr.asp?category_id=72&parent_id=87&prod_id=41505",
          imageUrl: "https://www.psy.com.tw/ecmas0128/Store/bImages/41505.jpg",
          title: "即興真實人生-一人一故事劇場中的個人故事"
        },
        {
          id: 2,
          url: "https://webpac.tphcc.gov.tw/webpac/content.cfm?mid=217151&m=ss&k0=%E8%96%A9%E6%8F%90%E7%88%BE%20((satir%2C%20virginia))&t0=k&c0=and&list_num=10&current_page=1&mt=&at=&sj=&py=&pr=&it=&lr=&lg=&si=1&view=d",
          imageUrl: "https://toread3.tphcc.gov.tw/toread/covers.svc?h=260&t=m&w=194&rid=217151",
          title: "薩提爾的家族治療模式"
        }
      ]
    }
  }
}
</script>

<style scoped>

  img {
    max-width: 160px;  
    margin-top: 10px;
  }
  p {
    font-size: 18px;
    text-align: center;
    max-width: 620px;
    margin: .6em auto;
    color: rgb(64, 3, 206);
  }

  .column {
    padding: 10px;
    height: 360px;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
