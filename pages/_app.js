import '../styles/globals.css'
import { firestore } from '../firebaseConfig'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
