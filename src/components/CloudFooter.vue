<template>
    <div class="bg-[#fff] dark:bg-black fixed z-[3] bottom-0 van-hairline--top-bottom van-tabbar van-tabbar--fixed">
        <div class="van-tabbar-item van-tabbar-item--active">
            <router-link to="/home">
                <div class="van-tabbar-item__icon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                    role="img" width="1em" height="1em" viewBox="0 0 24 24" class="iconify iconify--ri">
                    <path fill="currentColor"
                        d="M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m-1.086-10.432c.24-.84 1.075-1.541 1.99-1.648c.187.694.388 1.373.545 2.063c.053.23.037.495-.018.727c-.213.892-1.248 1.242-1.978.685c-.53-.405-.742-1.12-.539-1.827m3.817-.197c-.125-.465-.256-.927-.393-1.42c.5.13.907.36 1.255.697c1.257 1.222 1.385 3.3.294 4.732c-1.135 1.49-3.155 2.134-5.028 1.605c-2.302-.65-3.808-2.952-3.441-5.316c.274-1.768 1.27-3.004 2.9-3.733c.407-.182.58-.56.42-.93c-.157-.364-.54-.504-.944-.343c-2.721 1.088-4.32 4.134-3.67 6.987c.713 3.118 3.495 5.163 6.675 4.859c1.732-.166 3.164-.948 4.216-2.347c1.506-2.002 1.297-4.783-.463-6.499c-.666-.65-1.471-1.018-2.39-1.153c-.083-.013-.217-.052-.232-.106c-.087-.313-.18-.632-.206-.954c-.029-.357.29-.64.65-.645c.253-.003.434.13.603.3c.303.3.704.322.988.062c.29-.264.296-.678.018-1.008c-.566-.672-1.586-.891-2.43-.523c-.847.37-1.321 1.187-1.2 2.093c.038.28.11.557.167.842l-.26.072a3.863 3.863 0 0 0-2.098 1.414c-.921 1.22-.936 2.828-.041 3.947c1.274 1.594 3.747 1.284 4.523-.568c.284-.677.275-1.368.087-2.065">
                    </path>
                </svg>
            </div>
            <div class="van-tabbar-item__text">首页</div>
            </router-link>
        </div>
        <div class="van-tabbar-item">
            <router-link to="/leader">
            <div class="van-tabbar-item__icon"><svg xmlns="http://www.w3.org/2000/svg" style="margin-left: 1.8vw;"
                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em"
                    viewBox="0 0 512 512" class="iconify iconify--ion">
                    <path fill="currentColor" d="M160 32h192v448H160zm224 160h112v288H384zM16 128h112v352H16z"></path>
                </svg><!----></div>
            <div class="van-tabbar-item__text">排行榜</div>
            </router-link>
        </div>
        <div class="van-tabbar-item">
            <router-link to="/mine">
                <div class="van-tabbar-item__icon"><svg xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em"
                    viewBox="0 0 24 24" class="iconify iconify--mingcute">
                    <g fill="none">
                        <path
                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092">
                        </path>
                        <path fill="currentColor"
                            d="M21 5.18V17a4 4 0 1 1-2-3.465V9.181L9 10.847V18c0 .06-.005.117-.015.174A3.5 3.5 0 1 1 7 15.337v-8.49a2 2 0 0 1 1.671-1.973l10-1.666A2 2 0 0 1 21 5.18M5.5 17a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M17 15a2 2 0 1 0 0 4a2 2 0 0 0 0-4m2-9.82L9 6.847V8.82l10-1.667z">
                        </path>
                    </g>
                </svg><!----></div>
            <div class="van-tabbar-item__text">我的</div>
            </router-link>
        </div>
        <div class="van-tabbar-item">
            <div class="van-tabbar-item__icon"><svg xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em"
                    viewBox="0 0 24 24" class="iconify iconify--iconoir">
                    <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5">
                        <path stroke-linecap="round" d="M12 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></path>
                        <path
                            d="M22 17.28a2.28 2.28 0 0 1-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 0 1-.823-.017l-2.918-2.94a2.281 2.281 0 0 1 0-3.214a2.277 2.277 0 0 1 3.233 0l.106.107l.106-.107A2.277 2.277 0 0 1 22 17.28Z">
                        </path>
                        <path stroke-linecap="round" d="M5 20v-1a7 7 0 0 1 10-6.326"></path>
                    </g>
                </svg><!----></div>
            <div class="van-tabbar-item__text">关注</div>
        </div>
        <div class="van-tabbar-item">
            <div class="van-tabbar-item__icon"><svg xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em"
                    viewBox="0 0 256 256" class="iconify iconify--ph">
                    <path fill="currentColor"
                        d="M231.79 187.33a80 80 0 0 0-62.21-114.74a80 80 0 1 0-145.37 66.74l-7.66 26.82A14 14 0 0 0 30 184a13.65 13.65 0 0 0 3.84-.54l26.82-7.66a78.86 78.86 0 0 0 25.77 7.63a80 80 0 0 0 108.89 40.37l26.82 7.66a14 14 0 0 0 17.3-17.3ZM65.36 160.21a8 8 0 0 0-6-.68l-26.41 7.55l7.55-26.41a8 8 0 0 0-.68-6a64 64 0 0 1 111.86-62.24A80.12 80.12 0 0 0 80 152a79.31 79.31 0 0 0 1.31 14.3a63.34 63.34 0 0 1-15.95-6.09Zm150.17 28.46l7.55 26.41l-26.41-7.55a8 8 0 0 0-6 .68a63.95 63.95 0 1 1 25.57-25.57a8 8 0 0 0-.71 6.03M144 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12">
                    </path>
                </svg><!----></div>
            <div class="van-tabbar-item__text">社区</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonCloudFooter',
};
</script>

<style scoped>
.van-tabbar {
    z-index: 9;
    display: flex;
    box-sizing: content-box;
    width: 100%;
    height: 50px;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    background-color: #fff;
}

.router-link-active {
    color: #eb4954 !important;
}

.van-tabbar-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    color: #646566;
    font-size: 12px;
    line-height: 1;
    cursor: pointer;
}

.van-tabbar-item__icon {
    margin-bottom: 4px;
    font-size: 22px;
}

.van-tabbar-item {
    color: #9297a1;
}
</style>