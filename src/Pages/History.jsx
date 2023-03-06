import React from 'react'
import HistoryItem from '../Components/HistoryItem'

const History = () => {
  return (
    <div className='container'>
        <div className='history'>
            <div className='img-block'>
                <img src='../img/historylogo.svg' alt='logo'/>
            </div>
            <div className='history__items'>
            <HistoryItem/>
            </div>
            

        </div>
      
    </div>
  )
}

export default History
