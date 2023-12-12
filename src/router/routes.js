import Home from "@/views/home"
import Mine from "@/views/mine"
import Login from "@/views/login/index"
import Verify from "@/views/login/verify"
import Playlist from '@/views/home/child/CloudPlaylist'
import Leader from '@/views/leader'
import Video from '@/views//leader/child/video'
import Details from '@/views/home/child/CloudDetails'
import Search from '@/views/home/child/CloudSearch'

export default [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        name:'home',
        component:Home
    },
    {
        path:'/mine',
        name:'mine',
        component:Mine
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/verify',
        name:'verify',
        component:Verify
    },
    {
        path:'/paly',
        name:'paly',
        component:Playlist
    },
    {
        path:'/leader',
        name:'leader',
        component:Leader
    },
    {
        path:'/video',
        name:'video',
        component:Video
    },
    {
        path:'/details',
        name:'details',
        component:Details
    },
    {
        path:'/search',
        name:'search',
        component:Search
    }
]