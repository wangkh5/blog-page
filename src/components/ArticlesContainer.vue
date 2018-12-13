<template>
    <div class="article-list">        
      <div class="article" v-for="item in tableData" :key="item.id">
        <div class="article-title">
          <router-link :to="'/articledetail/' + item.id" :title="item.title">
            <h2>{{item.title}}</h2>
          </router-link>
        </div>
        <div class="article-summary" v-html="item.digest"></div>
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

<style lang="scss" scoped>
  .article-list {
    .article {
      margin-top: 15px;
      border: 1px solid #eee;
      padding: 10px 10px 7px 14px; 
      
      .article-title {
        h2 {
          color: #000;
          font-size: 16px;
        }
      }

      a {
        color: #878c93;
        outline: none;
      }

      .article-summary {
        margin-top: 5px;
        font-size: 13px;
        // color: #000;
      }

      .article-meta {
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
