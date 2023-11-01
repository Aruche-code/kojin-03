// これらのスタイルは、アプリケーション内のすべてのルートに適用されます(TailWindCSS)
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
