import React, { useState, useEffect } from "react"

const BitcoinIndex = () => {
  let [price, setPrice] = useState()

  // Only triggers on mount
  useEffect(() => {
    fetch("http://api.coindesk.com/v1/bpi/currentprice/AUD.json")
      .then((res) => res.json())
      .then((data) => setPrice(data.bpi.AUD.rate))
  }, [])

  useEffect(() => console.log("effect triggered on mount or any change"))

  useEffect(() => console.log("effect triggered on mount or price change"), [price])

  return (
    <>
      <h1>Bitcoin Index</h1>
      {price ? <p>Current Price (AUD): {price}</p> : <p>Loading ...</p>}
    </>
  )
}

export default BitcoinIndex
