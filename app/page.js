import { Routes } from "@/constants/routes"
import { Github, HomeIcon, Origami } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { YouTubeEmbed } from "@next/third-parties/google"

export default function Home() {
  return (
    <>
      <div className="lg:top-20 tracking-tight">
        <nav className="flex flex-row items-start relative px-2 md:px-0 pb-0 md:overflow-auto scroll-pr-6 md:relative">
          <div className="flex flex-row space-x-8 pr-10">
            <Link
              href={Routes.WEB.Home}
              className="flex items-center gap-x-1 cursor-pointer"
            >
              <HomeIcon size={16} />
              Home
            </Link>
            <Link
              href={Routes.Socials.LastMVP}
              target="_blank"
              className="flex items-center gap-x-1 hover:underline underline-offset-4 cursor-pointer"
            >
              <Origami size={16} />
              LastMVP
            </Link>
            <Link
              href={Routes.Socials.Github}
              target="_blank"
              className="flex items-center gap-x-1 hover:underline underline-offset-4 cursor-pointer"
            >
              <Github size={16} />
              Github
            </Link>
          </div>
        </nav>
      </div>
      <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
        <section>
          <h1 className="my-8 text-2xl font-medium tracking-tighter">
            İbrahim Sarıkaya
          </h1>
          <p className="text-start mx-auto mb-4">
            I am a fullstack developer and love helping people. I work as a
            freelancer on Upwork.
          </p>
          <p className="text-start mx-auto mb-4">
            I have been developing scalable applications for the last 7 years. I
            build almost everything with javascript. I have been discovering new
            things about ai for 2 years.
          </p>
          <p className="text-start mx-auto mb-4">
            In the summer of 2024, I founded LastMVP, where we develop
            MVP-focused projects.
          </p>
          <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
            <div className="relative h-72">
              <Image
                src="/bento-grid/neo.png"
                className="rounded-lg object-cover"
                layout="fill"
                alt="neo"
              />
            </div>
            <div className="relative sm:row-span-2 row-span-1">
              <Image
                src="/bento-grid/tr-soldier.png"
                className="rounded-lg object-cover object-top sm:object-center"
                layout="fill"
                alt="rome"
              />
            </div>
            <div className="relative">
              <Image
                src="/bento-grid/speaker.png"
                className="rounded-lg object-cover"
                layout="fill"
                alt="speaker"
              />
            </div>
            <div className="relative row-span-2">
              <Image
                src="/bento-grid/star-wars.png"
                className="rounded-lg object-cover sm:object-center"
                layout="fill"
                alt="speaker"
              />
            </div>
            <div className="relative row-span-2">
              <Image
                src="/bento-grid/rome.png"
                className="rounded-lg object-cover"
                layout="fill"
                alt="speaker"
              />
            </div>
            <div className="relative h-72">
              <Image
                src="/bento-grid/violinist.png"
                className="rounded-lg object-cover"
                layout="fill"
                alt="speaker"
              />
            </div>
          </div>
          <p className="text-start mx-auto mb-4">
            I used Black Forest Labs' FLUX 1 Model. I only used 3 of my photos
            to train FLUX Lora. I had a lot of fun doing this.
          </p>
          <YouTubeEmbed videoid="-QxI-RP6-HM" />
          <p className="text-start mx-auto my-4">
            This video changed my perspective significantly and made me take
            good action in my life. Many thanks to Bjarne Stroustrup.
          </p>
        </section>
      </main>
      <footer className="mb-4">
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="mt-8 text-sm text-label">
          © {+new Date().getFullYear()} İbrahim Sarıkaya All Rights
          Reserved.
        </span>
      </footer>
    </>
  )
}
