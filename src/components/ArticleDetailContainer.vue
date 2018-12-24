<template>
<div>
  <div class="article"> 
    <div class="article-title">
      <h2>{{blog.title}}</h2>
    </div>
    
    <span class="article-info">
      <span>时间：{{blog.updateTime | dateFormat("YYYY-MM-DD HH:MM")}}</span>
      <span>分类：{{blog.categoryName}}</span>
      <span>标签：{{blog.tagNameList}}</span>
      <span>浏览：{{blog.hits}} 次</span>
    </span>

    <div class="article-content"> 
      <mavon-editor :toolbarsFlag="false" :editable="false" :ishljs="true" :navigation="true"
:subfield="false" defaultOpen="preview" v-model="blog.content">
      </mavon-editor>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        blog: {},
      }
    },
    created() {
      this.getArticle();
    },
    computed: {
    },
    methods: {
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
<style>
.v-note-navigation-wrapper {
    position: fixed !important;
    width: 345px !important;
  }
  
</style>

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
      margin-top: 15px;
      display: block;

      span {
        margin-right: 10px; 
      }
    }

    .article-content {
      margin-top: 15px;

      .markdown-body {
        font-size: 13px;
      }
    }
  }
</style>
