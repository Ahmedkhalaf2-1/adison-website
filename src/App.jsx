import { useEffect, useState } from "react";
import AppRouter from "./app/router/AppRouter";
import Preloader from "./components/Preloader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isVisible={loading} />
      {!loading && <AppRouter />}
    </>
  );
}