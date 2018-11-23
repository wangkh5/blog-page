<template>
    <mavon-editor :toolbarsFlag="false" :editable="false" :ishljs="true"
    :subfield="false" defaultOpen="preview" v-model="me.profile"/>
</template>
<script>
export default {
  data() {
    return {
      me: {},
    }
  },
  created() {
    this.getProfile()
  },
  methods: {
    getProfile() {
      this.$http.get("me/findOne?id=1").then(result => {
        this.me = result.body;
        console.log(this.me)
      });
    }
  }
}
</script>
<style lang="scss" scoped>
  .markdown-body {
    margin-top: 20px;
    background: none;
    font-size: 14px;
  } 
  .v-note-read-content{
    background: none;
  }
</style>


