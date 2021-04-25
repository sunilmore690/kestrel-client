<template>
  <el-row :gutter="12">
    <el-col :span="6" v-for="env in environments" :key="env.name">
      <el-card shadow="always" style="margin-bottom: 10px; font-weight: bolder">
        {{ env.name }}
      </el-card>
      <app-status v-for="app in env.apps" :key="app.name" :app="app" />
    </el-col>
  </el-row>
</template>
<script>
import { environments } from "../config";
import AppStatus from "./AppStatus";
export default {
  data() {
    return {
      environments,
    };
  },
  components: {
    AppStatus,
  },
};
</script>