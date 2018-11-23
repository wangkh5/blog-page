<template>
<div>
  <div class="article"> 
    <div class="article-title">
      <h2>{{blog.title}}</h2>
    </div>
    
    <span class="article-info">
      <span> 时间：<Time :time="blog.updateTime" /></span>
      
      <span> / 浏览：{{blog.hits}} 次</span>
      <span> / 分类：{{blog.categoryId}}</span>
    </span>

    <div class="article-content"> 
      <mavon-editor :toolbarsFlag="false" :editable="false" :ishljs="true"
:subfield="false" defaultOpen="preview" v-model="blog.content"/>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        blog: {},
        categoryList: [],
      }
    },
    created() {
      this.getCategoryList();
      this.getArticle();
    },

    methods: {
      // 获取所有分类
      getCategoryList(){
        this.$http.get("category/findAll")
          .then(result => {
          this.categoryList = result.body;
        });
      },

      getArticle() {
        if(this.$route.params.id){
          this.$http.get("blog/findOne?id="+this.$route.params.id)
            .then(result => {
              this.blog = result.body;
          });
        }
      }


    }

  }
</script>
<style lang="scss" scoped>
  .article {
    color: #000;

    .article-title {
      margin-top: 20px;
      h2 {
        font-size: 20px;
      }
    }

    .article-info {
      font-size: 12px;
      color: #878c93;
      // font-weight: 400;
      margin-top: 15px;
      display: block;
    }

    .article-content {
      margin-top: 15px;

      .markdown-body {
        font-size: 12px;
      }
    }
  }
</style>
