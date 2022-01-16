import { Subscript, TuneOutlined } from '@mui/icons-material'
import React from 'react'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import './SearchPage.css'

function SearchPage() {
    return (
        <div className="searchPage"> 
            
            <div className="searchPage_filter">
                <TuneOutlined />
                <h2>FILTERS</h2>
            </div>
            <hr />

            <ChannelRow 
                image="https://yt3.ggpht.com/ytc/AKedOLTYTpeOiL8n_l9gepDh3m3vczvElfHZO-BR6oAf=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Khan Academy"
                verified
                subs="7.05M"
                noOfVideos={8176}
                description="Khan Academy is a 501(c)(3) nonprofit organization with the mission of providing a free, world-class education for anyone, ..."
                />
                <hr />
            <VideoRow 
                image="https://i.ytimg.com/vi/v5qQusbk-j0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyWO5NPvJiLgFwq3k1ALrYv1m5ng"
                title="Quantitative electrolysis | Applications of thermodynamics | AP Chemistry | Khan Academy"
                description="Given the amount of electrical charge that passes through an electrolytic cell, we can calculate the quantity of substances ..."
                channel="Khan Academy"
                views="3,085"
                subs="7.05M"
                timestamp={"17 hours ago"}
                verified
                channelimage={"https://yt3.ggpht.com/ytc/AKedOLTYTpeOiL8n_l9gepDh3m3vczvElfHZO-BR6oAf=s176-c-k-c0x00ffffff-no-rj-mo"}
            />

            <VideoRow 
                image="https://img.youtube.com/vi/eVtCO84MDj8/maxresdefault.jpg"
                title="Khan Academy and the Effectiveness of Science Videos"
                description="My PhD: https://ve42.co/phd It is a common view that 'if only someone could break this down and explain it clearly enough, more ..."
                channel="Veritasium"
                views="1.1M"

                timestamp={"10 years ago"}
                verified
                channelimage={"https://yt3.ggpht.com/ytc/AKedOLTYTpeOiL8n_l9gepDh3m3vczvElfHZO-BR6oAf=s176-c-k-c0x00ffffff-no-rj-mo"}
            />
            <VideoRow 
                image="https://i.ytimg.com/vi/v5qQusbk-j0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyWO5NPvJiLgFwq3k1ALrYv1m5ng"
                title="Quantitative electrolysis | Applications of thermodynamics | AP Chemistry | Khan Academy"
                description="Given the amount of electrical charge that passes through an electrolytic cell, we can calculate the quantity of substances ..."
                channel="Khan Academy"
                views="3,085"
                subs="7.05M"
                timestamp={"17 hours ago"}
                verified
                channelimage={"https://yt3.ggpht.com/ytc/AKedOLTYTpeOiL8n_l9gepDh3m3vczvElfHZO-BR6oAf=s176-c-k-c0x00ffffff-no-rj-mo"}
            />

            <VideoRow 
                image="https://img.youtube.com/vi/eVtCO84MDj8/maxresdefault.jpg"
                title="Khan Academy and the Effectiveness of Science Videos"
                description="My PhD: https://ve42.co/phd It is a common view that 'if only someone could break this down and explain it clearly enough, more ..."
                channel="Veritasium"
                views="1.1M"

                timestamp={"10 years ago"}
                verified
                channelimage={"https://yt3.ggpht.com/ytc/AKedOLTYTpeOiL8n_l9gepDh3m3vczvElfHZO-BR6oAf=s176-c-k-c0x00ffffff-no-rj-mo"}
            />
            <VideoRow 
                image="https://i.ytimg.com/vi/v5qQusbk-j0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyWO5NPvJiLgFwq3k1ALrYv1m5ng"
                title="Quantitative electrolysis | Applications of thermodynamics | AP Chemistry | Khan Academy"
                description="Given the amount of electrical charge that passes through an electrolytic cell, we can calculate the quantity of substances ..."
                channel="Khan Academy"
                views="3,085"
                subs="7.05M"
                timestamp={"17 hours ago"}
                verified
                channelimage={"https://yt3.ggpht.com/ytc/AKedOLTYTpeOiL8n_l9gepDh3m3vczvElfHZO-BR6oAf=s176-c-k-c0x00ffffff-no-rj-mo"}
            />

            <VideoRow 
                image="https://img.youtube.com/vi/eVtCO84MDj8/maxresdefault.jpg"
                title="Khan Academy and the Effectiveness of Science Videos"
                description="My PhD: https://ve42.co/phd It is a common view that 'if only someone could break this down and explain it clearly enough, more ..."
                channel="Veritasium"
                views="1.1M"

                timestamp={"10 years ago"}
                verified
                channelimage={"https://yt3.ggpht.com/ytc/AKedOLTYTpeOiL8n_l9gepDh3m3vczvElfHZO-BR6oAf=s176-c-k-c0x00ffffff-no-rj-mo"}
            />
            <VideoRow 
                image="https://i.ytimg.com/vi/v5qQusbk-j0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyWO5NPvJiLgFwq3k1ALrYv1m5ng"
                title="Quantitative electrolysis | Applications of thermodynamics | AP Chemistry | Khan Academy"
                description="Given the amount of electrical charge that passes through an electrolytic cell, we can calculate the quantity of substances ..."
                channel="Khan Academy"
                views="3,085"
                subs="7.05M"
                timestamp={"17 hours ago"}
                verified
                channelimage={"https://yt3.ggpht.com/ytc/AKedOLTYTpeOiL8n_l9gepDh3m3vczvElfHZO-BR6oAf=s176-c-k-c0x00ffffff-no-rj-mo"}
            />

            <VideoRow 
                image="https://img.youtube.com/vi/eVtCO84MDj8/maxresdefault.jpg"
                title="Khan Academy and the Effectiveness of Science Videos"
                description="My PhD: https://ve42.co/phd It is a common view that 'if only someone could break this down and explain it clearly enough, more ..."
                channel="Veritasium"
                views="1.1M"

                timestamp={"10 years ago"}
                verified
                channelimage={"https://yt3.ggpht.com/ytc/AKedOLTYTpeOiL8n_l9gepDh3m3vczvElfHZO-BR6oAf=s176-c-k-c0x00ffffff-no-rj-mo"}
            />
            
        </div>
        
    )
}

export default SearchPage
