import '../styles/globals.css';

import { wrapper } from '../components/redux/store';

function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
