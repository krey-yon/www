'use client'
import Image from 'next/image'
import BentoCard from './BentoCard'
import Sanji2 from '../../../../public/images/arima.jpg'

const AnimeCard2 = () => {
  return (
    <BentoCard className="relative col-span-2 row-span-1 h-56 p-0 transition-all duration-500 hover:scale-95 xs:col-span-1 xs:row-span-2">
      <button className="group size-full">
        <Image
          alt="anime"
          width={438}
          height={1100}
          placeholder="blur"
          src={Sanji2}
          className="size-full object-cover transition-all duration-500 group-hover:scale-[1.35]"
        />
      </button>
    </BentoCard>
  )
}
export default AnimeCard2
