import React from 'react'
import Script from 'next/script'

const Analytics = () => {
  return (
    <>
      <Script
        defer
        data-website-id="1db85f7c-544a-46fb-8a0a-ef33a39fd61e"
        src="https://cloud.umami.is/script.js"
      />
    </>
  )
}

export default Analytics
