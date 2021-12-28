import React, { memo, useImperativeHandle, forwardRef } from 'react'
import Button from '../../components/Button/Button';

// const Child = forwardRef((props, ref) => {

//   // The component instance will be extended
//   // with whatever you return from the callback passed
//   // as the second argument
//   useImperativeHandle(ref, () => ({

//     getAlert() {
//       alert("getAlert from Child");
//     }

//   }));

//   return <h1>Hi</h1>;
// });
const MemoComponent = forwardRef((props, ref) => {

  const handleRender = () => {
    console.log('rendered child');
  }
  
  useImperativeHandle(ref, () => ({
    handleRender() {
      alert("getAlert from Child");
    }
    
  }));
  return (
    <div >
      {props.text}
      
    </div>
  )
})

export default memo(MemoComponent);