<template>
  <el-card :class="['box-card', backgroundColor]">
    <div class="clearfix">
      <span
        ><b>{{ app.name }}</b></span
      >

      <el-button
        style="float: right; padding: 3px 0; color: white"
        type="text"
        @click="openUrl"
        >Open Url</el-button
      >
    </div>
    <div style="margin-top: 30px">
      <el-button round size="mini" @click="openLogs">Logs</el-button>
      <el-button round size="mini" :disabled="status === 'up'">Start</el-button>
      <el-button round size="mini" :disabled="status === 'down'"
        >Stop</el-button
      >
    </div>
  </el-card>
</template>
<script>
import axios from "axios";
export default {
  props: ["app"],
  data() {
    return {
      status: "down",
      loading: false,
    };
  },
  computed: {
    backgroundColor() {
      if (this.loading) {
        return "warning";
      }
      if (this.status === "up") {
        return "success";
      }
      return "danger";
    },
  },
  mounted() {
    this.getHealthCheck();
    this.interval = setInterval(() => {
      this.getHealthCheck();
    }, 10000);
  },
  beforeDestroy() {
    if (this.interval) {
      window.clearInterval(this.interval);
    }
  },
  methods: {
    openUrl() {
      window.open(this.app.url, "_blank");
    },
    openLogs(){
      window.open(this.app.logs)
    },
    getHealthCheck() {
      this.loading = true;
      window
        .fetch(this.app.url)
        .then(({ data }) => {
          this.status = "up";
        })
        .catch((error) => {
          this.status = "down";
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
<style scoped>
.box-card {
  margin-bottom: 10px;
}
.box-card.warning {
  background-color: #E6A23C;
}
.box-card.danger {
  background-color: #F56C6C;
}
.box-card.success {
  background-color: #67C23A;
}
</style>