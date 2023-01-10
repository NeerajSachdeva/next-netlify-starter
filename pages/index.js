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
          <tr>
			  <td>Game 1: </td>
			  <td><b>Catch Pi if you can</b></td>
			  <td><a href="https://neerajsachdeva.github.io/pi-game-wc/" target="iFrameGame">Try Me!</a></td>
		 </tr>
          <tr>
			  <td>Game 2: </td>
			  <td><b>Snakes & Ladders</b></td>
			  <td> <a href="https://neerajsachdeva.github.io/snake-ladder-game-wc/" target="iFrameGame">Try Me!</a></td>
		  </tr>
       
        </table>
        <iframe name="iFrameGame" class="gameFrame" src=""></iframe>
      </main>

   
    </div>
  )
}
