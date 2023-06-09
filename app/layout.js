import './globals.css'
import styles from "./page.module.css"
import Nav from "./components/Nav"
import Header from './components/Header'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div className={styles.container}>
          <main className={styles.main}>
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
