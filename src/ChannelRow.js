import React from 'react'
import './ChannelRow.css'
import { Avatar } from '@mui/material';
import { Verified } from '@mui/icons-material';

function ChannelRow(
    {image,
    channel,
    subs,
    noOfVideos,
    description,
    verified}
) {
    return (<div className="channelRow">
    <Avatar className="channelRow_logo"
    alt={channel} src={image} />
    <div className="channelRow_text">
        <h4>{channel}{verified && <Verified className='verifiedLogo'/>}</h4>
        <p>{subs} subscribers • {noOfVideos} videos</p>
        <br />
        <p>{description}</p>
    </div>
</div>
);
    
}

export default ChannelRow
