import Image from 'next/image'
import React from 'react'

const Tools = () => {
  return (
    <div className='px-6 md:px-20'>
        <h1 className='pt-10 pb-2 text-center text-4xl drop-shadow-xl'>Tech Tools</h1>
        <p className='text-sm font-medium text-gray-700 text-center mb-10'>Quality but Affordable Websites: Thaba Webs</p>
        <div>
          <div className='flex flex-wrap gap-10 justify-center'>
            <div className='flex flex-col items-center'>
              <Image
              className='animate-rotate-x animate-infinite animate-duration-[3000ms] animate-delay-200'
              src="/tools/nextjs.svg"
              alt="nextjs"
              width={40}
              height={40}
              />
              <p className="text-lg font-medium text-green-700 mb-10">Next.JS</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image
              src="/tools/react.gif"
              alt="react"
              width={40}
              height={40}
              />
              <p className="text-lg font-medium text-green-700 mb-10">React.JS</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image
              className="animate-rotate-y animate-infinite animate-duration-[3000ms] animate-delay-200"
              src="/tools/ts.png"
              alt="typescript"
              width={40}
              height={40}
              />
              <p className="text-lg font-medium text-green-700 mb-10">Typescript</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image
              src="/tools/js.gif"
              alt="javascript"
              width={40}
              height={40}
              />
              <p className="text-lg font-medium text-green-700 mb-10">Javascript</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image
              src="/tools/html.gif"
              alt="html"
              width={40}
              height={40}
              />
              <p className="text-lg font-medium text-green-700 mb-10">HTML</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-10 justify-center">
          <div className='flex flex-col items-center'>
                <Image
                className='animate-rotate-y animate-infinite animate-duration-[3000ms] animate-delay-200'
                src="/tools/node-js.png"
                alt="node"
                width={40}
                height={40}
                />
                <p className="text-lg font-medium text-green-700 mb-10">Node.JS</p>
              </div>
          </div>
          <div className="flex flex-wrap gap-10 justify-center">
            <div className='flex flex-col items-center'>
                <Image
                className='animate-jump animate-infinite animate-duration-[3000ms] animate-delay-200'
                src="/tools/tailwind.png"
                alt="tailwind"
                width={65}
                height={65}
                />
                <p className="text-lg font-medium text-green-700 mb-10">TailwindCSS</p>
              </div>
              <div className='flex flex-col items-center'>
                  <Image
                  className='animate-wiggle-more animate-infinite animate-duration-[3000ms] animate-delay-200'
                  src="/tools/css.png"
                  alt="CSS"
                  width={40}
                  height={40}
                  />
                  <p className="text-lg font-medium text-green-700 mb-10">CSS</p>
                </div>
          </div>

          <div className="flex flex-wrap gap-10 justify-center">
            <div className='flex flex-col items-center'>
                <Image
                className='animate-jump animate-infinite animate-duration-[3000ms] animate-delay-200'
                src="/tools/mongo.png"
                alt="mongo"
                width={49}
                height={49}
                />
                <p className="text-lg font-medium text-green-700 mb-10">MongoDB</p>
              </div>
              <div className='flex flex-col items-center'>
                  <Image
                  className='animate-rotate-x animate-infinite animate-duration-[3000ms] animate-delay-200'
                  src="/tools/prisma.svg"
                  alt="prisma"
                  width={40}
                  height={40}
                  />
                  <p className="text-lg font-medium text-green-700 mb-10">PrismaDB</p>
                </div>
              <div className='flex flex-col items-center'>
                  <Image
                  className='animate-rotate-y animate-infinite animate-duration-[3000ms] animate-delay-200'
                  src="/tools/supabase.svg"
                  alt="supabase"
                  width={48}
                  height={48}
                  />
                  <p className="text-lg font-medium text-green-700 mb-10">Supabase</p>
                </div>
          </div>

          <div className='flex flex-wrap gap-10 justify-center'>
            <div className='flex flex-col items-center'>
              <Image
              src="/tools/github.gif"
              alt="github"
              width={40}
              height={40}
              />
              <p className="text-lg font-medium text-green-700 mb-10">Git & GitHub</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image
              className='animate-wiggle-more animate-infinite animate-duration-[3000ms] animate-delay-200'
              src="/tools/api.png"
              alt="api"
              width={40}
              height={40}
              />
              <p className="text-lg font-medium text-green-700 mb-10">APIs</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Tools
