<template>
    <div class="w-[92vw] mx-auto overflow-hidden scroll-wrapper" ref="scroll">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
    name: 'WorkspaceJsonCloudSlide',
    mounted() {
        this.init()
    },
    beforeDestroy() {
        this.scroll.destroy()
    },
    methods: {
        init() {
            this.scroll = new BScroll(this.$refs.scroll, {
                scrollX: true,
                scrollY: false,
                click: true,
            })
        }
    },
};
</script>

<style scoped>

</style>