import React, { Fragment } from 'react'
import { AiFillGithub } from "react-icons/ai";
const footerActions = [
    {title: 'Terms'},
    {title: 'Privacy'},
    {title: 'Security'},
    {title: 'Status'},
    {title: 'Docs'},
    {img: <AiFillGithub/>},
    {title: 'Contact Github'},
    {title: 'Pricing'},
    {title: 'API'},
    {title: 'Training'},
    {title: 'Blog'},
    {title: 'About'},
]

function Footer() {
  return (
    <>
        <hr/>
        <div className='flexStyle' style={{alignItems:'center', justifyContent: 'space-between'}}>
            {
                footerActions && footerActions.length && 
                footerActions.map((element,index)=>{
                    return (element?.title ? 
                        <p key={index}>{element.title}</p>
                        : 
                        <Fragment key={index}>element.img</Fragment>)
                })
            }
        </div>
    </>
    
  )
}

export default Footer