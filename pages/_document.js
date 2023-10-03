import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/images/favicon.PNG" />
        <link
          async
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&family=Josefin+Sans:wght@100;200;300;400&family=Poppins:wght@200;300;400&display=swap"
          rel="stylesheet" />
      {/* <script type='text/javascript' src='/mouseover.js' /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}