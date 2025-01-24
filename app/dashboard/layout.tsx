import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
}

export default function LoginLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}