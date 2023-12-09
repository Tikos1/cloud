<template>
    <div>
        <div class="dark:border-[#2d2f36] w-[100vw] px-[4vw] border-t-[1px] border-[#EBEDF2]">
            <div class="flex justify-between items-center h-[12vw]">
                <div class="flex items-center"><span
                        class="dark:text-[#e9ebf2] text-[#374d5b] text-[4vw] font-[800]">音乐日历</span> <svg
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                        role="img" width="1em" height="1em" viewBox="0 0 24 24"
                        class="dark:text-[#e9ebf2] text-[#3d475b] font-[800] w-[4vw] h-[4vw] iconify iconify--mingcute">
                        <g fill="none" fill-rule="evenodd">
                            <path
                                d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092">
                            </path>
                            <path fill="currentColor"
                                d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657">
                            </path>
                        </g>
                    </svg></div> <svg @click="showPopup" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="8" height="8"
                    viewBox="0 0 24 24" class="dark:text-[#e9ebf2] text-[#3d475b] w-[4vw] h-[6vw] iconify iconify--ri">
                    <path fill="currentColor"
                        d="M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3m0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18m0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5s1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5">
                    </path>
                </svg>
            </div>
            <van-popup v-model="show" round position="bottom" :style="{ height: '22%' }">
                <div class="dark:bg-[#272727] bg-[#fff] fixed z-[11]"
                    style="width: 100vw; left: 0px; bottom: 0px; border-top-left-radius: 15px; border-top-right-radius: 15px; display: block;">
                    <div>
                        <div
                            class="dark:border-b-[#3C3C3C] flex justify-between items-center h-[10vw] border-b-[0.35vw] border-b-[#E8e8e8] px-[5vw]">
                            <p class="text-[3vw] text-[#939BA1] font-[800]">音乐日历</p> <svg @click="show = false"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                                class="dark:text-[#C0C0C0] dark:bg-[#2F2F2F] text-[#696d73] w-[6vw] h-[6vw] rounded-[50%] bg-[#f2f2f3] iconify iconify--ic">
                                <path fill="currentColor"
                                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="ml-[5vw]">
                            <div class="h-[12vw] flex items-center"><svg xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em"
                                    height="1em" viewBox="0 0 24 24"
                                    class="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw] iconify iconify--iconamoon">
                                    <g fill="none">
                                        <path fill="currentColor"
                                            d="m15 10l-.74-.123a.75.75 0 0 0 .74.873zM4 10v-.75a.75.75 0 0 0-.75.75zm16.522 2.392l.735.147zM6 20.75h11.36v-1.5H6zm12.56-11.5H15v1.5h3.56zm-2.82.873l.806-4.835l-1.48-.247l-.806 4.836l1.48.246m-.92-6.873h-.214v1.5h.213v-1.5m-3.335 1.67L8.97 8.693l1.248.832l2.515-3.773l-1.248-.832M7.93 9.25H4v1.5h3.93zM3.25 10v8h1.5v-8zm16.807 8.54l1.2-6l-1.47-.295l-1.2 6l1.47.294M8.97 8.692a1.25 1.25 0 0 1-1.04.557v1.5c.92 0 1.778-.46 2.288-1.225L8.97 8.693m7.576-3.405A1.75 1.75 0 0 0 14.82 3.25v1.5a.25.25 0 0 1 .246.291zm2.014 5.462c.79 0 1.38.722 1.226 1.495l1.471.294A2.75 2.75 0 0 0 18.56 9.25zm-1.2 10a2.75 2.75 0 0 0 2.697-2.21l-1.47-.295a1.25 1.25 0 0 1-1.227 1.005v1.5m-2.754-17.5a3.75 3.75 0 0 0-3.12 1.67l1.247.832a2.25 2.25 0 0 1 1.873-1.002v-1.5M6 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 20.75z">
                                        </path>
                                        <path stroke="currentColor" stroke-width="1.5" d="M8 10v10"></path>
                                    </g>
                                </svg>
                                <p class="dark:text-[#fff] h-[3vw] text-[3vw] text-[#3a393f]">优先推荐</p>
                            </div>
                            <div class="h-[12vw] flex items-center"><svg xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em"
                                    height="1em" viewBox="0 0 24 24"
                                    class="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw] iconify iconify--basil">
                                    <path fill="currentColor"
                                        d="M16.22 5.599c.116-.116.052-.31-.11-.326a5.55 5.55 0 0 0-.51-.023c-1.434 0-2.695.672-3.6 1.542c-.905-.87-2.167-1.542-3.6-1.542c-2.78 0-5.15 2.08-5.15 4.78c0 1.85.789 3.476 1.882 4.852c.201.253.414.5.636.738a.295.295 0 0 0 .425.006l.637-.637a.305.305 0 0 0 .006-.422a11.263 11.263 0 0 1-.53-.619c-.96-1.208-1.556-2.515-1.556-3.918c0-1.75 1.57-3.28 3.65-3.28c1.194 0 2.31.713 3.005 1.619a.75.75 0 0 0 1.19 0c.556-.724 1.38-1.325 2.297-1.537a.428.428 0 0 0 .207-.112l1.122-1.121">
                                    </path>
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="m4.503 19.436l-.033.034a.75.75 0 1 0 1.06 1.06l2.718-2.717c.256.192.513.376.769.553c.521.362 1.05.695 1.533.941c.454.231.975.443 1.45.443s.996-.212 1.45-.443a13.9 13.9 0 0 0 1.534-.941c1.366-.947 2.793-2.112 3.884-3.484c1.093-1.376 1.882-3.002 1.882-4.852c0-1.296-.546-2.45-1.421-3.298L21.53 4.53a.75.75 0 0 0-1.033-1.086L4.53 19.41a.717.717 0 0 1-.027.026M18.268 7.793L9.32 16.74c.183.134.367.264.55.392c.496.343.962.634 1.36.838c.429.218.677.279.77.279c.093 0 .341-.061.77-.28a12.35 12.35 0 0 0 1.36-.837c1.307-.906 2.602-1.974 3.564-3.185c.96-1.208 1.556-2.515 1.556-3.918c0-.847-.367-1.642-.982-2.237Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <p class="dark:text-[#fff] h-[4vw] text-[3vw] text-[#3a393f]">减少推荐</p>
                            </div>
                            <div class="h-[12vw] flex items-center"><svg xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em"
                                    height="1em" viewBox="0 0 48 48"
                                    class="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw] iconify iconify--icon-park-outline">
                                    <g transform="rotate(90 24 24)">
                                        <g fill="none">
                                            <path stroke="currentColor" stroke-linejoin="round" stroke-width="4"
                                                d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z">
                                            </path>
                                            <circle cx="14" cy="24" r="3" fill="currentColor"></circle>
                                            <circle cx="24" cy="24" r="3" fill="currentColor"></circle>
                                            <circle cx="34" cy="24" r="3" fill="currentColor"></circle>
                                        </g>
                                    </g>
                                </svg>
                                <p class="dark:text-[#fff] h-[5vw] text-[3vw] text-[#3a393f]">更多内容</p>
                            </div>
                        </div>
                    </div>
                </div>
            </van-popup>

        </div>
        <div class="w-[91vw] pt-[1vw] ml-[2vw] overflow-hidden scroll-wrapper border-[#EBEDF2]">
            <div class="scroll-content flex w-[540vw] mb-[6.31vw]">
                <ul
                    class="dark:bg-[#25272e] w-[91vw] scroll-item shadows bg-[#fff] mr-[2vw] rounded-[10px] px-[4vw] pt-[4vw] pb-[3.8vw]">
                    <li class="flex mt-[3vw]" v-for="item in res" :key="item.id">
                        <div class="flex-1">
                            <p class="dark:text-[#ebeaf0] text-[2.72vw] text-[#AAADB5]">{{ timeMonth()
                            }}</p>
                            <div class="dark:text-[#a5a7ae] text-[3.68vw] text-[#3E4558]">{{ item.uiElement.mainTitle.title }}</div>
                        </div>
                        <div class="flex-4"><img :src="item.uiElement.image.imageUrl" alt="" class="w-[15vw] h-[15vw] rounded-[10px]"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { discover } from '@/service'
export default {
    name: 'WorkspaceJsonCloudCalendar',

    data() {
        return {
            res: [],
            show: false
        };
    },
    methods: {
        timestampToTime(timestamp) {
            var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
            var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ''
            return M + D;
        },
        timeMonth(){
            var date = new Date();
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
            var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ''
            return M + D;
        },
        showPopup() {
            this.show = true;
        }
    },
    async created() {
        const [err, res] = await discover()
        if (!err) {
            this.res = res.data.data.blocks[5].creatives;
        }
    }
};
</script>