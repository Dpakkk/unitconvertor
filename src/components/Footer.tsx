import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="mt-8 border-t py-6">
      <div className="text-muted-foreground container mx-auto flex flex-col items-center justify-center gap-4 text-center text-sm">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="UnitConvertor Logo"
            width={179}
            height={179}
          />
        </Link>
        <p>
          Built by{' '}
          <Link
            href="https://github.com/Dpakkk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Dpakkk
          </Link>
          . The source code is available on{' '}
          <Link
            href="https://github.com/Dpakkk/unitconvertor"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
