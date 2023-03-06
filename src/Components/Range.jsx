import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useSelector } from 'react-redux';


const Range = () => {
    const totalPrice=useSelector(state=>state.cartSlice.totalPrice)
    // React.useEffect=(()=>{
     
    // },[totalPrice])

  return (
    <>
    <div className='wrapper-input'>
      <h3>0</h3>
      <div>
      <Slider
    sx={{
      width: 137,
      color: 'success.main',
    }}
    defaultValue={totalPrice}
    min={0}
    max={67}
    readonly='readonly'
  
    value={totalPrice}
  />
      </div>
        
 <h3>67</h3>
     
    </div>
     {totalPrice<67 ?
    <h3>Осталось  <p>{67-totalPrice}</p>  AZN до акции!</h3>
      : <h3>Акция доступна!</h3>}
    </>
   
/* <input
 type='range'
 min={0}
 max={3000}
 defaultValue={totalPrice}
 value={totalPrice}
//  disabled={true}
 readonly="readonly" 
//  onselectstart="return false;"
//   onfocus="this.blur();" 
   style="color:#B00B00;"
/> */
  )
}

export default Range


  