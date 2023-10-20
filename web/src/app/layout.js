import './globals.css'
import Navbar from '../component/Navbar'

export const metadata = {
    title: 'PwC 2023 Triad',
    description: 'Created by Tim Triad for PwC Hackathon Hack A Day 2023',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Navbar/>
        {children}
        </body>
        </html>
    )
}
