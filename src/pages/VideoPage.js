import React from "react";
import Menu from "../components/Menu";
import SmallContainer from "../components/SmallContainer";
import FooterAdvanced from "../components/FooterAdvanced";
import VideoList from "../components/VideoList"


const VideoPage = () => {
    return <div>
        <Menu/>
        <SmallContainer titel="VIDEOS"  background="main_image cover_height" main_image="video_image" bg_small="bg_small"/>
        <VideoList/>
        <FooterAdvanced/>
    </div>
}

export default VideoPage;