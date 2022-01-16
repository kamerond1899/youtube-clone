import React from "react"; 
import './RecommendedVideos.css'
import  VideoCard  from './VideoCard.js'

function RecommendedVideos (){
    return(
    <div className='recommendedVideos'>

        <div className="recommendedVideos_videos">
            <VideoCard 
                title="Smiling Friends 'Glep's Happy Dance'"
                channel="Carppet"
                views="10k views"
                timestamp="4 hours ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLSKhRJVmPHsVJmgP5IeO799bw7foXJIXFrY63uJ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/x7s9obLCEaQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJ5HW2drbwYkDo1u2O3PkPOhktIw"
            />
            <VideoCard
            title="Best Albums of 2021 So Far"
            channel="theneedledrop"
            views="374k views"
            timestamp="6 months ago"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLR3L27CVPHpOhKOAYrKQGOIWfqTQDEPVJOetYhUVA=s48-c-k-c0x00ffffff-no-rj"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gpyk3WWBrdRScD8WjxGtJB1WWPn8hpGXeQ&usqp=CAU" 
            />
            <VideoCard 
                title="How Domino's Pizza Squashed Every Company You Can Think Of"
                channel="Logically Answered"
                views="236k views"
                timestamp="2 months ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLTHMGy256EbjVI9EZ4C0NGeyWu_xttmXOCjRbCPbw=s68-c-k-c0x00ffffff-no-rj"
                image="https://img.youtube.com/vi/ZoA8tTnxQZw/maxresdefault.jpg"
            />
            <VideoCard
            title="Black Screen Rain and Severe Thunderstorm - For Sleep or Meditation"
            channel="More Relaxed Synergy"
            views="1.7M views"
            timestamp="1 year ago"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLQwcdt1JyvCfuZLOclCxBPEBXM3B6SwpWWz-X3I=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/ltAKV3N5LxA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJLHCYE-E0DOXwDxFhT7ZSUehhFw" 
            />
            <VideoCard 
                title="why you hate learning"
                channel="Answer in Progress"
                views="289k views"
                timestamp="6 months ago"
                channelimage="https://yt3.ggpht.com/b4TIQdFmoHYvQmcMt1XGH40m8-P5VdjyaZKb2C6nmkezGVk2Ln1csqe1PWg5aefEyk-NEFWhzg=s68-c-k-c0x00ffffff-no-rj"
                image="https://img.youtube.com/vi/AtieSxtkZ0k/maxresdefault.jpg"
            />
            <VideoCard
            title="Sow Seeds for Your Future Self"
            channel="HealthyGamerGG"
            views="118k views"
            timestamp="1 year ago"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLQcruKgILsJGIMmX1Qp29Uoz8JPzBL-Cn3sS6GR=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/yKDb-ZiKkeM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvvRVrAJ4u-cpPwTSYfukOEYC3DQ" 
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="Smiling Friends 'Glep's Happy Dance'"
                channel="Carppet"
                views="10k views"
                timestamp="4 hours ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLSKhRJVmPHsVJmgP5IeO799bw7foXJIXFrY63uJ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/x7s9obLCEaQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJ5HW2drbwYkDo1u2O3PkPOhktIw"
            />
            <VideoCard
            title="Best Albums of 2021 So Far"
            channel="theneedledrop"
            views="374k views"
            timestamp="6 months ago"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLR3L27CVPHpOhKOAYrKQGOIWfqTQDEPVJOetYhUVA=s48-c-k-c0x00ffffff-no-rj"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gpyk3WWBrdRScD8WjxGtJB1WWPn8hpGXeQ&usqp=CAU" 
            />
            <VideoCard 
                title="How Domino's Pizza Squashed Every Company You Can Think Of"
                channel="Logically Answered"
                views="236k views"
                timestamp="2 months ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLTHMGy256EbjVI9EZ4C0NGeyWu_xttmXOCjRbCPbw=s68-c-k-c0x00ffffff-no-rj"
                image="https://img.youtube.com/vi/ZoA8tTnxQZw/maxresdefault.jpg"
            />
            <VideoCard
            title="Black Screen Rain and Severe Thunderstorm - For Sleep or Meditation"
            channel="More Relaxed Synergy"
            views="1.7M views"
            timestamp="1 year ago"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLQwcdt1JyvCfuZLOclCxBPEBXM3B6SwpWWz-X3I=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/ltAKV3N5LxA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJLHCYE-E0DOXwDxFhT7ZSUehhFw" 
            />
            <VideoCard 
                title="why you hate learning"
                channel="Answer in Progress"
                views="289k views"
                timestamp="6 months ago"
                channelimage="https://yt3.ggpht.com/b4TIQdFmoHYvQmcMt1XGH40m8-P5VdjyaZKb2C6nmkezGVk2Ln1csqe1PWg5aefEyk-NEFWhzg=s68-c-k-c0x00ffffff-no-rj"
                image="https://img.youtube.com/vi/AtieSxtkZ0k/maxresdefault.jpg"
            />
            <VideoCard
            title="Sow Seeds for Your Future Self"
            channel="HealthyGamerGG"
            views="118k views"
            timestamp="1 year ago"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLQcruKgILsJGIMmX1Qp29Uoz8JPzBL-Cn3sS6GR=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/yKDb-ZiKkeM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvvRVrAJ4u-cpPwTSYfukOEYC3DQ" 
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="Smiling Friends 'Glep's Happy Dance'"
                channel="Carppet"
                views="10k views"
                timestamp="4 hours ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLSKhRJVmPHsVJmgP5IeO799bw7foXJIXFrY63uJ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/x7s9obLCEaQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJ5HW2drbwYkDo1u2O3PkPOhktIw"
            />
            <VideoCard
            title="Best Albums of 2021 So Far"
            channel="theneedledrop"
            views="374k views"
            timestamp="6 months ago"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLR3L27CVPHpOhKOAYrKQGOIWfqTQDEPVJOetYhUVA=s48-c-k-c0x00ffffff-no-rj"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gpyk3WWBrdRScD8WjxGtJB1WWPn8hpGXeQ&usqp=CAU" 
            />
            <VideoCard 
                title="How Domino's Pizza Squashed Every Company You Can Think Of"
                channel="Logically Answered"
                views="236k views"
                timestamp="2 months ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLTHMGy256EbjVI9EZ4C0NGeyWu_xttmXOCjRbCPbw=s68-c-k-c0x00ffffff-no-rj"
                image="https://img.youtube.com/vi/ZoA8tTnxQZw/maxresdefault.jpg"
            />
            <VideoCard
            title="Black Screen Rain and Severe Thunderstorm - For Sleep or Meditation"
            channel="More Relaxed Synergy"
            views="1.7M views"
            timestamp="1 year ago"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLQwcdt1JyvCfuZLOclCxBPEBXM3B6SwpWWz-X3I=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/ltAKV3N5LxA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJLHCYE-E0DOXwDxFhT7ZSUehhFw" 
            />
            <VideoCard 
                title="why you hate learning"
                channel="Answer in Progress"
                views="289k views"
                timestamp="6 months ago"
                channelimage="https://yt3.ggpht.com/b4TIQdFmoHYvQmcMt1XGH40m8-P5VdjyaZKb2C6nmkezGVk2Ln1csqe1PWg5aefEyk-NEFWhzg=s68-c-k-c0x00ffffff-no-rj"
                image="https://img.youtube.com/vi/AtieSxtkZ0k/maxresdefault.jpg"
            />
            <VideoCard
            title="Sow Seeds for Your Future Self"
            channel="HealthyGamerGG"
            views="118k views"
            timestamp="1 year ago"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLQcruKgILsJGIMmX1Qp29Uoz8JPzBL-Cn3sS6GR=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/yKDb-ZiKkeM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvvRVrAJ4u-cpPwTSYfukOEYC3DQ" 
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="Smiling Friends 'Glep's Happy Dance'"
                channel="Carppet"
                views="10k views"
                timestamp="4 hours ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLSKhRJVmPHsVJmgP5IeO799bw7foXJIXFrY63uJ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/x7s9obLCEaQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJ5HW2drbwYkDo1u2O3PkPOhktIw"
            />
            <VideoCard
            title="Best Albums of 2021 So Far"
            channel="theneedledrop"
            views="374k views"
            timestamp="6 months ago"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLR3L27CVPHpOhKOAYrKQGOIWfqTQDEPVJOetYhUVA=s48-c-k-c0x00ffffff-no-rj"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gpyk3WWBrdRScD8WjxGtJB1WWPn8hpGXeQ&usqp=CAU" 
            />
            <VideoCard 
                title="How Domino's Pizza Squashed Every Company You Can Think Of"
                channel="Logically Answered"
                views="236k views"
                timestamp="2 months ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLTHMGy256EbjVI9EZ4C0NGeyWu_xttmXOCjRbCPbw=s68-c-k-c0x00ffffff-no-rj"
                image="https://img.youtube.com/vi/ZoA8tTnxQZw/maxresdefault.jpg"
            />
            <VideoCard
            title="Black Screen Rain and Severe Thunderstorm - For Sleep or Meditation"
            channel="More Relaxed Synergy"
            views="1.7M views"
            timestamp="1 year ago"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLQwcdt1JyvCfuZLOclCxBPEBXM3B6SwpWWz-X3I=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/ltAKV3N5LxA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJLHCYE-E0DOXwDxFhT7ZSUehhFw" 
            />
            <VideoCard 
                title="why you hate learning"
                channel="Answer in Progress"
                views="289k views"
                timestamp="6 months ago"
                channelimage="https://yt3.ggpht.com/b4TIQdFmoHYvQmcMt1XGH40m8-P5VdjyaZKb2C6nmkezGVk2Ln1csqe1PWg5aefEyk-NEFWhzg=s68-c-k-c0x00ffffff-no-rj"
                image="https://img.youtube.com/vi/AtieSxtkZ0k/maxresdefault.jpg"
            />
            <VideoCard
            title="Sow Seeds for Your Future Self"
            channel="HealthyGamerGG"
            views="118k views"
            timestamp="1 year ago"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLQcruKgILsJGIMmX1Qp29Uoz8JPzBL-Cn3sS6GR=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/yKDb-ZiKkeM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvvRVrAJ4u-cpPwTSYfukOEYC3DQ" 
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="Smiling Friends 'Glep's Happy Dance'"
                channel="Carppet"
                views="10k views"
                timestamp="4 hours ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLSKhRJVmPHsVJmgP5IeO799bw7foXJIXFrY63uJ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/x7s9obLCEaQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJ5HW2drbwYkDo1u2O3PkPOhktIw"
            />
            <VideoCard
            title="Best Albums of 2021 So Far"
            channel="theneedledrop"
            views="374k views"
            timestamp="6 months ago"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLR3L27CVPHpOhKOAYrKQGOIWfqTQDEPVJOetYhUVA=s48-c-k-c0x00ffffff-no-rj"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gpyk3WWBrdRScD8WjxGtJB1WWPn8hpGXeQ&usqp=CAU" 
            />
            <VideoCard 
                title="How Domino's Pizza Squashed Every Company You Can Think Of"
                channel="Logically Answered"
                views="236k views"
                timestamp="2 months ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLTHMGy256EbjVI9EZ4C0NGeyWu_xttmXOCjRbCPbw=s68-c-k-c0x00ffffff-no-rj"
                image="https://img.youtube.com/vi/ZoA8tTnxQZw/maxresdefault.jpg"
            />
            <VideoCard
            title="Black Screen Rain and Severe Thunderstorm - For Sleep or Meditation"
            channel="More Relaxed Synergy"
            views="1.7M views"
            timestamp="1 year ago"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLQwcdt1JyvCfuZLOclCxBPEBXM3B6SwpWWz-X3I=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/ltAKV3N5LxA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJLHCYE-E0DOXwDxFhT7ZSUehhFw" 
            />
            <VideoCard 
                title="why you hate learning"
                channel="Answer in Progress"
                views="289k views"
                timestamp="6 months ago"
                channelimage="https://yt3.ggpht.com/b4TIQdFmoHYvQmcMt1XGH40m8-P5VdjyaZKb2C6nmkezGVk2Ln1csqe1PWg5aefEyk-NEFWhzg=s68-c-k-c0x00ffffff-no-rj"
                image="https://img.youtube.com/vi/AtieSxtkZ0k/maxresdefault.jpg"
            />
            <VideoCard
            title="Sow Seeds for Your Future Self"
            channel="HealthyGamerGG"
            views="118k views"
            timestamp="1 year ago"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLQcruKgILsJGIMmX1Qp29Uoz8JPzBL-Cn3sS6GR=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/yKDb-ZiKkeM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvvRVrAJ4u-cpPwTSYfukOEYC3DQ" 
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />
            <VideoCard 
                title="PLACEHOLDER"
                channel="PLACEHOLDER"
                views="9.1B views"
                timestamp="50 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AKedOLRxqQsOPXMPk9x0NnR9qoaHElZEH7RXW9knSyK8mQ=s68-c-k-c0x00ffffff-no-rj"
                image="https://i.ytimg.com/vi/QD0Wlsm_Sdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPcv-dK9ycWMe1xBFEZ3gMYzi6g"
            />

        </div>
    </div>)
}

export default RecommendedVideos;