import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTRAR</h2>
            </div>
            <hr />

            <ChannelRow 
                image="https://yt3.ggpht.com/a-/AOh14Gh9qy0OEcWqsyLn76gG4m3MlNHuLkOTw47Y7g=s68-c-k-c0x00ffffff-no-rj-mo"
                channel="Marina Tanase"
                verified
                subs="659k"
                noOfVideos={74}
                description="Tu canal de Musica y Videos Musicales"
            />

            <hr />

            <VideoRow 
                views="1.4M"
                subs="659k"
                description="Dj Layla feat Malina  - Tanase dont go (extended mix )"
                timestamp="59 seconds ago"
                channel="Marina Tanase"
                title="dont go "
                image="https://i.ytimg.com/vi/94qMWzJ0mbk/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLB3LdIC-JoWAtaRYMQqq7zf3fsIgA"
            />

        </div>
    )
}

export default SearchPage;