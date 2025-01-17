import React from 'react'
import Script from 'next/script'

const Analytics = () => {
  return (
    <>
      {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID &&
        process.env.NEXT_PUBLIC_UMAMI_URL && (
          <Script
            async
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            src={`${process.env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
          />
        )}
    </>
  )
}

export default Analytics
