import { cn } from '@/lib/utils'
import { Github } from '../Icons/StackIcons/github'
import { Separator } from '../ui/separator'

async function Footer({ footerWidth = 'max-w-3xl' }: { footerWidth?: string }) {
  const year = String(new Date().getFullYear())

  return (
    <footer
      className={cn(
        'container mx-auto flex flex-col py-5 md:px-16',
        footerWidth
      )}
    >
      <Separator className="h-[0.5px] bg-emerald-900/60" />
      <div className="flex items-center py-3 text-sm font-semibold text-[#4B4B4B]">
        <time className="hidden sm:inline" dateTime={String(year)}>
          {year}{' '}
        </time>{' '}
        ©<p>Kreyon</p>
        <a
          className="link ml-auto inline-flex items-center gap-1.5"
          href="https://github.com/krey-yon/www"
          rel="noreferrer"
          target="_blank"
        >
          <Github className="size-5 dark:invert" />
          <span>
            <span className="bg-gradient-to-l from-gray-600 to-gray-300 bg-clip-text text-transparent">
              krey-yon/www
            </span>
          </span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
