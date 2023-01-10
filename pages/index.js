import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Powered by Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the gaming app!" />
        <h1>Enjoy Games!</h1>

        <table>
          <tr><td>Game1: </td><td>Catch Pi if you can</td><td><a href="https://neerajsachdeva.github.io/pi-game-wc/" target="iFrameGame"> ==>Play</a></td></tr>
          <tr><td>Game2 </td><td>Snakes & Ladders</td><td> <a href="https://neerajsachdeva.github.io/snake-ladder-game-wc/" target="iFrameGame"> ==>Play</a> </td></tr>


          <iframe name="iFrameGame" src=""></iframe>
        </table>

      </main>

      <Footer />
    </div>
  )
}
