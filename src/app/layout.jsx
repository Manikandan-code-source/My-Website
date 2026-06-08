import '../index.css'
import { ThemeProvider } from '../components/ThemeProvider'

export const metadata = {
  title: 'Manikandan Durairaj - Portfolio',
  description: 'Portfolio of Manikandan Durairaj',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div id="root">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
