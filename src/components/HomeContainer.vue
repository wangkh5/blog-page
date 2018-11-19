<template>
  <div>
    home
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    data() {
      return {
        // visible2: false,
        // tableData: [],
        // search: '',
        // currentPage: 1,
        // pageSize: 7,
        // totalRecord: 0,
        // categoryList: [],
      }
    },
    created() {
      // this.getCategoryList();
      // this.findPage(this.currentPage);
    },
    methods: {
      // 分页条件查询
      // findPage(currentPage){
      //   this.currentPage = currentPage;
      //   this.$http.get("blog/findPage?pageNum="+this.currentPage+"&pageSize="+this.pageSize)
      //   .then(result => {
      //     this.tableData = result.body.rows;
      //     this.totalRecord = result.body.totalRecord;
      //   });
      // },
      
      // // 格式化时间显示
      // formatTime(row, column, cellValue, index){
      //   return moment(cellValue).format("YYYY-MM-DD HH:mm");
      // },
      
      // // 格式化分类显示
      // formatCategory(row,column,cellValue,index){
      //     console.log(this.categoryList);
      //     var index = this.categoryList.findIndex(item => {
      //       if (item.id == cellValue) {
      //         return true;
      //       }
      //     });
      //     return this.categoryList[index].name;
      // },

      // // 获取所有分类
      // getCategoryList(){
      //   this.$http.get("category/findAll")
      //   .then(result => {
      //     this.categoryList = result.body;
      //   });
      // },

    }
    
  }
</script>


<style lang="scss" scoped>

 
</style>
