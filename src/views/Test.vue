<template>
  <div>
    <transition :name="transitionName">
      <router-view class="Router" v-if="!$route.meta.keepAlive"></router-view>
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view class="Router" ></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      transitionName: 'slide-right' // 默认切换路由无效果
    }
  },
  watch: {
    $route (to, from) {
      // 切换动画
      const isBack = this.$router.isBack // 监听路由变化时的状态为前进还是后退
      console.log(this.$router)
      if (isBack) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
      this.$router.isBack = false
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.Router {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all .377s ease;
    will-change: transform;
    top: 0;
    backface-visibility: hidden;
    perspective: 1000;
  }
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate3d(100%, 0 ,0);
}
</style>
