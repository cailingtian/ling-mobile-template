<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <div @click="toDetail">测试详情1</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    toDetail () {
      this.$router.push({
        path: '/test/testDetail2',
        isBack: true
      })
    }
  }
}
</script>

<style scoped lang="less">

</style>
