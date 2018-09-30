<template>
    <div class="header-box">
        <div class="header-left" :class="{ 'logo-shrink':!classObject.isUnfold }">
            <div>
                <img src="" alt="">
            </div>
        </div>
        <el-button
        :class="{ 'el-button-unfold': classObject.isUnfold }"
        :icon="iconStyle"
        circle
        @click="handleClick"></el-button>
        <div class=" el-menu-layout">
            <el-tooltip class="item" effect="dark" :content="changeFullScreenTip" placement="bottom-start">
                <div class="el-menu-full-screen">
                    <i class="el-icon-rank" @click="fullScreenHandle"></i>
                </div>
            </el-tooltip>
            <el-dropdown>
                <span class="el-dropdown-link el-dropdown-user">
                </span>
                <i class="el-icon-caret-bottom el-icon--right"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>aa</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { mixinsScreen } from '@/library/screen'
export default {
  mixins: [ mixinsScreen ],
  name: 'HomeHeader',
  data () {
    return {
      classObject: {
        isUnfold: true
      },
      iconStyle: 'el-icon-caret-left',
      fullScreen: {
        isFullScreen: false
      }
    }
  },
  computed: {
    changeFullScreenTip () {
      if (!this.fullScreen.isFullScreen) {
        this.fullScreen.text = '全屏显示'
        return this.fullScreen.text
      } else {
        this.fullScreen.text = '退出全屏'
        return this.fullScreen.text
      }
    }
  },
  methods: {
    handleClick () { // 折叠导航栏
      this.classObject.isUnfold = !this.classObject.isUnfold
      this.$emit('btnChange', this.classObject.isUnfold)
      if (!this.classObject.isUnfold) {
        this.iconStyle = 'el-icon-caret-right'
      } else {
        this.iconStyle = 'el-icon-caret-left'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .header-box {
        position: relative;
        height: 60px;
    }
    .el-button {
        position: absolute;
        left: 80px;
        top: 14px;
    }
    .el-button-unfold {
        left: 214px;
    }
    .el-menu-layout {
        float: right;
        height: 100%;
        & > .el-dropdown {
            padding: 0 10px;
        }
    }
    .el-menu-full-screen {
        height: 100%;
        width: 50px;
        font-size: 24px;
        color: rgb(94, 94, 94);
        float: left;
        cursor: pointer;
    }
    .header-left {
        width: 200px;
        background: rgb(30, 150, 255);
        float: left;
    }
    .logo-shrink {
        width: 65px;
    }
    .el-dropdown-user {
        position: relative;
        top: 5px;
        display: inline-block;
        line-height: 60px;
        width: 42px;
        height: 42px;
        background: rgb(30, 150, 255);
        border-radius: 50%;
    }
</style>
