<template>
  <div :class="{dark:checked}">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'WorkspaceJsonApp',
  computed: {
    ...mapState(['checked'])
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(100%);
  opacity: 0;
}
</style>