import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pomodoro | TzMik</title>
        <meta name="description" content="Aplicación para registrar tus pomodoros diarios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className="pomodoro-text">
            Pomodoro
          </span>
        </h1>
      </main>

    </div>
  )
}