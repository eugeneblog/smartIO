<template>
    <div>
        <el-button 
        :class="{ 'el-button-unfold': classObject.isUnfold }" 
        :icon="iconStyle" 
        circle 
        @click="handleClick"></el-button>
        <el-menu
        :default-active="activeIndex"
        class="el-menu-demo el-menu-layout"
        mode="horizontal"
        @select="handleSelect"
        >
            <el-menu-item
            v-if="!item.children"
            v-for="item in items"
            :index="String(item.id)"
            :key="item.index">
                {{item.text}}
            </el-menu-item>
            <el-dropdown
            v-if="item.children"
            v-for="item in items"
            :key="item.index">
                <span class="el-dropdown-link">
                    {{item.text}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                    v-for="childrenItem in item.children"
                    :key="childrenItem.id">{{ childrenItem.text }}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      items: [
        { id: 1, text: '处理中心', href: 'home.msg' },
        { id: 2, text: '个人中心', href: 'home.user' },
        { id: 3, text: '下拉菜单', href: 'null', children: [
          { id: 1, text: 'a1', href: 'aa' },
          { id: 2, text: 'a2', href: 'aa' },
          { id: 3, text: 'a3', href: 'aa' },
          { id: 4, text: 'a4', href: 'aa' }
        ]}
      ],
      classObject: {
        isUnfold: true
      },
      iconStyle: 'el-icon-caret-left',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      var _this = this
      console.log(_this.$route.path)
      console.log(key, keyPath)
    },
    handleClick () {
      this.classObject.isUnfold = !this.classObject.isUnfold
      this.$emit('btnChange',this.classObject.isUnfold)
      if(!this.classObject.isUnfold){
        this.iconStyle = "el-icon-caret-right"
      }else{
        this.iconStyle = "el-icon-caret-left"
      }
    }
  },
  mounted () {
      var _this = this
  }
}
</script>

<style lang="scss" scoped>
    .el-button {
        position: absolute;
        left: 66px;
        top: 20px;
    }
    .el-button-unfold{
        left: 202px;
    }
    .el-menu-layout {
        float: right;
    }
    .el-menu-layout > .el-menu-item , .el-menu-layout > .el-dropdown {
        margin: 0 10px;
    }
    .el-menu-layout > .el-dropdown {
        padding: 0 20px;
    }
</style>
