import { Inter, Outfit } from 'next/font/google'
import '../index.css'
import { ThemeProvider } from '../components/ThemeProvider'

// Optimize Google Fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata = {
  title: 'Manikandan Durairaj - Portfolio',
  description: 'Portfolio of Manikandan Durairaj',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div id="root">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
