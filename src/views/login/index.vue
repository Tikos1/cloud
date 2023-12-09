<template>
    <div>
        <div class="bg-[#FDFBFC] h-[100vh] pb-[12vw]">
            <div class="flex h-[19vw] items-center justify-between px-[5.5vw]">
                <router-link to="/home"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" width="0.44em" height="1em" viewBox="0 0 7 16"
                        class="text-[6vw] iconify iconify--formkit">
                        <path fill="currentColor"
                            d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0c.2.2.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z">
                        </path>
                    </svg></router-link>
                <div class="text-[4vw] text-[#696969]">游客登录</div>
            </div>

            <div class="van-tabbar-item__icon"
                style="display: flex;justify-content: center;margin-top: 10vw;margin-bottom: 15vw;"><svg
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                    role="img" width="6em" height="6em" viewBox="0 0 24 24" class="iconify iconify--ri"
                    style="color: #DD3F32;">
                    <path fill="currentColor"
                        d="M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m-1.086-10.432c.24-.84 1.075-1.541 1.99-1.648c.187.694.388 1.373.545 2.063c.053.23.037.495-.018.727c-.213.892-1.248 1.242-1.978.685c-.53-.405-.742-1.12-.539-1.827m3.817-.197c-.125-.465-.256-.927-.393-1.42c.5.13.907.36 1.255.697c1.257 1.222 1.385 3.3.294 4.732c-1.135 1.49-3.155 2.134-5.028 1.605c-2.302-.65-3.808-2.952-3.441-5.316c.274-1.768 1.27-3.004 2.9-3.733c.407-.182.58-.56.42-.93c-.157-.364-.54-.504-.944-.343c-2.721 1.088-4.32 4.134-3.67 6.987c.713 3.118 3.495 5.163 6.675 4.859c1.732-.166 3.164-.948 4.216-2.347c1.506-2.002 1.297-4.783-.463-6.499c-.666-.65-1.471-1.018-2.39-1.153c-.083-.013-.217-.052-.232-.106c-.087-.313-.18-.632-.206-.954c-.029-.357.29-.64.65-.645c.253-.003.434.13.603.3c.303.3.704.322.988.062c.29-.264.296-.678.018-1.008c-.566-.672-1.586-.891-2.43-.523c-.847.37-1.321 1.187-1.2 2.093c.038.28.11.557.167.842l-.26.072a3.863 3.863 0 0 0-2.098 1.414c-.921 1.22-.936 2.828-.041 3.947c1.274 1.594 3.747 1.284 4.523-.568c.284-.677.275-1.368.087-2.065">
                    </path>
                </svg><!----></div>

            <div style="text-align: center;">
                <!-- <van-field label-width="3.2em" @click="showPopup" v-model="phone" type="tel"
                    style="border-radius: 10px;margin: 0 auto;" class="w-[70vw] bg-[#F2F3F4]" clearable label="+86"
                    placeholder="请输入手机号" /> -->
                <div class="h-[10vw] m-[5vw] flex justify-center items-center">
                    <div class="w-[80vw] h-[13vw] relative rounded-lg pl-[4vw] bg-[#f3f3f4] flex items-center">
                        <div class=" h-[10vw] mr-[5vw] text-xl flex items-center" @click="showPopup">
                            +86
                        </div>
                        <div class="san"></div>
                        <div class="h-[5vw] w-[0.05vw] ml-[2vw] bg-[#E6E7E9]"></div>
                        <input type="tel" v-model="phone"
                            class="bg-[#f3f3f4] ml-[6vw] w-[45vw] h-[5vw] text-xl flex items-center" />
                        <svg v-if="this.phone.length != 0" @click="clear()" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" t="1701401645585" class="icon"
                            viewBox="0 0 1024 1024" version="1.1" p-id="12017" width="20" height="20">
                            <path
                                d="M512 0c282.7648 0 512 229.2352 512 512s-229.2352 512-512 512S0 794.7648 0 512 229.2352 0 512 0z m-1.4848 450.978133L341.162667 281.6256a34.133333 34.133333 0 0 0-48.273067 0l-11.264 11.264a34.133333 34.133333 0 0 0 0 48.273067l169.352533 169.352533-169.352533 169.352533a34.133333 34.133333 0 0 0 0 48.273067l11.264 11.264a34.133333 34.133333 0 0 0 48.273067 0l169.352533-169.3568 169.352533 169.3568a34.133333 34.133333 0 0 0 48.273067 0l11.264-11.264a34.133333 34.133333 0 0 0 0-48.273067l-169.3568-169.352533 169.3568-169.352533a34.133333 34.133333 0 0 0 0-48.273067l-11.264-11.264a34.133333 34.133333 0 0 0-48.273067 0l-169.352533 169.352533z"
                                fill="#909090" p-id="12018" />
                        </svg>
                    </div>
                </div>

                <van-button round color="#EA4D44" @click="sendCode" class="w-[80vw]"
                    style="margin-top: 20px;">获取验证码</van-button>
                <p><van-checkbox checked-color="#767C88" style="justify-content: center;margin-top: 5vw;" v-model="checked"
                        icon-size="16px"><span style="color: #C4C6CB;font-size: 13px;">我已阅读并同意<a href="#"
                                style="color: #6B8AB3;">《服务条款》</a>、<a href="#"
                                style="color: #6B8AB3;">《隐私政策》</a></span></van-checkbox></p>
            </div>
            <van-popup v-model="show" position="bottom" round closeable close-icon-position="top-left"
                :style="{ height: '90%' }">
                <p style="text-align: center;font-size: 17px;margin-top: 4vw;">选择国家和地区</p>
                <div style="margin-top: 5vw;">
                    <van-index-bar  v-for="(item, index) in  res " :index-list="list" :key="index">
                        <van-index-anchor :index="item.label" />
                        <van-cell v-for="(items, index) in  item.countryList " :key="index" :title="items.zh">
                            +{{ items.code }}
                        </van-cell>
                    </van-index-bar>
                </div>
            </van-popup>
            <div class="fixed bottom-0"><img src="../../assets/bg-login.png" alt="" class="w-[100vw]"></div>
        </div>
    </div>
</template>

<script>

import axios from "axios";
import { district } from '@/service'
export default {
    data() {
        return {
            phone: "",
            captcha: "",
            value2: '',
            checked: false,
            show: false,
            res: [],
            list: []
        };
    },
    async created() {
        const [err, res] = await district({})
        if (!err) {
            this.res = res.data.data
        }
    },
    methods: {
        showPopup() {
            this.show = true;
        },
        clear() {
            this.phone = ""
        },
        async sendCode() {
            if ((!/^1[356789]\d{9}$/.test(this.phone)))
                return console.log("手机号错误");
            if (this.checked == false)
                return console.log("请勾选同意服务条款和隐私政策");
            await axios
                .post("/captcha/sent", {
                    phone: this.phone,
                })
                .catch((err) => {
                    console.log(err);
                });
            this.$router.push({ path: '/verify', query: { phone: this.phone } })
        }
    },
};
</script>

<style scoped>
.san {
    width: 0;
    height: 0;
    border: 1.5vw solid transparent;
    border-top-color: black;
    position: absolute;
    left: 14vw;
    top: 6vw;
}
</style>