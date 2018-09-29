<template>
  <section class="container" id="Service">
    <figure :class="['figure', serviceVisible ? 'visible': 'hidden-left']" >
      <img class="img" src="../assets/service.png" alt="創順服務">
    </figure>
    <figcaption :class="['figcaption', serviceVisible ? 'visible': direction]">
      <h2 class="title">服務項目</h2>
      <em class="content">專注於提供線上娛樂的主體以及周邊服務。</em>
    </figcaption>
  </section>
</template>
<script>
export default {
  props: ['serviceVisible'],
  data () {
    return {
      direction: 'hidden-down'
    }
  },
  mounted () {
    let clientW = document.documentElement.clientWidth
    if (clientW > 768) {
      this.direction = 'hidden-right'
    } else {
      this.direction = 'hidden-down'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  min-height: 300px;
  margin: 0 auto;
  margin-bottom: 120px;
}

.figure, .figcaption {
  vertical-align: middle;
  transition: opacity .3s ease-in-out .2s,transform .3s ease-in-out .2s ;
}

.figure {
  display: inline-block;
  min-width: 200px;
  padding: 20px;
  height: auto;
  .img {
    width: 100%;
    height: 100%;
  }
}

.figcaption {
  display: inline-block;
  text-align: left;
  padding-left: 20px;
  .title {
    font-size: 36px;
    line-height: 50px;
    color: #333;
  }
  .content {
    font-size: 16px;
    line-height: 25px;
    color: #999;
  }
}
</style>
