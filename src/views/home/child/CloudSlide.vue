<template>
    <SlidingAssembly>
        <div class="flex w-[232vw] mx-auto overflow-hidden h-[20vw] scroll-content relative">
            <div v-for="item,index in res" :key="index" class="w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]">
                <img :src="item.uiElement.image.imageUrl" alt="" class="red-image">
                <p class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">{{ item.uiElement.mainTitle.title }}</p>
            </div>
            <span class="dark:text-[#1a1c23] absolute text-center top-[-1vw] w-[15vw] h-[19vw] leading-[19vw] items-center text-[3.5vw] text-[#fff] font-[800]"
                style="pointer-events: auto;">{{ TimeDay() }}</span>
        </div>
    </SlidingAssembly>
</template>

<script>

import { discover } from '@/service'
import SlidingAssembly from '@/components/SlidingAssembly.vue'
export default {
    name: 'WorkspaceJsonCloudSlide',
    data() {
        return {
            res:[]
        };
    },
    components:{
        SlidingAssembly
    },
    methods:{
        TimeDay(){
            // 获取日期
            var date = new Date();
            var day = date.getDate()
            return day
        }
    },
    async created() {
        const [err,res] = await discover({})
        if(!err){

            this.res = res.data.data.blocks[1].creatives[0].resources;
        }
    }
};
</script>

<style scoped>
.red-image {
    filter: url(data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type=%27matrix%27 values=%271 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/></filter></svg>#colorize);
}
</style>