import Image from "next/image"

export const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10'>
        <div className="flex md:w-3/4 flex-col mt-5 px-2">
        <p className="font-extrabold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">Ansh Kumain</p>
        <div className="items-center flex-wrap text-zinc-800 dark:text-zinc-400 mb-5 text-lg font-medium">
        System Engineer at <span className="font-bold bg-slate-200 p-1 rounded-sm dark:text-black px-2">TCS</span>
        </div>
        <div className="text-lg">
        Crafting innovative solutions, Upcoming TCS Engineer with a passion for building impactful products.
        </div>
        </div>
        <div className="relative flex-shrink-1 p-4 md:p-4 md:order-last order-first">
            <Image width={95} height={95} src={"/avatar.jpg"} alt={"avatar"} className="object-contain rounded-lg dark:border-r-white border-2 dark:border-t-white"/>
        </div>
    </div>
  )
}
