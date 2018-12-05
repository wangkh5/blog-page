<template>
  <div class="article-archives">
    <div class="archives-count">
      <h2>共有{{blogList.length}}篇文章</h2>
    </div>
    <div class="article-content" v-for="blog in blogList" :key="blog.id">
      <router-link :to="'/articledetail/' + blog.id">
        <span>{{blog.title}}</span>
        <Time :time="blog.updateTime"/>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        blogList: [],
      }
    },
    created() {
      this.getAllBlog();
    },
    methods: {
      // 获取所有文章
      getAllBlog(){
        this.$http.get("blog/findAll")
          .then(result => {
          this.blogList = result.body;
        });
      },
    }
  }
</script>
<style scoped lang="scss">
  .article-archives {
    margin-top: 20px;
    color: #000;
    
    .archives-count {
      text-align: center;
      // font-size: 20px;
    }

    .article-content {
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      font-size: 17px;
      margin-top: 12px;
      padding: 6px;

      a {
        outline: none;
        color: #000;
       
        display: block
      }

      .ivu-time {
        float: right
      }
    }
  }
</style>