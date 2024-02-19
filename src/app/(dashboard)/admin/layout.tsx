export const metadata = {
  title: 'Content Manager | Portfolio',
  description: 'Manage content for the portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{margin: 0, padding: 0}}>{children}</body>
    </html>
  )
}
