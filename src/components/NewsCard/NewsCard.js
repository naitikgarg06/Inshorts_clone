import { Height } from '@mui/icons-material'
import { style } from '@mui/system'
import React from 'react'
import './NewsCard.css'

const NewsCard = ({ newsItem }) => {
    const fullDate = new Date(newsItem.publishedAt);
    // after converting to string it split at blank-space 
    let date = fullDate.toString().split(" ");
    const hour = parseInt(date[4].substring(0, 2));
    const time = hour > 12 ? true : false;
    console.log(date);

    return (
        <div className='newsCard'>
            
            <img src={newsItem.urlToImage}
                // style={{ width: "30%", height: "30%" }} 
                className='newsImage'
            />

            <div className='newsText'>
                <span className='title'>{newsItem.title}</span>

                <span className='author'>
                    <a href={newsItem.url} target='__blank'>
                        {" "} <b>short {" "}</b></a>
                    <span className='muted'>
                        by {newsItem.author ? newsItem.author : "unknown"} / {" "}
                        {
                            time ? `${hour - 12}:${date[4].substring(3, 5)} pm` : `${hour}:${date[4].substring(3, 5)} am`
                        } {"on"} {date[2]} {date[3]} {date[1]}, {date[0]}

                    </span>
                </span>
                
                <div className='lowerNewsText'>
                    <div className='description'>
                        {newsItem.description}
                    </div>
                    <div className='readmore'>
                        read more at <a href={newsItem.url} target='__blank'>
                            {" "} <b>{newsItem.source.name}</b></a>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default NewsCard