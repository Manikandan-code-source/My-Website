import '../index.css'

export const metadata = {
  title: 'Manikandan Durairaj - Portfolio',
  description: 'Portfolio of Manikandan Durairaj',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
