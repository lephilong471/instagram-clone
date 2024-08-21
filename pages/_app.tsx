import './style.css';
import 'nprogress/nprogress.css';
import '../src/i18n/i18n';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Provider } from 'react-redux';
import { store } from '@/store';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import SidebarLayout from '@/Layouts/SidebarLayout';
import { Router } from 'next/router';
import nProgress from 'nprogress';
import { GeneralProvider } from '@/contexts/generalContext';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface Props extends AppProps {
  Component: NextPageWithLayout;
}

function App(props: Props) {
  const { Component, pageProps } = props;
  const getLayout =
    Component.getLayout ??
    ((page: any) => (
      // <Authenticated authRequire>
      <SidebarLayout>{page}</SidebarLayout>
      // </Authenticated>
    ));

  Router.events.on('routeChangeStart', nProgress.start);
  Router.events.on('routeChangeError', nProgress.done);
  Router.events.on('routeChangeComplete', nProgress.done);

  return (
    <Provider store={store}>
      <GeneralProvider>
        <Head>
          <title>Instagram</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </GeneralProvider>
    </Provider>
  );
}

export default App;
