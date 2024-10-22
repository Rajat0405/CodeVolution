import React from 'react'

function Hero({heroname}) {
    if(heroname === 'joker'){
        throw new Error ('Not an Hero')
        
    }
  return (
    <div>{heroname}</div>
  )
}

export default Hero