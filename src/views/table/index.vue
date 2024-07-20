<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fitslot
      highlight-current-row
    >
      <el-table-column align="center" label="楼宇编号" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="楼宇名称">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="所属校区" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.campus }}</span>
        </template>
      </el-table-column>
      Ï
      <el-table-column label="房产证号" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.propertyCertNo }}
        </template>
      </el-table-column>
      <el-table-column label="房间数量" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.roomCount }}
        </template>
      </el-table-column>
      <el-table-column label="楼宇面积" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.buildingArea }}
        </template>
      </el-table-column>
      <el-table-column label="使用面积" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.usableArea }}
        </template>
      </el-table-column>
      <el-table-column label="地上楼层数" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.floorsAboveGround }}
        </template>
      </el-table-column>
      <el-table-column label="地下楼层数" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.floorsBelowGround }}
        </template>
      </el-table-column>
      <el-table-column label="所在位置" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.location }}
        </template>
      </el-table-column>
      <el-table-column label="楼宇年份" width="110" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.buildYear }}</span>
        </template>
      </el-table-column>
      <el-table-column label="登记时间" width="110" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.registerTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="所属部门" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.department }}
        </template>
      </el-table-column>
      <el-table-column label="用途" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.purpose }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getList} from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        console.log(response)
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
