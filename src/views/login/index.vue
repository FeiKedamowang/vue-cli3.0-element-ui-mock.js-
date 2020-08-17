<template>
  <div class="login"></div>
</template>

<script>
import loginApi from "../../api/axios/axios";
export default {
  name: "login",
  data() {
    return {};
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      
      loginApi.mockdata("/user/login").then(res=>{

      })
    },
  },
};
</script>


<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
}
</style>