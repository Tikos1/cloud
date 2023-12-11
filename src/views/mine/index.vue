<template>
    <div>
        <div class="pb-[24vw]">
            <div class="w-[100vw] h-[74vw] relative">
                <div class="w-[100vw] h-[15vw] px-[4.5vw] flex items-center justify-between fixed top-0 z-[10]"><svg
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                        role="img" width="1em" height="1em" viewBox="0 0 256 256"
                        class="iconify iconify--ph text-[7vw] text-[#fff]">
                        <path fill="currentColor"
                            d="M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8Z">
                        </path>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                        class="iconify iconify--ri dark:text-[#e9ebf2] text-[#fff] font-[800] text-[7vw]">
                        <path fill="currentColor"
                            d="M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3m0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18m0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5s1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5">
                        </path>
                    </svg></div>
                <van-image :src="backgroundUrl" class="w-[100vw] h-[74vw]"></van-image>
            </div>
            <div class="dark:bg-[#151515] bg-[#f1f1f1] px-[4vw] pb-[10vw]">
                <div
                    class="dark:from-[#2D2C2C] dark:to-[#161616] bg-gradient-to-b from-[#f1f1f1] mt-[-4vw] rounded-[15px] bg-[#fff] w-[92vw] relative pt-[11vw] text-center pb-[3.8vw]">
                    <van-image :src="avatarUrl" round
                        class="w-[18vw] h-[18vw] rounded-[50%] absolute top-[-9vw] left-1/2 translate-x-[-50%]"></van-image>
                    <p class="dark:text-[#DADADA] text-[5vw] text-[#253346] font-[800]">{{ nickname }}</p>
                    <div class="wt-[3vw] text-[3vw] text-[#9396A2] mt-[2vw]"><span class="px-[2vw]"><span>{{ this.follows }}</span>
                            关注</span><span class="px-[2vw]"><span>{{ this.followeds }}</span> 粉丝</span><span
                            class="px-[2vw]">Lv.<span>{{ this.level }}</span></span></div>
                    <div></div>
                </div>
                <div class="dark:bg-[#2C2C2C] w-[100%] bg-[#fff] rounded-[15px] pt-[2vw] mb-[3.7vw] mt-[8vw]">
                    <ul class="px-[4vw] pb-[4vw] flex flex-wrap justify-between">
                        <div v-for="item,index in res" :key="index" class="w-[19vw] scroll-item flex items-center justify-center flex-wrap"
                            style="pointer-events: auto;"><img
                                :src="item.uiElement.image.imageUrl" alt=""
                                class="red-image w-[15vw] h-[15vw]">
                            <p class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">{{ item.uiElement.mainTitle.title }}
                            </p>
                        </div>
                    </ul>
                    <div class="h-[12vw]" style="border-top: 1px solid #F7F7F7;">
                        <p class="mt-[2.7vw]" style="text-align: center;color: #C9CBD0;"><van-badge dot class="w-[23vw]"> +
                                音乐应用 </van-badge></p>
                    </div>
                </div>

                <div class="dark:bg-[#2C2C2C] w-[100%] bg-[#fff] rounded-[15px] pt-[5vw] mb-[3.7vw]">
                    <ul class="px-[4vw] pb-[4vw]">
                        <li class="flex mb-[1.5vw]">
                            <div class="relative pt-[0.6vw] mr-[2.6vw]">
                            <van-image :src="bg" round class="w-[12vw] h-[12vw] rounded-[10px] z-[2] relative"></van-image>
                                <div
                                    class="dark:bg-[#434343] w-[9vw] h-[4vw] bg-[#ddd] bg-opacity-50 absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[6px] z-[1]">
                                </div>
                            </div>
                            <div class="flex flex-wrap items-center flex-1 py-[1vw]">
                                <p class="dark:text-[#E6E6E6] w-[100%] text-[3.8vw] text-[#3f4659] line-clamp-1">
                                    我喜欢的音乐</p>
                                <p class="dark:text-[#B7B7B7] w-[100%] mt-[1vw] text-[2.8vw] text-[#aaadb5] line-clamp-1">
                                    {{like}}首</p>
                            </div>
                            <van-button round class="mt-[2.6vw]" type="info" icon="like-o" size="small"
                                color="#F9F9FA"><span style="color: #626877;">心动模式</span></van-button>
                        </li>
                    </ul>
                </div>


                <div>
                    <nav class="flex justify-evenly h-[15vw] items-center font-semibold relative w-[80vw] mx-auto">
                        <div class="dark:text-[#f1f1f1] text-[#2a3146] text-[3.3vw]">创建歌单</div>
                        <div class="dark:text-[#8B8B8B] text-[#9095a1] text-[3.3vw]">收藏歌单</div>
                        <div class="dark:text-[#8B8B8B] text-[#9095a1] text-[3.3vw]">歌单助手</div>
                        <div class="absolute bg-[#eb474e] w-[3.3vw] h-[1vw] rounded-[20vw] bottom-[2vw] left-[16.4vw]">
                        </div>
                    </nav>
                    <div>
                        <div class="dark:bg-[#2C2C2C] w-[100%] bg-[#fff] rounded-[15px] pt-[5vw] mb-[3.7vw]">
                            <p class="dark:text-[#ECECEC] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]">
                                创建歌单<span
                                    class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]">({{this.founds.length}}个)</span>
                            </p>
                            <ul class="px-[4vw] pb-[4vw]">
                                <li class="flex mb-[1.5vw]" v-for="item,index in founds" :key="index">
                                    <div class="relative pt-[0.6vw] mr-[2.6vw]"><img
                                            :src="item.coverImgUrl"
                                            class="w-[12vw] h-[12vw] rounded-[10px] bg-black z-[2] relative">
                                        <div
                                            class="dark:bg-[#434343] w-[9vw] h-[4vw] bg-[#ddd] bg-opacity-50 absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[6px] z-[1]">
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap items-center flex-1 py-[1vw]">
                                        <p class="dark:text-[#E6E6E6] w-[100%] text-[3.8vw] text-[#3f4659] line-clamp-1">
                                            {{ item.name }}</p>
                                        <p class="dark:text-[#B7B7B7] w-[100%] text-[2.8vw] text-[#aaadb5] line-clamp-1">
                                            {{item.trackCount}}首，播放{{item.playCount}}次</p>
                                    </div>
                                </li>
                            </ul>
                            <div></div>
                        </div>
                        <div class="dark:bg-[#2C2C2C] w-[100%] bg-[#fff] rounded-[15px] pt-[5vw] mb-[3.7vw]">
                            <p class="dark:text-[#ECECEC] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]">
                                收藏歌单<span
                                    class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]">({{this.foundsTo.length}}个)</span>
                            </p>
                            <ul class="px-[4vw] pb-[4vw]">
                                <li class="flex mb-[1.5vw]" v-for="item,index in foundsTo" :key="index">
                                    <div class="relative pt-[0.6vw] mr-[2.6vw]"><img
                                            :src="item.coverImgUrl"
                                            class="w-[12vw] h-[12vw] rounded-[10px] bg-black z-[2] relative">
                                        <div
                                            class="dark:bg-[#434343] w-[9vw] h-[4vw] bg-[#ddd] bg-opacity-50 absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[6px] z-[1]">
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap items-center flex-1 py-[1vw]">
                                        <p class="dark:text-[#E6E6E6] w-[100%] text-[3.8vw] text-[#3f4659] line-clamp-1">
                                            {{ item.name }}</p>
                                        <p class="dark:text-[#B7B7B7] w-[100%] text-[2.8vw] text-[#aaadb5] line-clamp-1">
                                            {{item.trackCount}}首，播放{{item.playCount}}次</p>
                                    </div>
                                </li>
                            </ul>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PlaySong></PlaySong>
        <CloudFooter></CloudFooter>
    </div>
