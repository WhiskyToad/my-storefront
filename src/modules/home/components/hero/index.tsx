import Image from "next/image"
import PostCodeInput from "../PostCodeInput/PostCodeInput"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <PostCodeInput />
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Find your new favourite today
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
        Find your friendly neighborhood grocery. Food shopping has never been this fun! Local treasures await you.
        </p>
      </div>
      <Image
        src="/hero.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
