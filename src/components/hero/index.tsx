import * as React from 'react'
import {motion} from 'framer-motion'
import LetterJ from '../../assets/tiles/letter-j.svg'
import LetterA from '../../assets/tiles/letter-a.svg'
import LetterM from '../../assets/tiles/letter-m.svg'
// import Background from 'components/hero/background'

const Hero: React.FC = () => {
  const size = 'lg:w-58 lg:h-58 sm:w-56 sm:h-56 w-40 h-40'
  const size2 = 'lg:w-48 lg:h-48 sm:w-40 sm:h-40 w-32 h-32'
  const inset = 'lg:-m-10 md:-m-8 -m-8'
  const inset2 = 'lg:-m-16 md:-m-8 -m-8'
  const jam = [
    {
      letter: (props: any) => <LetterJ className={`${size}`} {...props} />,
      label: 'JavaScript',
      color: '#FCAC14',
      transition: {
        type: 'spring',
        delay: 0.1,
        duration: 0.8,
      },
    },
    {
      letter: (props: any) => <LetterA className={`${size}`} {...props} />,
      label: 'APIs',
      color: '#F83E0D',
      transition: {
        type: 'spring',
        delay: 0.3,
        duration: 0.8,
      },
    },
    {
      letter: (props?: any) => <LetterM className={`${size}`} {...props} />,
      label: 'Markup',
      color: '#8B3BDB',
      transition: {
        type: 'spring',
        delay: 0.4,
        duration: 0.8,
      },
    },
  ]

  const Letters = () => {
    return (
      <>
        {jam.map((box, i) => {
          return (
            <div
              key={box.label}
              className={`relative 
               ${inset}
               ${size}
               ${box.label === 'JavaScript' && 'row-start-3 z-20'}
               ${box.label === 'APIs' && 'row-start-2 col-start-2 z-10'}
               ${box.label === 'Markup' && 'col-start-3'}
        `}
            >
              <motion.div
                className="relative overflow-hidden transform"
                animate={{width: ['0%', '100%']}}
                style={{width: '0%', background: box.color}}
                initial={{width: '0%'}}
                transition={box.transition}
              >
                <motion.div
                  animate={{x: [-80, 0], opacity: [0, 0.8]}}
                  transition={{
                    type: 'spring',
                    duration: box.transition.duration + 0.5,
                    delay: 0.3 * i,
                  }}
                  className="absolute z-10 p-3 font-semibold"
                >
                  {box.label}
                </motion.div>
                <motion.div
                  animate={{
                    y: [300, 0],
                  }}
                  transition={{
                    duration: box.transition.duration + 0.5,
                    delay: 0.2 * i,
                  }}
                >
                  {box.letter()}
                </motion.div>
              </motion.div>
            </div>
          )
        })}
      </>
    )
  }

  return (
    <section className="w-full flex md:flex-row flex-col items-center justify-center min-h-screen md:space-x-10">
      <div className="md:pt-24 pt-32 sm:pl-24 flex items-center justify-center">
        {/* <Background /> */}
        <div className="relative flex items-center justify-center h-full">
          <div className="grid grid-cols-3 grid-rows-3 p-16">
            <motion.div
              className={`${size2} ${inset2} origin-bottom self-end place-self-end bg-gray-900 `}
              animate={{opacity: [0, 1], scaleY: [0, 1]}}
              style={{opacity: 0, scaleY: 0}}
              initial={{opacity: 0, scaleY: 0}}
              transition={{
                duration: 1,
                type: 'spring',
                delay: 0.1,
              }}
            />
            <motion.div
              className={`${size2} ${inset2} origin-top col-start-3 row-start-3 bg-gray-900 `}
              animate={{opacity: [0, 1], scaleY: [0, 1]}}
              style={{opacity: 0, scaleY: 0}}
              initial={{opacity: 0, scaleY: 0}}
              transition={{
                duration: 1.2,
                type: 'spring',
                delay: 0.2,
              }}
            />
            <Letters />
          </div>
        </div>
      </div>
      <div className="p-8 md:flex-grow-0 flex-grow relative z-10 sm:text-left text-center">
        <motion.h1
          animate={{
            opacity: [0, 1],
            y: [-30, 0],
          }}
          style={{opacity: 0}}
          transition={{type: 'spring', duration: 1}}
          className="lg:text-6xl md:text-5xl text-4xl font-semibold max-w-2xl"
        >
          Fast Effective Teams using Modern Jamstack
        </motion.h1>
        <motion.h2
          animate={{
            opacity: [0, 1],
            y: [-20, 0],
          }}
          transition={{type: 'spring', delay: 0.1, duration: 1}}
          style={{opacity: 0}}
          className="text-3xl pt-2 text-gray-width text-brand-red font-funky"
        >
          Learn how in this new course by Jason Lengstorf
        </motion.h2>
      </div>
    </section>
  )
}

export default Hero
