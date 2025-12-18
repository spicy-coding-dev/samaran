import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
    <Helmet>
        <title>404 – Page Not Found | Samaran Foods</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
    
  
    <main className="grid min-h-full place-items-center bg-white mt-20 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-4xl font-semibold text-indigo-500">404</p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-black sm:text-7xl">
          Page Not Found
        </h1>

        <h2 className="mt-2 text-2xl font-medium text-gray-700">
          பக்கம் கிடைக்கவில்லை
        </h2>

        <p className="mt-6 text-lg text-gray-500 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for. <br />
          மன்னிக்கவும், நீங்கள் தேடும் இணையப் பக்கம் கிடைக்கவில்லை.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Go to Home Page | முகப்பு பக்கம்
          </Link>
        </div>
      </div>
    </main>
      </>
  )
}

export default PageNotFound
