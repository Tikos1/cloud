<template>
    <div>
        <div class="bg-[#F4F4F4] dark:bg-[#1a1c23] h-[100vh] overflow-auto pb-[12vw]">
            <div class="pb-[5vw]">
                <div class="w-[91vw] h-[20vw] mx-auto flex justify-between items-center">
                    <router-link to="/home">
                        <svg
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                        role="img" width="8vw" height="8vw" viewBox="0 0 256 256"
                        class="text-[#000] dark:text-[#e9e9e9] iconify iconify--ph">
                        <path fill="currentColor"
                            d="M222 128a6 6 0 0 1-6 6H54.49l61.75 61.76a6 6 0 1 1-8.48 8.48l-72-72a6 6 0 0 1 0-8.48l72-72a6 6 0 0 1 8.48 8.48L54.49 122H216a6 6 0 0 1 6 6Z">
                        </path>
                    </svg>
                    </router-link>
                    
                    <div class="relative"><label for=""><input placeholder="孙露" type="text"
                                class="dark:border-2 dark:border-[#31333a] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[3vw] pl-[11vw] bg-white opacity-0.2 text-[#9b9b9b] w-[72vw] h-[10vw] border-2 border-[#fff] rounded-[25px]"></label>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="4.3vw" height="4.3vw" viewBox="0 0 24 24"
                            class="absolute left-[3.68vw] top-[3vw] text-[#000] dark:text-[#e9e9e9] iconify iconify--tabler"
                            style="color: rgb(111, 119, 143);">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"></path>
                        </svg> 
                    </div>
                    <div class="font-semibold text-[3.7vw] dark:text-[#e9e9e9] text-[#283349]">搜索</div>
                </div>
                <div>
                    <div class="flex justify-around mt-[3vw]">
                        <div
                            class="dark:border-[#2e2c35] flex w-[25vw] justify-center items-center border-[#E3E5EA] border-r-[0.4vw]">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" width="5vw" height="5vw" viewBox="0 0 24 24"
                                class="iconify iconify--octicon" style="color: red;">
                                <path fill="currentColor"
                                    d="M12 2.5a5.25 5.25 0 0 0-2.519 9.857a9.005 9.005 0 0 0-6.477 8.37a.75.75 0 0 0 .727.773H20.27a.75.75 0 0 0 .727-.772a9.005 9.005 0 0 0-6.477-8.37A5.25 5.25 0 0 0 12 2.5Z">
                                </path>
                            </svg>
                            <p class="ml-[2vw] text-[#000] dark:text-[#e9e9e9] font-[800] text-[3.4vw]">歌手</p>
                        </div>
                        <div
                            class="dark:border-[#2e2c35] flex w-[25vw] justify-center items-center border-[#E3E5EA] border-r-[0.4vw]">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" width="5vw" height="5vw" viewBox="0 0 36 36"
                                class="iconify iconify--clarity" style="color: red;">
                                <path fill="currentColor" d="M10 5.2h18v1.55H10z" class="clr-i-solid clr-i-solid-path-1">
                                </path>
                                <path fill="currentColor"
                                    d="M29 8H9.86A1.89 1.89 0 0 1 8 6a2 2 0 0 1 1.86-2H29a1 1 0 1 0 0-2H9.86A4 4 0 0 0 6 6a4.14 4.14 0 0 0 0 .49a1 1 0 0 0 0 .24V30a4 4 0 0 0 3.86 4H29a1 1 0 0 0 1-1V9.07A1.07 1.07 0 0 0 29 8Z"
                                    class="clr-i-solid clr-i-solid-path-2"></path>
                                <path fill="none" d="M0 0h36v36H0z"></path>
                            </svg>
                            <p class="ml-[2vw] text-[#000] dark:text-[#e9e9e9] font-[800] text-[3.4vw]">曲风</p>
                        </div>
                        <div
                            class="dark:border-[#2e2c35] flex w-[25vw] justify-center items-center border-[#E3E5EA] border-r-[0.4vw]">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" width="5vw" height="5vw" viewBox="0 0 32 32"
                                class="iconify iconify--fluent-emoji-high-contrast" style="color: red;">
                                <g fill="currentColor">
                                    <path
                                        d="m14.36 3.004l-6.14.8c-.32.04-.56.32-.56.64v7.62c-.57-.2-1.2-.28-1.86-.21c-2.05.22-3.67 1.92-3.8 3.98a4.268 4.268 0 0 0 4.27 4.55c2.36 0 4.28-1.91 4.28-4.28c0-.09 0-.18-.01-.27v-7.83c0-.28.21-.52.49-.56l3.46-.45a.53.53 0 0 0 .46-.53v-2.93a.52.52 0 0 0-.59-.53Zm15.04 2.37l-6.14.8c-.32.04-.56.31-.56.63v10.01c-.57-.2-1.2-.28-1.86-.21c-2.05.22-3.67 1.92-3.8 3.98a4.268 4.268 0 0 0 4.27 4.55c2.36 0 4.28-1.91 4.28-4.28c0-.09 0-.18-.01-.27v-10.21c0-.28.21-.52.49-.56l3.46-.45c.27-.04.47-.26.47-.53v-2.94c0-.32-.28-.56-.6-.52Z">
                                    </path>
                                    <path
                                        d="m13.09 10.654l6.14-.8c.32-.05.6.2.6.52v2.93c0 .27-.2.5-.46.53l-3.46.45a.57.57 0 0 0-.49.56v10.22c.01.09.01.18.01.27c0 2.37-1.92 4.28-4.28 4.28c-2.46 0-4.43-2.06-4.27-4.55c.12-2.06 1.74-3.75 3.79-3.97c.66-.07 1.29.01 1.86.21v-10.01c0-.33.24-.6.56-.64Z">
                                    </path>
                                </g>
                            </svg>
                            <p class="ml-[2vw] text-[#000] dark:text-[#e9e9e9] font-[800] text-[3.4vw]">专区</p>
                        </div>
                        <div class="dark:border-[#2e2c35] flex w-[25vw] justify-center items-center border-[#E3E5EA]"><svg
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" width="5vw" height="5vw" viewBox="0 0 256 256"
                                class="iconify iconify--ph" style="color: red;">
                                <path fill="currentColor"
                                    d="M80 128V64a48 48 0 0 1 96 0v64a48 48 0 0 1-96 0Zm128 0a8 8 0 0 0-16 0a64 64 0 0 1-128 0a8 8 0 0 0-16 0a80.11 80.11 0 0 0 72 79.6V232a8 8 0 0 0 16 0v-24.4a80.11 80.11 0 0 0 72-79.6Z">
                                </path>
                            </svg>
                            <p class="ml-[2vw] text-[#000] dark:text-[#e9e9e9] font-[800] text-[3.4vw]">识曲</p>
                        </div>
                    </div>
                    <div class="mt-[5vw]">
                        <div class="flex justify-between px-[3vw]">
                            <h1 class="font-semibold text-[4vw] text-[#283349] dark:text-[#e9e9e9]">猜你喜欢</h1> <svg
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" width="5vw" height="5vw" viewBox="0 0 24 24"
                                class="iconify iconify--ic" style="color: rgb(172, 175, 174);">
                                <path fill="currentColor"
                                    d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z">
                                </path>
                            </svg>
                        </div>
                        <div class="flex px-[3vw] flex-wrap">
                            <div
                                class="p-[2vw] mr-[2vw] text-[3.5vw] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[#535c6a] mt-[3vw] bg-[#fff] px-[3vw] rounded-[20px]">
                                句号</div>
                            <div
                                class="p-[2vw] mr-[2vw] text-[3.5vw] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[#535c6a] mt-[3vw] bg-[#fff] px-[3vw] rounded-[20px]">
                                冬天的秘密</div>
                            <div
                                class="p-[2vw] mr-[2vw] text-[3.5vw] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[#535c6a] mt-[3vw] bg-[#fff] px-[3vw] rounded-[20px]">
                                初雪</div>
                            <div
                                class="p-[2vw] mr-[2vw] text-[3.5vw] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[#535c6a] mt-[3vw] bg-[#fff] px-[3vw] rounded-[20px]">
                                爱丫爱丫</div>
                            <div
                                class="p-[2vw] mr-[2vw] text-[3.5vw] dark:bg-[#31333a] dark:text-[#e9e9e9] text-[#535c6a] mt-[3vw] bg-[#fff] px-[3vw] rounded-[20px]">
                                我想念</div>
                        </div>
                    </div>
                    <div class="w-[100vw] overflow-hidden mt-[5vw]">
                        <van-swipe class="my-swipe" indicator-color="white" :width="300" :loop="false"
                            :show-indicators="false">
                            <van-swipe-item>
                                <div
                                    class="dark:border-b-[#43454c] ml-[2vw] w-[72vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea]">
                                    <span
                                        class="text-[4vw] text-[#2a344b] dark:text-[#fff] mr-[3.359vw] ml-[4vw]">飙升榜</span>
                                    <div
                                        class="h-[5.235vw] bg-[#f3f4f1] dark:bg-[#393b42] flex items-center px-[2vw] rounded-[3vw]">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                                            class="text-[#323c52] dark:text-[#fff] mr-[0.7vw] text-[2.6vw] iconify iconify--solar">
                                            <path fill="currentColor"
                                                d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z">
                                            </path>
                                        </svg> <span class="text-[2.6vw] text-[#323c52] dark:text-[#fff]">播放</span></div>
                                </div>
                                <div class="pr-[2vw]">
                                    <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                            class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                            style="color: red;">1</span> <span
                                            class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">爱丫爱丫
                                            (live)</span></div>
                                    <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                            class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                            style="color: red;">2</span> <span
                                            class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">初雪</span>
                                    </div>
                                    <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                            class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                            style="color: red;">3</span> <span
                                            class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">冬天的秘密</span>
                                    </div>
                                    <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                            class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                            style="color: rgb(133, 131, 147);">4</span> <span
                                            class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">Nothin'
                                            on Me</span></div>
                                    <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                            class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                            style="color: rgb(133, 131, 147);">5</span> <span
                                            class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">十二月的奇迹</span>
                                    </div>
                                    <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                            class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                            style="color: rgb(133, 131, 147);">6</span> <span
                                            class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">one
                                            more time</span></div>
                                    <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                            class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                        style="color: rgb(133, 131, 147);">7</span> <span
                                        class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">Where
                                        Did U Go</span></div>
                                <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                        class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                        style="color: rgb(133, 131, 147);">8</span> <span
                                        class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">幕后生活</span>
                                </div>
                                <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                        class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                        style="color: rgb(133, 131, 147);">9</span> <span
                                        class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">Goodbye
                                        My Baby</span></div>
                                <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                        class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                        style="color: rgb(133, 131, 147);">10</span> <span
                                        class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">有的人</span>
                                </div>
                                <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                        class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                        style="color: rgb(133, 131, 147);">11</span> <span
                                        class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">夜郎溪</span>
                                </div>
                                <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                        class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                        style="color: rgb(133, 131, 147);">12</span> <span
                                        class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">绽放Bloom</span>
                                </div>
                                <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                        class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                        style="color: rgb(133, 131, 147);">13</span> <span
                                        class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">认真的雪</span>
                                </div>
                                <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                        class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                        style="color: rgb(133, 131, 147);">14</span> <span
                                        class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">老人与海
                                        (live)</span></div>
                                <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                        class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                        style="color: rgb(133, 131, 147);">15</span> <span
                                        class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">风与花Wind
                                        &amp; Flowers</span></div>
                                <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                        class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                        style="color: rgb(133, 131, 147);">16</span> <span
                                        class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">黄昏晓</span>
                                </div>
                                <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                        class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                        style="color: rgb(133, 131, 147);">17</span> <span
                                        class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">岁月
                                        (live)</span></div>
                                <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                        class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                        style="color: rgb(133, 131, 147);">18</span> <span
                                        class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">I
                                        watch the moon (Slowed + Reverb)</span></div>
                                <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                        class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                        style="color: rgb(133, 131, 147);">19</span> <span
                                        class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">蓓蕾Bud</span>
                                </div>
                                <div class="my-[2.7vw] flex items-center h-[8vw]"><span
                                        class="text-[3.2vw] w-[8.83vw] text-center text-[#858393] font-[400]"
                                        style="color: rgb(133, 131, 147);">20</span> <span
                                        class="dark:text-[#fff] text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">天后</span>
                                </div>
                            </div>
                        </van-swipe-item>
                        <van-swipe-item>2</van-swipe-item>
                        <van-swipe-item>3</van-swipe-item>
                        <van-swipe-item>4</van-swipe-item>
                        <van-swipe-item>1</van-swipe-item>
                        <van-swipe-item>2</van-swipe-item>
                        <van-swipe-item>3</van-swipe-item>
                        <van-swipe-item>4</van-swipe-item>
                        <van-swipe-item>3</van-swipe-item>
                        <van-swipe-item>3</van-swipe-item>
                    </van-swipe>
                </div>
            </div>
        </div>
    </div>
</div></template>

<script>
export default {
    name: 'WorkspaceJsonCloudSearch',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped>.my-swipe .van-swipe-item {
    background-color: white;
    margin-left: 2.344vw;
    border-radius: 2vw;
}</style>