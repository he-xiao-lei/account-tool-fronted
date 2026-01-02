<script lang="ts" setup></script>

<template>
  <el-container class="layout-container-demo" style="height: 100vh; width: 100vw">
    <!--  侧边栏  -->
    <el-aside overflow-hidden="overflow-hidden">
      <el-scrollbar>
        <el-menu>
          <el-menu router>
            <el-menu-item index="/index">
              <el-icon><House /></el-icon> 主页
            </el-menu-item>
            <el-menu-item index="/accountRecord">
              <el-icon><View /></el-icon>收支记录
            </el-menu-item>
          </el-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>管理员</span>
        </div>
      </el-header>

      <el-main> <router-view /></el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
