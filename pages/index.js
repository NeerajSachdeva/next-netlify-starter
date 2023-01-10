import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <h1>Enjoy Games!</h1>

		<table>
			<tr><td>Game1: </td><td>Catch the PI</td><td><button type="button" onclick="window.location.href='https://neerajsachdeva.github.io/pi-game-wc/';">Play</button></td></tr>
			<tr><td>Game2: </td><td>Snakes & Ladders</td><td><button type="button" onclick="window.location.href='https://neerajsachdeva.github.io/snake-ladder-game-wc/';">Play</button></td></tr>
		</table>

      </main>

      <Footer />
    </div>
  )
}
