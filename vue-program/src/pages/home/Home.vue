<template>
    <el-container>
        <el-header>
            <home-header @btnChange="handleBtnChange"></home-header>
        </el-header>
        <el-container>
            <home-aside :isCollapse="isCollapse"></home-aside>
            <el-main>
                <home-main></home-main>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import HomeHeader from './commponents/Header'
import HomeAside from './aside/HomeAside'
import HomeMain from './commponents/Main'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeAside,
    HomeMain
  },
  data () {
    return {
      visible: false,
      isCollapse: false
    }
  },
  methods: {
    handleBtnChange (btn) {
      this.isCollapse = !btn
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "~styles/index.scss"; //引入全局样式
    .el-header, .el-footer {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        line-height: 60px;
        padding: 0px;
    }
    .el-aside {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    body > .el-container {
        margin-bottom: 40px;
    }
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }
    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
