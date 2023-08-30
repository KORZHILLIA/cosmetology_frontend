import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';

import { store, persistor } from '@/redux/store';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';

import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <SessionProvider session={session}>
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
            <ToastContainer />
          </SessionProvider>
      </PersistGate>
    </Provider>);
};