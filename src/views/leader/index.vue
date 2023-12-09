<template>
    <div>
        <div class="buPmeF pb-[24vw] dark:bg-black">
            <div
                class="dark:bg-black dark:text-white flex items-center justify-center w-[100%] px-[4vw] py-[3vw] bg-[#fff] text-[#010101]  text-[4.2vw] font-[600]">
                MV排行榜
            </div>
            <van-tabs v-model="active" animated line-width="4vw">
                <van-tab title="内地">
                    <div class="overflow-auto px-[4vw] h-[76vh] mt-[3vw]">
                        <div class="w-[92vw]" v-for="item, index in outback" :key="item.id">
                            <router-link :to="{ path: 'video', query: { id: item.id } }">
                                <div class="w-[100%] h-[52vw] relative"><img :src="item.cover"
                                        class=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]">
                                    <div class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                                            class="iconify iconify--solar mr-[0.5vw] text-[2.6vw]"
                                            style="color: rgb(253, 255, 255);">
                                            <path fill="currentColor"
                                                d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z">
                                            </path>
                                        </svg>{{ item.playCount }}</div>
                                </div>
                                <div class="h-[15vw] flex items-center flex-wrap">
                                    <div class="flex h-[5vw] w-[100vw]"><span
                                            :class="index >= 3 ? 'text-[#999999]' : 'text-[red]'"
                                            class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[#999999] red">{{
                                                index + 1
                                            }}</span><span
                                            class="dark:text-white flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">{{
                                                item.name }}</span></div>
                                    <div class="flex h-[4vw] items-center">
                                        <div
                                            class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center">
                                            -</div>
                                        <div class=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]"><span>{{ item.artistName
                                        }}</span></div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="港台">
                    <div class="overflow-auto px-[4vw] h-[76vh] mt-[3vw]">
                        <div class="w-[92vw]" v-for="item, index in HongKong" :key="item.id">
                            <router-link :to="{ path: 'video', query: { id: item.id } }">
                                <div class="w-[100%] h-[52vw] relative"><img :src="item.cover"
                                        class=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]">
                                    <div class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                                            class="iconify iconify--solar mr-[0.5vw] text-[2.6vw]"
                                            style="color: rgb(253, 255, 255);">
                                            <path fill="currentColor"
                                                d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z">
                                            </path>
                                        </svg>{{ item.playCount }}</div>
                                </div>
                                <div class="h-[15vw] flex items-center flex-wrap">
                                    <div class="flex h-[5vw] w-[100vw]"><span
                                            :class="index >= 3 ? 'text-[#999999]' : 'text-[red]'"
                                            class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[#999999] red">{{
                                                index + 1
                                            }}</span><span
                                            class="dark:text-white flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">{{
                                                item.name }}</span></div>
                                    <div class="flex h-[4vw] items-center">
                                        <div
                                            class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center">
                                            -</div>
                                        <div class=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]"><span>{{ item.artistName
                                        }}</span></div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="欧美">
                    <div class="overflow-auto px-[4vw] h-[76vh] mt-[3vw]">
                        <div class="w-[92vw]" v-for="item, index in America" :key="item.id">
                            <router-link :to="{ path: 'video', query: { id: item.id } }">
                                <div class="w-[100%] h-[52vw] relative"><img :src="item.cover"
                                        class=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]">
                                    <div class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                                            class="iconify iconify--solar mr-[0.5vw] text-[2.6vw]"
                                            style="color: rgb(253, 255, 255);">
                                            <path fill="currentColor"
                                                d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z">
                                            </path>
                                        </svg>{{ item.playCount }}</div>
                                </div>
                                <div class="h-[15vw] flex items-center flex-wrap">
                                    <div class="flex h-[5vw] w-[100vw]"><span
                                            :class="index >= 3 ? 'text-[#999999]' : 'text-[red]'"
                                            class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[#999999] red">{{
                                                index + 1
                                            }}</span><span
                                            class="dark:text-white flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">{{
                                                item.name }}</span></div>
                                    <div class="flex h-[4vw] items-center">
                                        <div
                                            class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center">
                                            -</div>
                                        <div class=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]"><span>{{ item.artistName
                                        }}</span></div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="韩国">
                    <div class="overflow-auto px-[4vw] h-[76vh] mt-[3vw]">
                        <div class="w-[92vw]" v-for="item, index in Korea" :key="item.id">
                            <router-link :to="{ path: 'video', query: { id: item.id } }">
                                <div class="w-[100%] h-[52vw] relative"><img :src="item.cover"
                                        class=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]">
                                    <div class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                                            class="iconify iconify--solar mr-[0.5vw] text-[2.6vw]"
                                            style="color: rgb(253, 255, 255);">
                                            <path fill="currentColor"
                                                d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z">
                                            </path>
                                        </svg>{{ item.playCount }}</div>
                                </div>
                                <div class="h-[15vw] flex items-center flex-wrap">
                                    <div class="flex h-[5vw] w-[100vw]"><span
                                            :class="index >= 3 ? 'text-[#999999]' : 'text-[red]'"
                                            class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[#999999] red">{{
                                                index + 1
                                            }}</span><span
                                            class="dark:text-white flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">{{
                                                item.name }}</span></div>
                                    <div class="flex h-[4vw] items-center">
                                        <div
                                            class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center">
                                            -</div>
                                        <div class=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]"><span>{{ item.artistName
                                        }}</span></div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="日本">
                    <div class="overflow-auto px-[4vw] h-[76vh] mt-[3vw]">
                        <div class="w-[92vw]" v-for="item, index in Japan" :key="item.id">
                            <router-link :to="{ path: 'video', query: { id: item.id } }">
                                <div class="w-[100%] h-[52vw] relative"><img :src="item.cover"
                                        class=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]">
                                    <div class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                                            class="iconify iconify--solar mr-[0.5vw] text-[2.6vw]"
                                            style="color: rgb(253, 255, 255);">
                                            <path fill="currentColor"
                                                d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z">
                                            </path>
                                        </svg>{{ item.playCount }}</div>
                                </div>
                                <div class="h-[15vw] flex items-center flex-wrap">
                                    <div class="flex h-[5vw] w-[100vw]"><span
                                            :class="index >= 3 ? 'text-[#999999]' : 'text-[red]'"
                                            class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[#999999] red">{{
                                                index + 1
                                            }}</span><span
                                            class="dark:text-white flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">{{
                                                item.name }}</span></div>
                                    <div class="flex h-[4vw] items-center">
                                        <div
                                            class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center">
                                            -</div>
                                        <div class=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]"><span>{{ item.artistName
                                        }}</span></div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <CloudFooter></CloudFooter>
    </div>
</template>

<script>
import CloudFooter from '@/components/CloudFooter.vue';
import { mv } from '@/service'
export default {
    name: 'WorkspaceJsonIndex',

    data() {
        return {
            active: 0,
            outback: [],
            HongKong: [],
            America: [],
            Korea: [],
            Japan: [],
        };
    },
    components: { CloudFooter },
    async created() {
        {
            const [err, res] = await mv({ limit: 50, area: '内地' })
            if (!err) {
                this.outback = res.data.data
            }
        }
        {
            const [err, res] = await mv({ limit: 50, area: '港台' })
            if (!err) {
                this.HongKong = res.data.data
            }
        }
        {
            const [err, res] = await mv({ limit: 50, area: '欧美' })
            if (!err) {
                this.America = res.data.data
            }
        }
        {
            const [err, res] = await mv({ limit: 50, area: '韩国' })
            if (!err) {
                this.Korea = res.data.data
            }
        }
        {
            const [err, res] = await mv({ limit: 50, area: '日本' })
            if (!err) {
                this.Japan = res.data.data
            }
        }
    }
};
</script>

<style scoped>:deep(.van-tabs__line) {
    bottom: 21px !important;
}</style>