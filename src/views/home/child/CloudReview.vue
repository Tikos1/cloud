<template>
    <div>
        <div class=" h-[100vh] pb-[12vw]">
            <div class="z-[3] flex flex-wrap h-[100%] pb-[7.5vw]" style="align-content: flex-start">
                <div class="h-[15vw] w-[100vw] flex items-center px-[4vw] justify-between">
                    <svg @click="clickOn" style="color: black;" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em"
                        viewBox="0 0 256 256" class="text-[7vw] text-[#fff] iconify iconify--ph">
                        <path data-v-45cf3a3e="" fill="currentColor"
                            d="M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8Z">
                        </path>
                    </svg>
                    <div class="text-center w-[60vw]">
                        <p class="h-[5vw] text-[4vw] text-[#121010] line-clamp-1">评论</p>
                    </div>
                    <svg style="color: black;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"
                        class="text-[7vw] text-[#fff] iconify iconify--ri">
                        <path data-v-45cf3a3e="" fill="currentColor"
                            d="M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3m0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18m0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5s1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5">
                        </path>
                    </svg>
                </div>
                <div class="h-[250vw] w-[100vw] bg-[green]">
                    1
                </div>
                <div class="h-[14vw] w-[100vw] bg-[white]" style="position: fixed;bottom: 0;border-top: 1px solid #c8c9cc;">
                    <div class="h-[14vw] w-[100vw]" style="display: flex;align-items: center;
    justify-content: space-evenly;">
                        <label for=""><input type="text" placeholder="千头万绪，落笔汇成评论一句"
                                class="dark:from-[#34304b] dark:to-[#403246] dark:border-0 text-[4vw] pl-[5vw] bg-[#f1f1f1] opacity-0.2 w-[75vw] h-[10vw] border-2 border-[#ebedf0] rounded-[25px]">
                        </label>
                        <span style="color: #c8c9cc;">发送</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonCloudReview',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        clickOn() {
            this.$router.go(-1)
        },
    },
};
</script>

<style scoped></style>