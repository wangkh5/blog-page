<template>
    <div class="article-list">        
      <div class="article" v-for="item in tableData" :key="item.id">
        <div class="article-title">
          <router-link :to="'/articledetail/' + item.id" :title="item.title">
            <h2>{{item.title}}</h2>
          </router-link>
        </div>
        <div class="article-summary">
          <mavon-editor :toolbarsFlag="false" :editable="false" :ishljs="true"
          :subfield="false" defaultOpen="preview" v-model="item.content" class="mavon-editor"/>
        </div>
        <p class="article-meta">
          <router-link :to="'/articledetail/' + item.id" :title="item.title">
            <Icon type="ios-time-outline" />
            <Time :time="item.createTime" type="relative" />
          </router-link>
          <router-link class="more" :to="'/articledetail/' + item.id" :title="item.title">
            <Icon type="ios-glasses-outline" />
            Read More
          </router-link>
        </p>    
      </div>
      <div class="article-pagination">
        <Page show-total :total="totalRecord" :page-size="pageSize" :current="currentPage" @on-change="findPage" prev-text="上一页" next-text="下一页"/>  
      </div>  
    </div>
</template>

<script>

  export default {
    data() {
      return {
        tableData: [],
        currentPage: 1,
        pageSize: 10,
        totalRecord: 100,
      }
    },
    created() {
      this.findPage(this.currentPage);
    },
    methods: {
      // 分页条件查询
      findPage(currentPage){
        this.currentPage = currentPage;
        this.$http.get("blog/findPage?pageNum="+this.currentPage+"&pageSize="+this.pageSize)
        .then(result => {
          this.tableData = result.body.rows;
          this.totalRecord = result.body.totalRecord;
        });
      },
    }
    
  }
</script>

<style lang="scss">
.mavon-editor {
  .v-show-content {
    overflow-y: hidden !important;
    background: #ffffff !important;
    padding: 0 !important;
  }
  .shadow {
    box-shadow: none !important;
  }
  h2 {
    margin-top: 5px !important;
  }

  h1 {
      font-size: 14px !important;
  }
          
  h2 {
    font-size: 14px !important;
  }
  
  h3 {
    font-size: 14px !important;
  }
}
</style>

<style lang="scss" scoped>
  .article-list {
    .article {
      margin-top: 20px;
      border: 1px solid #eee;
      padding: 15px 10px 10px 15px; 
      box-shadow: 0 1px 3px rgba(0,0,0,0.1); 
      
      .article-title {
        h2 {
          color: #000;
          font-size: 15px;
        }
      }

      a {
        color: #878c93;
        outline: none;
      }

      .article-summary {
        margin-top: 5px;

        .markdown-body {
          font-size: 14px;
          min-height: 0px;
          height: 130px;
          width: auto;
          min-width: 0px;
        }
      }

      .article-meta {
        margin-top: 10px;
        text-align: right;
        color: #878c93;
        font-size: 12px;
      }
      
    }

    .article-pagination {
      text-align: center;
      margin-top: 5px;
    }
    
  }
 
</style>
