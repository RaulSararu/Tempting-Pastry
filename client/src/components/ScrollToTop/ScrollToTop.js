import React from 'react'
import { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function ScrollToTop() {
    const [toTop, setToTop] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 250) {
                setToTop(true)
            }else {
                setToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <div>
        {toTop && (
            <Button 
            style={{
                position:"fixed",
                bottom:"50px",
                right:"50px",
                height:"60px",
                width:"60px",
                fontSize:"20px",
                background:"white",
                borderRadius:"50%",
            }}
            onClick={scrollUp}
            >
                <ArrowUpwardIcon sx={{color:"rgb(34, 27, 80)"}} fontSize="large"/>
            </Button>
        )}
    </div>
  )
}
