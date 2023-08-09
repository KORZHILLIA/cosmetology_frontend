import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '@/redux/store';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}><PersistGate loading={null} persistor={persistor}><RootLayout><Component {...pageProps} /></RootLayout></PersistGate></Provider>
};