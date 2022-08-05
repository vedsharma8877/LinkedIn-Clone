import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('Yooo whats up', 'Top news - 9999 readers')}
      {newsArticle('React Developers Hub', 'Top news - 999 readers')}
      {newsArticle('The Gray Man', 'Entertainment - 999 readers')}
      {newsArticle('Yooo whats up', 'Top news - 9999 readers')}
      {newsArticle('Yooo whats up', 'Top news - 9999 readers')}
      {newsArticle('Yooo whats up', 'Top news - 9999 readers')}
    </div>
  )
}

export default Widgets
