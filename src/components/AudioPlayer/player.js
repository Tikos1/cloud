import { Howl, Howler } from "howler"
import axios from "axios";
import { getTrackDetail } from "@/service";
import store from '../../store/index';
// Howl 加载音乐 播放 暂停
// Howler 全局设置声音大小 播放速度
// 播放器的功能
// 定义一个属性保存播放歌单
// 定义一个方法更新播放列表
let timer = null;
export default class {
    constructor() {
        // 播放器状态
        this.flag = 0;
        this.playing = false;
        this.duration = 0;
        this.progress = 0;
        this.index = 0;
        this.tracks = [];
        this.howl = null;
        this.currentTrackDetail = {};
        //播放循环模式 0 列表循环 1 单曲循环
        this.loopMode = 0;
    }
    interval(){
        clearInterval(timer)
        setInterval(()=>{
            this.progress = this.howl.seek()/this.howl.duration()
        },1000)
    }
    replaceTracks(tracks, autoplayTrack) {
        this.tracks = tracks;
        //指定从autoplayTrack开始播放
        if (autoplayTrack) {
            this.index = this.tracks.indexOf(autoplayTrack)
        }
        this.palyTrack(this.tracks[this.index])
    }
    // 播放歌曲的方法
    async palyTrack(track) {
        axios({
            method: 'post',
            url: `http://111.229.247.11:3000/song/url/v1?timestamp=${Date.now()}`,
            data: {
                id: track,
                level: 'standard'
            }
        }).then(data => {
            const mp3Url = data.data.data[0].url;
            if (mp3Url) return this.mountAudioSource(mp3Url, true);
            this.playNextTrack();
        })
        const [err,res] = await getTrackDetail(track)
        if(err) return alert('异常');
        this.currentTrackDetail = res.data.songs[0];
        store.commit('SingList',this.currentTrackDetail);
    }
    mountAudioSource(url, autoplay = false) {
        Howler.unload();
        this.howl = new Howl({
            src: [url],
            html5: true,
            format: ['mp3'],
        });
        if (autoplay) this.play();
        this.howl.on('end', () => this.playNextTrack())
    }
    play() {
        this.howl.play();
        this.playing = true;
        this.duration = this.howl.duration();
        this.interval()
    }
    // 获取需要播放的trackId
    playNextTrack() {
        const nextTrack = this.getNextTrack();
        this.palyTrack(nextTrack);
    }
    playTopTrack() {
        const TopTrack = this.getTopTrack();
        this.palyTrack(TopTrack);
    }
    getTopTrack() {
        if (this.loopMode == 1) return this.tracks[this.index];
        const currentTrackIsTop = this.index - 1 == this.tracks.length;
        if (currentTrackIsTop && this.loopMode == 0) return this.tracks[(this.index = 0)];
        return this.tracks[--this.index];
    }
    getNextTrack() {
        if (this.loopMode == 1) return this.tracks[this.index];
        const currentTrackIsLast = this.index + 1 == this.tracks.length;
        if (currentTrackIsLast && this.loopMode == 0) return this.tracks[(this.index = 0)];
        return this.tracks[++this.index];
    }
    pause(){
        this.howl.pause();
        this.playing = false;
    }
    toggle(){
        this.howl.playing()?this.pause():this.play();
    }
}

