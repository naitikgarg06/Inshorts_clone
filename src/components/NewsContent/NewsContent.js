import { Container } from '@mui/material'
import React from 'react'
import './NewsContent.css'
import NewsCard from '../NewsCard/NewsCard'

const NewsContent = ({ newsArray,newsResults,loadMore,setLoadMore }) => {
  return (
    <Container maxWidth="md">
      <div className='content'>
        <div className='downloadMessage'>
          <span className='downloadText'>For the best experience use inshorts app in your smartphone</span>
          <img src="https://assets.inshorts.com/website_assets/images/appstore.png"></img>
          <img src="https://assets.inshorts.com/website_assets/images/playstore.png"></img>
        </div>
          {
            newsArray.map((newsItem) => (              
              <NewsCard newsItem={newsItem} />
            ))
            
          }

          {loadMore <= newsResults && (
            <>
            <hr/>
            <button className='loadMore' onClick={() => {setLoadMore(loadMore + 20)}}>Load More</button>
            </>
          )}
          
      </div>
        
        
    </Container>
  )
}

export default NewsContent
