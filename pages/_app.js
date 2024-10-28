import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [entries, setEntries] = useLocalStorageState("my entries", {
    defaultValue: [],
  });

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} entries={entries} setEntries={setEntries} />
    </>
  );
}
