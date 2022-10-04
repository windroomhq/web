import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'

function Redirect() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/getGameLink')
      .then((res) => res.json())
      .then((data) => {
        setData(data.url)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Redirecting...</p>
  if (!data) return <p>No URL data</p>

  console.log(data)

  return (
    <Head>
      <meta http-equiv="refresh" content={`0; url=${data}`} />
    </Head>
  )
}

export default Redirect
