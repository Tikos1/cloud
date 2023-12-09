<template>
    <div>
        <div class="bg-[#FDFBFC] h-[100vh] pb-[12vw]">
            <div class="flex h-[19vw] items-center justify-between px-[5.5vw]">
                <router-link to="/login"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" width="0.44em" height="1em" viewBox="0 0 7 16"
                        class="text-[6vw] iconify iconify--formkit">
                        <path fill="currentColor"
                            d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0c.2.2.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z">
                        </path>
                    </svg></router-link>
                <div class="text-[4vw] text-[#696969]">游客登录</div>
            </div>

            <div>
                <p style="font-size: 28px;margin-left: 7vw;margin-top: 10vw;">输入验证码</p>
                <p style="margin-top: 1vw;margin-left: 7vw;">验证码已发送至 +86{{ this.$route.query.phone }}</p>
                <van-password-input :mask="false" :value="captcha" :gutter="10" :length="4" :focused="showKeyboard"
                    @focus="showKeyboard = true" style="margin-top: 5vw;" />
                <div class="myDiv">
                    <span style="color: #9A9A9A;margin-left: 6vw;">重新获取</span>
                    <span style="color: #505050;margin-right: 3vw;">手机号已停用？</span>
                </div>
                <van-number-keyboard v-model="captcha" :show="showKeyboard" @blur="showKeyboard = false" />
            </div>
            <div class="fixed bottom-0"><img src="../../assets/bg-login.png" alt="" class="w-[100vw]"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            captcha: "",
            checked: false,
            errorInfo: '',
            showKeyboard: true,
        };
    },
    watch: {
        captcha(newVal) {
            if (newVal.length == 4) {
                this.login()
            }
        }
    },
    methods: {
        login() {
            if (!/^\d{4}$/.test(this.captcha)) return alert("验证吗不合法");
            this.$store.dispatch("requestLoginCellphone", {
                phone: Number(this.$route.query.phone),
                captcha: Number(this.captcha),
            })
            this.$router.push({ path: '/home' })

        },
    },
};
</script>

<style scoped>
.myDiv {
    margin-top: 4vw;
    display: flex;
    justify-content: space-between;
}

.van-password-input__security li {
    border-bottom: 1px solid;
    background-color: #FDFBFC !important;
}
</style>