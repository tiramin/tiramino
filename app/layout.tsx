import type { Metadata } from 'next'
import { pretendard } from '@/styles/fonts'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: `mkk's 개발 스토리`,
  description: `프론트엔드 개발자 mkk의 기술 블로그입니다. \n 주요 기술 스택: React, Next.js, Typescript`,
  keywords: [
    '웹 개발자',
    '프론트엔드 개발자',
    'React',
    'Next.js',
    'Typescript',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard`}>
        {children}
      </body>
    </html>
  )
}
