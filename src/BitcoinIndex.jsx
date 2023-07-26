import React, { useState } from 'react'

const BitcoinIndex = () => {
  const [price, setPrice] = useState(0)

  fetch('http://api.coindesk.com/v1/bpi/currentprice/AUD.json')
    .then(res => res.json())
    .then(data => setPrice(data.bpi.AUD.rate))

  return <>
    <h1>Bitcoin Index</h1>
    <p>Current Price (AUD): {price}</p>
  </>
}

export default BitcoinIndex