</template>

<script>
import PlaySong from '@/components/PlaySong.vue';
import CloudFooter from '@/components/CloudFooter.vue';
import { my,found,discover,details } from '@/service';
export default {
    name: 'WorkspaceJsonIndex',
    data() {
        return {
            nickname: '',
            avatarUrl: '',
            backgroundUrl: '',
            like:'',
            bg:'',
            founds:[],
            foundsTo:[],
            res:[],
            level:'',
            followeds:'',
            follows:''
        }
    },
    components: { CloudFooter,PlaySong },
    async created() {
        {
            const [err, res] = await my()
            if (!err) {
                this.nickname = res.data.profile.nickname
                this.avatarUrl = res.data.profile.avatarUrl
                this.backgroundUrl = res.data.profile.backgroundUrl
            }
        }
        {
            const [err, res] = await found({ uid: this.$store.state.auth.account.id })
            if (!err) {
                this.like = res.data.playlist[0].trackCount;
                this.bg = res.data.playlist[0].coverImgUrl;
                this.founds = res.data.playlist.slice(1,4);
                this.foundsTo = res.data.playlist.slice(4);
            }
        }
        {
            const [err,res] = await discover({})
            if(!err){
                this.res = res.data.data.blocks[1].creatives[0].resources.slice(1,9);
            }
        }
        {
            const [err,res] = await details({ uid: this.$store.state.auth.account.id })
            if(!err){
                this.level = res.data.level;
                this.followeds = res.data.profile.followeds;
                this.follows = res.data.profile.follows;
            }
        }

    }
};
</script>

<style scoped>
.van-button {
    border: 1px solid #EEEEF0 !important;
}

.van-icon {
    color: #626877;
}

.red-image {
    filter: url(data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type=%27matrix%27 values=%271 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/></filter></svg>#colorize);
}</style>