import Image from 'next/image'

export default function Home() {
    return (
        <main className="max-w-screen-xl mx-auto">
            <div className="grid xl:grid-cols-2 sm:grid-cols-1">
                <div className="left-side py-6">
                    <h1 className="text-5xl font-bold tracking-tighter">Secure your data, no more server
                        concern
                        again</h1>
                    <p className="mt-4 text-lg">With advanced encryption protocols and cutting-edge cybersecurity
                        measures, you can now safeguard your sensitive information with absolute confidence. Bid
                        farewell to sleepless nights and server-related worries, as your data enjoys an impenetrable
                        fortress of protection.</p></div>
                <div className="right-side">
                    <Image src={'/feature-img.png'} alt="Logo" width={400} height={400}/>
                </div>
            </div>
        </main>
    )
}