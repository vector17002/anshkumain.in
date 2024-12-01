import { Download } from "lucide-react"
import Image from "next/image"
import { MdLocationPin } from "react-icons/md"

export const Hero = () => {
  return (
    <div id="home" className='flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10'>
        <div className="flex md:w-4/5 flex-col mt-10 px-2">
        <p className="font-extrabold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">Ansh Kumain</p>
        <div className="items-center flex-wrap text-zinc-800 dark:text-zinc-300 mb-5 text-lg font-medium">
        System Engineer
        at <span className="font-bold bg-slate-200 p-1 rounded-sm dark:text-black px-2">TCS</span>
        </div>
        <div className="text-base w-full">
        Software engineer passionate about building scalable applications. Connect with me on <a href="https://www.linkedin.com/in/ansh-kumain/" target="_blank" className="font-semibold px-1 bg-slate-200 rounded-sm dark:text-black">LinkedIn</a> and <a href="https://x.com/ansh_kumain/" target="_blank" className="font-semibold bg-slate-200 px-1 rounded-sm dark:text-black">Twitter</a>
        </div>
        </div>
        <div className="relative flex-shrink-1 p-4 md:p-4 md:order-last order-first">
            <Image width={100} height={100} src={"/avatar.jpg"} alt={"avatar"} className="object-contain rounded-lg dark:border-r-white border-2 dark:border-t-white"/>
            <div className="text-sm font-medium flex items-center my-1"> <MdLocationPin/> Delhi, India</div>
            <a
  href="/AnshKumainResume.pdf"
  download="AnshKumain_Resume.pdf"
  className="flex items-center gap-2 text-sm p-2 border-2 rounded-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
>
<Download className="w-4 h-4"/>
  <span>Resume</span>
</a>
    </div>
    </div>
  )
}
