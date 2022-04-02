import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import { store, wrapper } from '../components/store/store'

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default wrapper.withRedux(MyApp)
