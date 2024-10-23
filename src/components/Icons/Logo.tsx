'use client'
import * as React from 'react'
import { motion } from 'framer-motion'
import { SVGProps } from 'react'

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={522.667}
    height={333.333}
    viewBox="0 0 500 500"
    {...props}
  >
    <motion.path
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      fill="none"
      stroke="#000"
      strokeWidth={4}
      d="
        M250,250 
        m-150,0 
        a150,150 0 1,1 300,0 
        a150,150 0 1,1 -300,0 
        M250,100 
        a100,100 0 1,1 0,200 
        a100,100 0 1,1 0,-200 
        M250,150 
        a50,50 0 1,1 0,100 
        a50,50 0 1,1 0,-100
      "
    />
  </svg>
)

export default Logo
