<template>
    <div @click="f1">
        音乐播放器
    </div>
</template>

<script>
import Player from './player.js'
const player = new Player()
window.player = player
export default {
    name: 'WorkspaceJsonMain',

    data() {
        return {
            tracks:[
                "156846"
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        f1(){
            player.replaceTracks(this.tracks);
        }
    },
};
</script>

<style lang="scss" scoped>

</style>