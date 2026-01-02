<script setup lang="ts">
import { queryAllRecordApi } from '@/api/accountRecordApi.ts'
import { onMounted, ref } from 'vue'

const tableData = ref([])
const queryAllRecord = async () => {
  const result = await queryAllRecordApi()
  tableData.value = result.data.data
}
onMounted(() => {
  queryAllRecord()
})
</script>

<template>
  <button @click="queryAllRecord">查询所有记录</button>
  <el-table :data="tableData" height="250" style="width: 100%">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="typeName" label="类型" width="180" />
    <el-table-column prop="amount" label="金额" width="180" />
    <el-table-column prop="createTime" label="创建时间" width="180" />
    <el-table-column prop="updateTime" label="更新时间" width="180" />
  </el-table>
</template>

<style scoped></style>
