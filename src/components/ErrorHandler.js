import React, { useEffect, useRef } from 'react'

function ErrorHandler({err}) {
    // const errorDiv = useRef(false);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         errorDiv.current = true
    //     }, 5000)
    //     return ()=>{
    //         errorDiv.current = false
    //     }
    // },[err])
  return (
        err ?
        err.map((e)=>{
            return(
                <div key={e.id} style={{display: err && err.length ? "flex": "none" , position: 'absolute',top: 600, left:100,borderRadius: '10px', padding: '5px 10px',border: '1px solid #F65656', backgroundColor:"#EFF5F5"}}>
                    {e.error}
                </div>)
        }) 
        :
        null
  )
}

export default ErrorHandler