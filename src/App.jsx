import React from 'react'
import loadable from '@loadable/component'
const Web  = loadable(() => import('./routes/Web'))

const App = () => {
  return (
    <div className="h-full bg-white border-2 border-pink-700 bg-opacity-20 bg-clip-padding backdrop-filter rounded-3xl">
     <Web />
    </div>
  )
}

export default App
