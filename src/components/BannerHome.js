import React from 'react'
import { useSelector } from 'react-redux'

const BannerHome = () => {

  const bannerData = useSelector(state => state.movieoData.bannerData);

  const imageURL = useSelector(state => state.movieoData.imageURL)

  return (
    <section className='w-full h-full'>
      <div className='flex min-h-full max-h-[95vh]'>
        {
          bannerData.map((data, index) => {
            return (
              <div className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative'>

                <div key={index} className='w-full h-full'>
                  <img
                    src={imageURL + data.backdrop_path}
                    className='h-full w-full object-cover'
                  />
                </div>

                <div>
                <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'> </div>
                </div>

                <div className='container max-auto absolute bottom-0 max-w-md'>
                      <h2>{data.title}</h2>
                </div>

              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default BannerHome
