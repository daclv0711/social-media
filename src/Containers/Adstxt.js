import React from 'react'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom';

function Adstxt() {
    useEffect(() => {
        window.location.href = "https://adstxt-stage.pubfuture.com/site/6437c2e4a30bc4003e3c1e4a/social-media-32983.netlify.app/ads.txt";
    }, [])
  return (
    <div></div>
  )
}

export default Adstxt