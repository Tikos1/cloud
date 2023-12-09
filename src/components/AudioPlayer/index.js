import Main from "../../components/PlaySong.vue";
import Player from "./player";
const player = new Player();

export default (Vue) =>{
    Vue.component(Main.name, Main);
    Vue.mixin({
        computed:{
            player(){
                return Vue.observable(player);
            }
        }
    })
}