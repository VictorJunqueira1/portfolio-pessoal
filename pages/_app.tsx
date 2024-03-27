import React from "react";
import { AppProps } from "next/app";
import "../app/globals.css";

const App = ({pageProps, Component}: AppProps) => {
    return <Component {...pageProps} />
}

export default App;