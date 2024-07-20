<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="楼宇名称">
        <el-col :span="11">
          <el-input v-model="form.name"/>
        </el-col>
      </el-form-item>
      <el-form-item label="所属校区">
        <el-select v-model="form.campus" placeholder="please select building campus">
          <el-option label="beijing campus" value="beijing"/>
          <el-option label="weihai campus" value="weihai"/>
        </el-select>
      </el-form-item>
      <el-form-item label="房产证号">
        <el-col :span="11">
          <el-input v-model="form.propertyCertNo"/>
        </el-col>
      </el-form-item>
      <el-form-item label="房间数量">
        <el-col :span="11">
          <el-input v-model="form.roomCount"/>
        </el-col>
      </el-form-item>
      <el-form-item label="楼宇面积">
        <el-col :span="11">
          <el-input v-model="form.buildingArea"/>
        </el-col>
      </el-form-item>
      <el-form-item label="使用面积">
        <el-col :span="11">
          <el-input v-model="form.usableArea"/>
        </el-col>
      </el-form-item>
      <el-form-item label="地上楼层数">
        <el-col :span="11">
          <el-input v-model="form.floorsAboveGround"/>
        </el-col>
      </el-form-item>
      <el-form-item label="地下楼层数">
        <el-col :span="11">
          <el-input v-model="form.floorsBelowGround"/>
        </el-col>
      </el-form-item>
      <el-form-item label="所在位置">
        <el-col :span="11">
          <el-input v-model="form.location"/>
        </el-col>
      </el-form-item>
      <el-form-item label="楼宇年份">
        <el-col :span="11">
          <el-input v-model="form.buildYear"/>
        </el-col>
      </el-form-item>
      <el-form-item label="登记时间">
        <el-col :span="11">
          <el-input v-model="form.registerTime"/>
<!--          <el-date-picker v-model="form.registerTime" type="date" placeholder="please select a date"/>-->
        </el-col>
      </el-form-item>
      <el-form-item label="所属部门">
        <el-col :span="11">
          <el-input v-model="form.department"/>
        </el-col>
      </el-form-item>
      <el-form-item label="用途">
        <el-col :span="11">
          <el-input v-model="form.purpose"/>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {insert} from '@/api/form'

export default {
  data() {
    return {
      form: {
        name: '',
        campus: '',
        propertyCertNo: '',
        roomCount: '',
        buildingArea: '',
        usableArea: '',
        floorsAboveGround: '',
        floorsBelowGround: '',
        location: '',
        buildYear: '',
        registerTime: '',
        department: '',
        purpose: '',
      }
    }
  },
  methods: {
    onSubmit() {
      insert(this.form)
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

