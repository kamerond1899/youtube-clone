import { Verified } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import './VideoRow.css'

function VideoRow({views,subs, description, timestamp, channel, title, image, channelimage,verified}) {
    return (
        <div className='videoRow'>
            <img src={image} alt="" />
            <div className="videoRow_text">
                <p className='videoRow_titleText'>{title}</p>
                <p className="videoRow_headline">{views} views • {timestamp}</p>
                <br />
                <p className="channelsRow"><Avatar className="videoRow_logo" src={channelimage} /> {channel}   {verified && <Verified className='verifiedLogo'/>} </p>
                <p className="videoRow_description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
