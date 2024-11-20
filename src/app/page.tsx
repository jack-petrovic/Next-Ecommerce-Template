import styles from '@/app/ui/home.module.css'
import { lusitana } from "@/app/ui/fonts";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className={styles.shape}>
            <p className = {`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                <strong>Welcome to Acme.</strong> This is the example for the {' '}
                <a href='https://nextjs.org/learn/' className = "text-blue-500">
                    Next.js Learn Course
                </a>
                    , brought to you by vercel
            </p>
            <Image
                src="/hero-desktop.png"
                width={1000}
                height={760}
                className="hidden md:block"
                alt="Screeshots of the dashboard project showing desktop version"
            />
        </div>
      </main>
    </div>
  );
}
