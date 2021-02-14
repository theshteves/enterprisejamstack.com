import * as React from 'react'
import {random} from 'lodash'

const Background = () => {
  return (
    <div className="overflow-hidden absolute top-0 left-0 w-full h-full">
      <div className="grid sm:grid-cols-6 grid-cols-3 grid-rows-4 absolute top-0 left-0 h-screen overflow-hidden w-full">
        {new Array(24).fill({}).map((_, i) => {
          const [opacity, setOpacity] = React.useState(random(20) % 2 ? 1 : 0)
          React.useEffect(() => {
            setOpacity(random(20) % 2 ? 1 : 0)
          }, [])
          return (
            <div
              style={{
                opacity: opacity,
                zIndex: -i,
              }}
              className=" from-gray-1000 bg-gradient-to-t to-gray-900 relative overflow-hidden"
            />
          )
        })}
      </div>
    </div>
  )
}

export default Background
