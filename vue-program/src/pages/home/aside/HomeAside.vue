<template>
    <div>
        <el-menu
        default-active="0"
        class="el-menu-vertical-demo"
        @select="menuSelected"
        :collapse = "isCollapse"
        >
          <nav-menu :navMenus="menuData"></nav-menu>
        </el-menu>
    </div>
</template>

<script>
import NavMenu from './NavMenu'

export default {
  props: {
    isCollapse: Boolean,
    navList: Object
  },
  data () {
    return {
      menuData: {}
    }
  },
  name: 'HomeAside',
  components: {
    NavMenu
  },
  created () {
    console.log(this.menuData)
  },
  methods: {
    menuSelected (key, keyPath) {
      console.log(key, keyPath)
    },
    getAsideInfo () {
      axios.get('static/mock/homeAside.json').then(this.getAsideSuc)
    },
    getAsideSuc (res) {
      const data = res.data
      this.menuData = data.list
    }
  },
  mounted () {
    this.getAsideInfo()
  }
}
</script>

<style lang="scss" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
</style>
