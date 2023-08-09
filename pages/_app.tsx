import { Provider } from 'react-redux';

import type { AppProps } from 'next/app';
// import { wrapper } from '@/redux/store';

import { store } from '@/redux/store';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}><RootLayout><Component {...pageProps} /></RootLayout></Provider>
};

// export default wrapper.withRedux(App);
