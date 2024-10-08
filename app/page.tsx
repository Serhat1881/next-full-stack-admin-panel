import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import styles from '@/app/ui/home.module.css'
import { lusitana } from '@/app/ui/fonts'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-customOrange-600 p-4 md:h-52">
      <span className="block text-4xl font-bold tracking-wide md:text-5xl text-white">
              Y<span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>Tech</span>
      </span>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className={styles.shape} />
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to YTech.</strong> This is an example dashboard named{' '}
            <strong>YTech</strong>.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-customOrange-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-customOrange-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={500}
            height={460}
            className="hidden md:block"
            alt="Screenshots of the Baz dashboard showing desktop version"
          />

          <Image
            src="/hero-desktop.png"
            width={360}
            height={420}
            className="block md:hidden"
            alt="Screenshot of the Baz dashboard showing mobile version"
          />
        </div>
      </div>
    </main>
  )
}
