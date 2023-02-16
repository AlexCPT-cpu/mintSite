import "@/styles/globals.css";
import React from "react";
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

export default function App({ Component, pageProps }) {
  const alchemyId = "aSDT-aK1-0jAEVEOfhP4WMB_zCbhbsOX";

  const client = createClient(
    getDefaultClient({
      appName: "Mint Page",
      alchemyId,
    })
  );
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
