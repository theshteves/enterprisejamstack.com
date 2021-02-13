import * as React from 'react'
import {motion} from 'framer-motion'
import {random} from 'lodash'
import {useInterval, useBoolean} from 'react-use'

const Background = () => {
  // restart animation every 8sec
  const [count, setCount] = React.useState(0)
  const [delay] = React.useState(8000)
  const [isRunning] = useBoolean(true)
  useInterval(
    () => {
      setCount(count + 1)
    },
    isRunning ? delay : null,
  )

  return isRunning ? (
    <div className="overflow-hidden absolute top-0 left-0 w-full h-full">
      <motion.div className="grid grid-cols-8 grid-rows-6 absolute top-0 left-0 h-screen overflow-hidden w-full ">
        {new Array(8).fill({}).map((_, i) => {
          const colStart = `col-start-${Math.floor(random(1, 8))}`
          const colSpan = `col-span-${Math.floor(random(1, 4))}`
          const rowStart = `row-start-${Math.floor(random(1, 6))}`
          const rowSpan = `row-span-${Math.floor(random(1, 3))}`
          const transformOrigin = i % 2 ? 'origin-left' : 'origin-right'

          return (
            <motion.div
              key={`${colStart}-${colSpan}-${i}-${count}-${transformOrigin}`}
              // animate={{scaleX: [0, 1]}}
              // transition={{
              //   type: 'ease-in-out',
              //   duration: random(3, 8),
              //   delay: 0.1 * i,
              // }}
              style={{
                opacity: 0.6,
                skewX: -16,
                // scaleX: 0,
                zIndex: -i,
              }}
              className={`
               ${colStart} ${colSpan} ${rowStart} ${rowSpan} ${transformOrigin}
                from-gray-1000 bg-gradient-to-t to-gray-900 relative overflow-hidden
               `}
            />
          )
        })}
      </motion.div>
    </div>
  ) : null
}

export default Background
