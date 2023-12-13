<template>
    <div>
        <div class="pb-[12vw]">
            <div class="transition-all duration-20 0 relative bg-gradient-to-br from-[#486D8D] to-[#6186AB] pb-[5vw] "
                style="background: rgb(90, 67, 157);">
                <van-sticky>
                    <div style="background: rgb(90, 67, 157);">
                        <nav class="a2  h-[13.5vw] flex items-center justify-between pl-[3.9vw] pr-[3.4vw]">
                            <div class="flex items-center">
                                <router-link to="/home">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 256 256"
                                        class="text-[7vw] text-[#fff] iconify iconify--ph">
                                        <path fill="currentColor"
                                            d="M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8Z">
                                        </path>
                                    </svg>
                                </router-link>

                                <div class="w-[42vw] h-[13.5vw] flex items-center overflow-hidden relative"
                                    style="flex-wrap: wrap;">
                                    <!---->
                                    <div style="line-height: 13.5vw;" ref="title_one"
                                        class="text-[4.2vw] w-[27vw] h-[13.5vw] text-[#fff] ml-[4.7vw] relative">歌单</div>
                                    <div style="line-height: 13.5vw;" ref="title_tow"
                                        class="text-[4.2vw] w-[27vw] h-[13.5vw] text-[#fff] ml-[4.7vw] relative">
                                        <van-notice-bar style="margin-top: 2vw;font-size: 4.2vw;padding: 0;" delay="3"
                                            color="white" background="rgb(90, 67, 157)" scrollable :text="resTitle" />
                                    </div>
                                </div> <!---->
                            </div>
                            <div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em"
                                    height="1em" viewBox="0 0 24 24"
                                    class="text-[7vw] text-[#fff] mr-[5vw] iconify iconify--grommet-icons">
                                    <path fill="none" stroke="currentColor" stroke-width="2"
                                        d="M13.8 13.8L18 18zM10.5 15a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Z"></path>
                                </svg> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                                    class="text-[7vw] text-[#fff] iconify iconify--ri">
                                    <path fill="currentColor"
                                        d="M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3m0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18m0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5s1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5">
                                    </path>
                                </svg></div>
                        </nav>
                    </div>

                </van-sticky>

                <div class="transition-all fade-in pl-[3.9vw] pr-[3.4vw]" ref="box1">
                    <section class="h-[29vw] flex pt-[2.6vw] justify-between">
                        <div class="w-[24vw] h-[25vw] pt-[1vw] relative"><img alt=""
                                class="w-[24vw] h-[24vw] rounded-[10px] relative z-[2]" :src="coverImgUrl">
                            <div
                                class="w-[20vw] h-[10vw] bg-opacity-20 bg-[#fff] absolute top-0 left-1/2 -translate-x-1/2 rounded-[6px] z-[1]">
                            </div>
                            <div
                                class="absolute top-0 left-0 pr-[1.4vw] pt-[2vw] justify-end font-[800] text-[#fff] flex items-center w-[24vw] z-[2] transform scale-80">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true" role="img" width="10" height="10" viewBox="0 0 512 512"
                                    class="text-[#fff] w-[3vw] h-[3vw] iconify iconify--ion">
                                    <path fill="currentColor"
                                        d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440">
                                    </path>
                                </svg> <span class="font-[800] text-[1.5vw]">106万</span>
                            </div>
                        </div>
                        <div class="w-[67vw] pr-[12vw]">
                            <p class="text-[#fff] text-[3.6vw] leading-[4.9vw] font-[800]">
                                {{ resTitle }}</p>
                            <div class="h-[10.5vw] flex items-center"><img alt="" class="w-[6vw] h-[6vw] rounded-[50%]"
                                    :src="avatarUrl"> <span
                                    class="text-[2.73vw] ml-[2vw] mr-[1.5vw] text-[#fff] opacity-50">
                                    {{ nickname }}</span> <span
                                    class="px-[2vw] py-[1.25vw] rounded-[50px] text-[2.2vw] text-[#fff] opacity-50 bg-opacity-20 bg-[#fff] flex items-center pr-[3.5vw]"><svg
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                                        class="text-[4vw] text-[#fff] iconify iconify--material-symbols">
                                        <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"></path>
                                    </svg>关注
                                </span></div>
                            <div class="flex">
                                <div v-for="item, index in tags" :key="index"
                                    class="flex items-center justify-center pl-[2.5vw] pr-[1.5vw] py-[0.7vw] bg-opacity-20 bg-[#fff] text-[#fff] rounded-[4px] mr-[1.4vw]">
                                    <span class="text-[2.2vw]">{{ item }}</span> <svg xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em"
                                        height="1em" viewBox="0 0 1024 1024"
                                        class="text-[3vw] ml-[0.6vw] iconify iconify--ep" style="color: white;">
                                        <g transform="rotate(90 512 512)">
                                            <path fill="currentColor"
                                                d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </section>
                    <p class="h-[4vw] flex items-center w-[90vw] overflow-hidden mt-[3.8vw] justify-between"><span
                            class="text-[#fff] opacity-50 text-[2.8vw] whitespace-nowrap w-[83vw] overflow-hidden">{{
                                description }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 1024 1024"
                            class="text-[3vw] iconify iconify--ep" style="color: rgb(216, 228, 245);">
                            <g transform="rotate(90 512 512)">
                                <path fill="currentColor"
                                    d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z">
                                </path>
                            </g>
                        </svg>
                    </p>
                </div>
                <div class="fade-in pl-[3.9vw] pr-[3.4vw]" style="display: none;" ref="box2">
                    <div class="h-[10vw] flex items-center text-[#fff] opacity-50 text-[3vw]">
                        喜欢这个歌单的用户也听了</div>
                    <div class="w-[95vw] scroll-wrapper overflow-hidden" ref="scroll">
                        <div class="flex w-[160vw]">

                            <div class="w-[28vw] mr-[2.5vw]" v-for="item, index in resTo" :key="index">
                                <router-link :to="{ path: 'paly', query: { id: item.creativeId } }">
                                    <div class="w-[28vw] h-[28vw] rounded-[8px] overflow-hidden relative pt-[1vw]"><img
                                            :src="item.uiElement.image.imageUrl" alt=""
                                            class="w-[28vw] h-[28vw] rounded-[8px] relative z-[1]">
                                        <div
                                            class="dark:bg-[#272727] w-[26vw] h-[28vw] bg-opacity-20 bg-[#fff] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]">
                                        </div>
                                    </div>
                                    <p class="dark:text-[#e3e5ec] text-[2.78vw] text-[#fff] mt-[2vw] scroll-item">{{
                                        item.uiElement.mainTitle.title }}
                                    </p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div @click="flag()"
                    class="absolute right-[3.4vw] top-[15vw] w-[6vw] h-[6vw] rounded-[50%] bg-opacity-20 bg-[#fff] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                        role="img" width="1em" height="1em" viewBox="0 0 1024 1024"
                        class="text-[3vw] mt-[0.5vw] iconify iconify--ep" ref="icon"
                        style="color: white; transform: rotate(0deg);">
                        <g transform="rotate(180 512 512)">
                            <path fill="currentColor"
                                d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z">
                            </path>
                        </g>
                    </svg>
                </div>
                <div class="flex items-center mt-[3.5vw] pl-[3.9vw] pr-[3.4vw]">
                    <div
                        class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="text-[5vw] mr-[1.8vw] iconify iconify--majesticons" style="color: white;">
                            <path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="m20 12l-6.4-7v3.5C10.4 8.5 4 10.6 4 19c0-1.167 1.92-3.5 9.6-3.5V19z">
                            </path>
                        </svg> {{ commentCount }}
                    </div>
                    <div
                        class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 mx-[3vw] text-[#f8fefe] text-[3vw]">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 1024 1024"
                            class="text-[5vw] mr-[1.8vw] iconify iconify--ant-design" style="color: white;">
                            <path fill="currentColor"
                                d="M924.3 338.4a447.57 447.57 0 0 0-96.1-143.3a443.09 443.09 0 0 0-143-96.3A443.91 443.91 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.08 444.08 0 0 0-141.7 96.5a445 445 0 0 0-95 142.8A449.89 449.89 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.72 447.72 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142c23.5-55.2 35.5-113.9 35.8-174.5c.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.4 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.5 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.5 48-47.9 48z">
                            </path>
                        </svg> {{ shareCount }}
                    </div>
                    <div
                        class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-[#ff2658] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                            class="text-[5vw] mr-[1.8vw] iconify iconify--mdi" style="color: white;">
                            <path fill="currentColor"
                                d="m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-3.1 0-5.6 2.3-6 5.3zM17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z">
                            </path>
                        </svg>{{ subscribedCount }}
                    </div>
                </div>
            </div>
            <div class="bg-[#fff] w-[100vw] rounded-[15px] relative z-[1] mt-[-2.5vw] ">
                <van-sticky :offset-top="50">
                    <div style="background-color: white;">
                        <nav class="a1 h-[13vw] flex items-center justify-between px-[3.8vw]">
                            <div class="flex items-center"><svg @click="playAll" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em"
                                    height="1em" viewBox="0 0 20 20"
                                    class="text-[#ED3E20] text-[8vw] iconify iconify--heroicons-solid">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2Z"
                                        clip-rule="evenodd"></path>
                                </svg> <span class="text-[#25272C] text-[3.7vw] ml-[3.9vw] mr-[2.3vw]">播放全部</span> <span
                                    class="text-[#8C9094] text-[2.7vw]">({{ this.res.length }})</span></div>
                            <div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em"
                                    height="1em" viewBox="0 0 36 36"
                                    class="text-[5vw] text-[#2C3034] iconify iconify--clarity">
                                    <path fill="currentColor" d="M31 31H5a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2"
                                        class="clr-i-outline clr-i-outline-path-1"></path>
                                    <path fill="currentColor"
                                        d="m18 29.48l10.61-10.61a1 1 0 0 0-1.41-1.41L19 25.65V5a1 1 0 0 0-2 0v20.65l-8.19-8.19a1 1 0 1 0-1.41 1.41Z"
                                        class="clr-i-outline clr-i-outline-path-2"></path>
                                    <path fill="none" d="M0 0h36v36H0z"></path>
                                </svg> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                                    class="text-[6vw] text-[#2C3034] ml-[5vw] mt-[1vw] iconify iconify--solar">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M2 5.75A.75.75 0 0 1 2.75 5h18a.75.75 0 0 1 0 1.5h-18A.75.75 0 0 1 2 5.75m0 4A.75.75 0 0 1 2.75 9h18a.75.75 0 0 1 0 1.5h-18A.75.75 0 0 1 2 9.75m18.211 2.909a.75.75 0 0 1 .13 1.052l-3.9 5a.75.75 0 0 1-1.165.021l-2.1-2.5a.75.75 0 1 1 1.148-.964l1.504 1.79l3.33-4.27a.75.75 0 0 1 1.053-.13M2 13.75a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75"
                                        clip-rule="evenodd"></path>
                                </svg></div>
                        </nav>
                    </div>

                </van-sticky>

                <div class="px-[3.8vw]">
                    <router-link to="/details">
                        <div class="flex items-center h-[14vw]" v-for="item, index in res" :key="index"
                            @click="addID(item.id,index)">
                            <div class="w-[4vw] text-[#bfbfbf] text-[3vw] text-center mr-[3.52vw] font-medium">{{ index + 1
                            }}
                            </div>
                            <div class="font-medium text-[3.6vw] w-[64vw]">
                                <div
                                    class="text-[3.6vw] text-ellipsis overflow-hidden whitespace-nowrap w-[50vw] text-[#949797]">
                                    <span class="text-ellipsis text-[#000]">{{ item.name }}</span> <!---->
                                </div>
                                <div
                                    class="w-[64vw] text-ellipsis overflow-hidden whitespace-nowrap text-[#808080] text-[2.8vw] flex items-center">
                                    <!----> <!----> <span>{{ item.ar[0].name }}</span>
                                </div>
                            </div> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 48 48"
                                class="ml-[4.6vw] text-[6vw] text-[#B3B3B3] mt-[-2vw] iconify iconify--arcticons">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    d="M24 5.5C39 5.5 42.5 9 42.5 24S39 42.5 24 42.5S5.5 39 5.5 24S9 5.5 24 5.5"></path>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.77 24c0-10.376-.264-10.224 8.723-5.036c8.986 5.189 8.986 4.884 0 10.072c-8.987 5.188-8.723 5.34-8.723-5.036v0Z">
                                </path>
                            </svg> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                                class="ml-[4.6vw] text-[5vw] text-[#B3B3B3] mt-[-2vw] iconify iconify--ri">
                                <path fill="currentColor"
                                    d="M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3m0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18m0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5s1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5">
                                </path>
                            </svg>
                        </div>
                    </router-link>

                </div>
            </div>
        </div>
        <PlaySong></PlaySong>
    </div>
</template>

<script>
import PlaySong from '@/components/PlaySong.vue';
import axios from 'axios';
import BScroll from '@better-scroll/core';
import { discover } from '@/service'
export default {
    name: 'WorkspaceJsonCloudPlaylist',
    components: { PlaySong },
    data() {
        return {
            res: [],
            resTitle: '',
            description: '',
            coverImgUrl: '',
            tags: [],
            commentCount: '',
            shareCount: '',
            subscribedCount: '',
            avatarUrl: '',
            nickname: '',
            num: 0,
            resTo: [],
        };
    },
    async created() {
        axios
            .post(`/playlist/detail?timestamp=${Date.now()}`, {
                id: this.$route.query.id,
            })
            .then((data) => {
                this.tags = data.data.playlist.tags
                this.description = data.data.playlist.description
                this.coverImgUrl = data.data.playlist.coverImgUrl
                this.resTitle = data.data.playlist.name
                this.res = data.data.playlist.tracks;
                this.commentCount = data.data.playlist.commentCount;
                this.shareCount = data.data.playlist.shareCount;
                this.subscribedCount = data.data.playlist.subscribedCount;
                this.avatarUrl = data.data.playlist.creator.avatarUrl;
                this.nickname = data.data.playlist.creator.nickname
            });

        {
            const [err, res] = await discover({})
            if (!err) {
                this.resTo = res.data.data.blocks[2].creatives.slice(1)
            }
        }
        {
            this.$store.commit('dataOne', this.$route.query.id)
        }
    },
    mounted() {
        this.init()
        window.addEventListener('scroll', this.handleScroll, true);
    },
    destroyed() { //离开这个界面之后，删除滚动事件
        window.removeEventListener('scroll', this.handleScroll, true)
    },
    methods: {
        handleScroll() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop >= 2) {
                this.$refs.title_one.classList.remove('active2');
                this.$refs.title_tow.classList.remove('active2');
                this.$refs.title_one.classList.add('active');
                this.$refs.title_tow.classList.add('active');
            } else {
                this.$refs.title_one.classList.remove('active');
                this.$refs.title_tow.classList.remove('active');
                this.$refs.title_one.classList.add('active2');
                this.$refs.title_tow.classList.add('active2');
            }
        },
        flag() {
            this.num++
            if (this.num % 2 == 0) {
                this.$refs.box1.style.display = 'block';
                this.$refs.box2.style.display = 'none';
                this.$refs.icon.style.transform = 'rotate(0deg)';
            } else {
                this.$refs.box1.style.display = 'none';
                this.$refs.box2.style.display = 'block';
                this.$refs.icon.style.transform = 'rotate(180deg)';
            }
            this.init()
        },
        init() {
            this.scroll = new BScroll(this.$refs.scroll, {
                scrollX: true,
                scrollY: false,
                click: true,
            })
        },
        addID(id,index) {
            this.player.flag++;
            this.$store.commit('dataTwo',id)
            this.$store.commit('SingList',this.res[index])
            this.player.index = index;
            this.player.replaceTracks(this.res.map(({id})=>id))
        },
        playAll(){
            this.player.flag++;
            this.player.replaceTracks(this.res.map(({id})=>id));
        }
    },
};
</script>

<style scoped>
.active {
    transform: translateY(-100%);
    transition: 1s;
}

.bottom-0 {
    bottom: 0px;
}

.active2 {
    transform: translateY(0%);
    transition: 1s;
}</style>