<template>
    <div class="navMenu">
      <template v-for="navMenu in navMenus">
        <el-menu-item
        v-if="navMenu.childs==null&&navMenu.entity&&navMenu.entity.state==='ENABLE'"
        :key="navMenu.entity.id"
        :data="navMenu"
        :index="navMenu.entity.name"
        :route="navMenu.entity.value"
        >
          <i :class="navMenu.entity.icon"></i>
          <!--标题-->
          <span slot="title">{{navMenu.entity.alias}}</span>
        </el-menu-item>
        <!--有多级菜单-->
        <el-submenu
        v-if="navMenu.childs&&navMenu.entity&&navMenu.entity.state==='ENABLE'"
        :key="navMenu.entity.id"
        :data="navMenu"
        :index="navMenu.entity.name">
          <template slot="title">
            <i :class="navMenu.entity.icon"></i>
            <span> {{navMenu.entity.alias}}</span>
          </template>
          <!--递归组件，把遍历的值传回子组件，完成递归调用-->
          <nav-menu :navMenus="navMenu.childs"></nav-menu>
        </el-submenu>
      </template>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: ['navMenus']
}
</script>

<style lang="scss">
.el-menu--collapse .el-submenu .el-submenu__title span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
}
.el-menu--collapse .el-submenu .el-submenu__title .el-submenu__icon-arrow {
    display: none;
}
</style>
