<template>
    <div class="header-box">
        <div class="header-left" :class="{ 'logo-shrink':!classObject.isUnfold }">
            <div class="header-logo" @click="headerLogoHandle">
                <img src="data:image/svg+xml;base64,CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwMCAxMDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPG1ldGFkYXRhPiDnn6Lph4/lm77moIfkuIvovb0gOiBodHRwOi8vd3d3LnNmb250LmNuLyA8L21ldGFkYXRhPjxnPjxwYXRoIGQ9Ik05ODQuMyw1MTJjMCwxMDYuOC0zMS4yLDIwMi44LTkzLjUsMjg4LjFDODI4LjUsODg1LjMsNzQ4LDk0NC4zLDY0OS4zLDk3Ny4xYy0xMS41LDIuMS0xOS45LDAuNi0yNS4yLTQuNXMtOC0xMS41LTgtMTkuMVY4MTguOWMwLTQxLjMtMTEuMS03MS41LTMzLjItOTAuNmMyNC4yLTIuNiw0Ni02LjQsNjUuNC0xMS41YzE5LjQtNS4xLDM5LjMtMTMuNCw2MC0yNC45YzIwLjYtMTEuNSwzNy45LTI1LjYsNTEuNy00Mi40YzEzLjgtMTYuOCwyNS4xLTM5LjEsMzMuOC02N2M4LjctMjcuOSwxMy4xLTU5LjksMTMuMS05NmMwLTUxLjUtMTYuOC05NS4zLTUwLjQtMTMxLjRjMTUuNy0zOC43LDE0LTgyLjEtNS4xLTEzMC4yYy0xMS45LTMuOC0yOS4xLTEuNS01MS43LDdjLTIyLjUsOC41LTQyLjEsMTcuOS01OC43LDI4LjFsLTI0LjIsMTUuM2MtMzkuNi0xMS4xLTgwLjQtMTYuNi0xMjIuNS0xNi42Yy00Mi4xLDAtODIuOSw1LjUtMTIyLjUsMTYuNmMtNi44LTQuNy0xNS44LTEwLjQtMjcuMS0xNy4yYy0xMS4zLTYuOC0yOS0xNS01My4zLTI0LjZjLTI0LjItOS42LTQyLjUtMTIuNC01NC45LTguNmMtMTguNyw0OC4xLTIwLjIsOTEuNC00LjUsMTMwLjJjLTMzLjYsMzYuMi01MC40LDgwLTUwLjQsMTMxLjRjMCwzNi4yLDQuNCw2OC4xLDEzLjEsOTUuN2M4LjcsMjcuNiwxOS45LDUwLDMzLjUsNjdjMTMuNiwxNywzMC43LDMxLjMsNTEuNCw0Mi43YzIwLjYsMTEuNSw0MC42LDE5LjgsNjAsMjQuOWMxOS40LDUuMSw0MS4yLDguOSw2NS40LDExLjVjLTE3LDE1LjMtMjcuNCwzNy4yLTMxLjMsNjUuN2MtOC45LDQuMy0xOC41LDcuNC0yOC43LDkuNmMtMTAuMiwyLjEtMjIuMywzLjItMzYuNCwzLjJjLTE0LDAtMjgtNC42LTQxLjgtMTMuN2MtMTMuOC05LjEtMjUuNi0yMi40LTM1LjQtMzkuOWMtOC4xLTEzLjYtMTguNC0yNC43LTMwLjktMzMuMmMtMTIuNS04LjUtMjMuMS0xMy42LTMxLjYtMTUuM2wtMTIuOC0xLjljLTguOSwwLTE1LjEsMS0xOC41LDIuOWMtMy40LDEuOS00LjUsNC40LTMuMiw3LjNjMS4zLDMsMy4yLDYsNS43LDguOWMyLjYsMyw1LjMsNS41LDguMyw3LjdsNC41LDMuMmM5LjQsNC4zLDE4LjYsMTIuMywyNy44LDI0LjJjOS4xLDExLjksMTUuOCwyMi44LDIwLjEsMzIuNWw2LjQsMTQuN2M1LjUsMTYuMiwxNC45LDI5LjIsMjguMSwzOS4yYzEzLjIsMTAsMjcuNCwxNi40LDQyLjcsMTkuMWMxNS4zLDIuOCwzMC4xLDQuMyw0NC4zLDQuNXMyNi4xLTAuNSwzNS40LTIuMmwxNC43LTIuNmMwLDE2LjIsMS4xLDM1LjEsMy4yLDU2LjhjMi4xLDIxLjcsMy4yLDMzLjIsMy4yLDM0LjVjMCw3LjctMi44LDE0LTguMywxOS4xYy01LjUsNS4xLTE0LDYuNi0yNS41LDQuNWMtOTguNy0zMi44LTE3OS4yLTkxLjgtMjQxLjUtMTc3LjFTMTAsNjE4LjcsMTAsNTEyYzAtODguOSwyMS45LTE3MC45LDY1LjctMjQ2QzExOS41LDE5MC45LDE3OSwxMzEuNSwyNTQsODcuN0MzMjkuMSw0My45LDQxMS4xLDIyLDUwMCwyMmM4OC45LDAsMTcwLjksMjEuOSwyNDYsNjUuN0M4MjEsMTMxLjUsODgwLjUsMTkwLjksOTI0LjMsMjY2YzQzLjgsNzUuMSw2NS43LDE1Ny4xLDY1LjcsMjQ2SDk4NC4zeiIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPjwvZz48L3N2Zz4gIA==" width="32" height="32">
                <img v-show="classObject.isUnfold" src="data:image/svg+xml;base64,CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwMCAxMDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPG1ldGFkYXRhPiDnn6Lph4/lm77moIfkuIvovb0gOiBodHRwOi8vd3d3LnNmb250LmNuLyA8L21ldGFkYXRhPjxnPjxnPjxwYXRoIGQ9Ik0xOTkuNiw0ODAuOGgtODIuN2MtMi4xLDAtMy45LDEuNy0zLjksMy45djQwLjRjMCwyLjEsMS43LDMuOSwzLjksMy45aDMyLjN2NTAuM2MwLDAtNy4zLDIuNC0yNy4zLDIuNGMtMjMuNiwwLTU2LjctOC43LTU2LjctODEuMmMwLTcyLjYsMzQuNC04Mi4yLDY2LjctODIuMmMyNy45LDAsNDAsNC45LDQ3LjYsNy4zYzIuNCwwLjgsNC42LTEuNyw0LjYtMy44bDkuMi0zOS4xYzAtMS0wLjQtMi4yLTEuNS0zYy0zLjEtMi4yLTIyLjEtMTIuOC03MC0xMi44QzY2LjYsMzY2LjksMTAsMzkwLjQsMTAsNTAzLjNjMCwxMTIuOSw2NC45LDEyOS44LDExOS41LDEyOS44YzQ1LjIsMCw3Mi43LTE5LjMsNzIuNy0xOS4zYzEuMS0wLjYsMS4yLTIuMiwxLjItMi45VjQ4NC43QzIwMy41LDQ4Mi42LDIwMS43LDQ4MC44LDE5OS42LDQ4MC44eiBNNjE4LDM3Ni42aC00Ni41Yy0yLjEsMC0zLjksMS43LTMuOSwzLjl2OTBINDk1di05MGMwLTIuMS0xLjctMy45LTMuOC0zLjloLTQ2LjZjLTIuMSwwLTMuOCwxLjctMy44LDMuOXYyNDMuN2MwLDIuMiwxLjcsMy45LDMuOCwzLjloNDYuNmMyLjEsMCwzLjgtMS43LDMuOC0zLjlWNTE5LjloNzIuNmwtMC4yLDEwNC4yYzAsMi4yLDEuNywzLjksMy44LDMuOWg0Ni42YzIuMSwwLDMuOC0xLjcsMy44LTMuOWwwLjItMjQzLjdDNjIxLjgsMzc4LjMsNjIwLjEsMzc2LjYsNjE4LDM3Ni42TDYxOCwzNzYuNnogTTI1NS4zLDM4Mi4xYy0xNi42LDAtMzAsMTMuNi0zMCwzMC4zYzAsMTYuOCwxMy41LDMwLjMsMzAsMzAuM2MxNi42LDAsMzAtMTMuNiwzMC0zMC4zQzI4NS4zLDM5NS43LDI3MS44LDM4Mi4xLDI1NS4zLDM4Mi4xeiBNMjgyLDQ2MC4zYzAtMi4xLTEuNy0zLjktMy44LTMuOWgtNDYuNGMtMi4yLDAtNCwyLjItNCw0LjNjMCwwLDAsMTM1LjQsMCwxNjEuMmMwLDQuNywyLjksNi4xLDYuOCw2LjFjMCwwLDE5LjgsMCw0MS44LDBjNC42LDAsNS44LTIuMiw1LjgtNi4yYzAtOC42LDAtNDIuNSwwLTQ5QzI4Miw1NjYuNSwyODIsNDYwLjMsMjgyLDQ2MC4zTDI4Miw0NjAuM3ogTTc5OC4zLDQ1Ni43aC00Ni4yYy0yLjEsMC0zLjgsMS43LTMuOCwzLjl2MTE5LjVjMCwwLTExLjcsOC42LTI4LjQsOC42Yy0xNi43LDAtMjEuMS03LjYtMjEuMS0yMy45YzAtMTYuMywwLTEwNC4yLDAtMTA0LjJjMC0yLjEtMS43LTMuOS0zLjgtMy45SDY0OGMtMi4xLDAtMy44LDEuNy0zLjgsMy45YzAsMCwwLDYzLjYsMCwxMTIuMWMwLDQ4LjUsMjcsNjAuMyw2NC4xLDYwLjNjMzAuNSwwLDU1LjEtMTYuOCw1NS4xLTE2LjhzMS4yLDguOCwxLjcsOS45YzAuNSwxLjEsMS45LDIuMSwzLjQsMi4xaDI5LjdjMi4xLDAsMy44LTEuNywzLjgtMy45bDAuMS0xNjMuN0M4MDIuMSw0NTguNSw4MDAuNCw0NTYuNyw3OTguMyw0NTYuN0w3OTguMyw0NTYuN3ogTTkyNC44LDQ1MS4yYy0yNi4zLDAtNDQuMSwxMS43LTQ0LjEsMTEuN3YtODIuNWMwLTIuMS0xLjctMy45LTMuOC0zLjloLTQ2LjdjLTIuMSwwLTMuOCwxLjctMy44LDMuOWwtMC4xLDI0My43YzAsMi4yLDEuNywzLjksMy45LDMuOWMwLDAsMzIuNSwwLDMyLjUsMGMxLjQsMCwyLjUtMC43LDMuNC0yYzAuOC0xLjMsMi0xMS4yLDItMTEuMnMxOS4xLDE4LjEsNTUuMiwxOC4xYzQyLjUsMCw2Ni44LTIxLjUsNjYuOC05Ni43Qzk5MCw0NjEuMSw5NTEuMSw0NTEuMiw5MjQuOCw0NTEuMkw5MjQuOCw0NTEuMnogTTkwNi42LDU4OC42Yy0xNi0wLjUtMjYuOS03LjgtMjYuOS03Ljh2LTc3LjJjMCwwLDEwLjctNi42LDIzLjktNy44YzE2LjctMS41LDMyLjcsMy41LDMyLjcsNDMuM0M5MzYuMyw1ODEsOTI5LjEsNTg5LjIsOTA2LjYsNTg4LjZ6IE00MTYuNSw1ODcuN2MtMiwwLTcuMywwLjgtMTIuNiwwLjhjLTE3LjEsMC0yMy04LTIzLTE4LjNjMC0xMC40LDAtNjguNiwwLTY4LjZoMzVjMi4xLDAsMy44LTEuNywzLjgtMy45di0zNy42YzAtMi4yLTEuNy0zLjktMy44LTMuOWgtMzVsMC00Ni4yYzAtMS43LTAuOS0yLjYtMi45LTIuNmgtNDcuNmMtMS44LDAtMi45LDAuOC0yLjksMi42djQ3LjdjMCwwLTIzLjksNS44LTI1LjUsNi4yYy0xLjYsMC41LTIuOCwyLTIuOCwzLjd2MzBjMCwyLjEsMS43LDMuOSwzLjgsMy45aDI0LjRjMCwwLDAsMzEuMywwLDcyLjFjMCw1My42LDM3LjYsNTguOCw2Mi45LDU4LjhjMTEuNiwwLDI1LjQtMy44LDI3LjctNC42YzEuNC0wLjUsMi4yLTEuOSwyLjItMy41bDAtMzNDNDIwLjQsNTg5LjQsNDE4LjYsNTg3LjcsNDE2LjUsNTg3Ljd6IiBzdHlsZT0iZmlsbDojRkZGRkZGIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4gIA==" width="32" height="32">
            </div>
        </div>
        <el-button
        :class="{ 'el-button-unfold': classObject.isUnfold }"
        :icon="iconStyle"
        circle
        @click="handleClick"></el-button>
        <div class=" el-menu-layout">
            <el-tooltip class="item" effect="dark" :content="!isFullScreen ? '全屏显示' : '退出全屏'" placement="bottom-start">
                <div class="el-menu-full-screen">
                    <i class="el-icon-rank" @click="fullScreenHandle"></i>
                </div>
            </el-tooltip>
            <el-dropdown @command="handleCommand" size="medium">
                <span class="el-dropdown-link el-dropdown-user">
                </span>
                <i class="el-icon-caret-bottom el-icon--right"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                    v-for="item of userMenu"
                    :key="item.id"
                    command="a"
                    >
                        <!-- <span @click="userMenuHandleClick">{{ item.text }}</span> -->
                        {{ item.text }}
                    </el-dropdown-item>
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
      isFullScreen: false,
      userMenu: [{
        'id': 1,
        'text': '个人中心'
      }, {
        'id': 2,
        'text': '退出登陆'
      }]
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
    },
    userMenuHandleClick () {
      console.log('aa')
    },
    handleCommand (command) {
      this.$message('click on item ' + command)
    },
    headerLogoHandle () {
      window.location.href = 'https://github.com/eugeneblog/smartIO/tree/master/vue-program'
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
        background: #409EFF;
        float: left;
        height: 60px;
    }
    .header-logo {
        background: #409EFF;
        float: left;
        height: 60px;
        cursor: pointer;
    }
    .header-logo-name {
        color: #ffffff!important;
        margin-left: 16px;
    }
    .logo-shrink {
        width: 65px;
    }
    .logo-shrink .header-logo{
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
    .header-logo > img {
        height: 60px;
        float: left;
        margin-left: 17px;
    }
    .header-logo > img:last-child {
        height: 60px;
        float: left;
        margin-left: 10px;
    }
    .header-logo-name {
        float: left;
    }
</style>
