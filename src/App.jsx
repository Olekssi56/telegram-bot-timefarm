import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CardsAddCards from "./pages/CardsAddCards";
import CardsAddCards1 from "./pages/CardsAddCards1";
import BalanceTransaction from "./pages/BalanceTransaction";
import Statistics from "./pages/Statistics";
import BalanceTransaction1 from "./pages/BalanceTransaction1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/cardsadd-cards1":
        title = "";
        metaDescription = "";
        break;
      case "/balancetransaction":
        title = "";
        metaDescription = "";
        break;
      case "/statistics":
        title = "";
        metaDescription = "";
        break;
      case "/balancetransaction1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CardsAddCards />} />
      <Route path="/cardsadd-cards1" element={<CardsAddCards1 />} />
      <Route path="/balancetransaction" element={<BalanceTransaction />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/balancetransaction1" element={<BalanceTransaction1 />} />
    </Routes>
  );
}
export default App;
