<template>
  <b-container>
    <!-- 导航条 -->
    <b-navbar toggleable="sm" type="light" variant="faded">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">WANG</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/articles">主页</b-nav-item>
          <b-nav-item to="/archives">归档</b-nav-item>
          <b-nav-item to="/about">关于</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!--路由视图 -->
    <router-view></router-view>

    <!-- 页脚 -->
    <div class="blog-footer text-center">
      <p>© 2018 wang kaihua</p>
      <p>We're here to put a dent in the universe.</p>
      <p>If today were the last day of your life, would you want to do what you are about to do today?</p>
    </div>

    <div class="blog-sidebar">
      <p class="blog-gravatar">
        <a href="#" :title="me.netName">
          <img src="./images/qbs.jpg" alt="me.netName">
        </a>
      </p>
      <ul>
        <li>
          <a href="#" :title="me.netName">
            <Icon type="md-person" />{{me.netName}}
          </a>
        </li>
        <li>
          <a href="#" :title="me.occupation">
            <Icon type="md-ionic" />{{me.occupation}}
          </a>
        </li>
        <li>
          <a href="#" :title="me.liveCity">
            <Icon type="ios-compass" />{{me.liveCity}}
          </a>
        </li>
        <li>
          <a href="https://github.com/wangkh5" :title="'github'" target="_blank">
            <Icon type="logo-github" />GITHUB
          </a>
        </li>
        <li>
          <a href="#" :title="me.birthday">
            <Icon type="md-timer"/>{{me.birthday | dateFormat("YYYY-MM-DD")}}
          </a>
        </li>
      </ul>
    </div>
    <BackTop></BackTop>
  </b-container>
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
          });
        }
      }
       
    }
</script>
<style lang="css" scoped src="./css/mybootstrap.css">
  
</style>
