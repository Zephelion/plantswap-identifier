export const metadata = {
  title: 'Plantswap Identifier',
  description: 'Application used to identify plants',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
        </body>
    </html>
  )
}
