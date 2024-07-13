import { createContext } from "react";

const useContext = createContext({
  bestSeller: { bestSeller },
  showVeg: { showVeg },
  showNonVeg: { showNonVeg },
  showOffers: { showOffers },
});

export default useContext;
