<template>
  <b-container>
    <!-- 导航条 -->
    <b-navbar toggleable="sm" type="light" variant="faded">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">WKH</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/articles">主页</b-nav-item>
          <b-nav-item to="/about">关于</b-nav-item>
          <b-nav-item to="/links">友链</b-nav-item>
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
        <a href="#" title="大雄">
          <img src="./images/hzw.jpg" alt="WKH">
        </a>
      </p>
      <ul>
        <li>
          <a href="/" title="WKH">
            <Icon type="md-person" />WKH
          </a>
        </li>
        <li>
          <a href="#" title="After 95">
            <Icon type="md-timer" />AFTER 95
          </a>
        </li>
        <li>
          <a href="#" title="Location">
            <Icon type="ios-compass" />LOCATION
          </a>
        </li>
        <li>
          <a href="#" title="Archives">
            <Icon type="ios-archive" />ARCHIVES
          </a>
        </li>
        <li>
          <a href="#" title="JAVA">
            <Icon type="md-code-working" />JAVA
          </a>
        </li>
      </ul>
    </div>
  </b-container>
</template>
<script>
    export default {
        data () {
            return {
                
            };
        },
       
    }
</script>
<style lang="css" scoped src="./css/mybootstrap.css">
  
</style>
