import React from 'react'

interface props {
    children: React.ReactNode
}

const Container = ({children}: props) => {
  return (
    <div className='max-w-[1920] mx-auto px-4 md:px-8 xl:px-20'>
      {children}
    </div>
  )
}

export default Container
