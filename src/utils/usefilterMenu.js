const usefilterMenu = (items, filters) => {
  return items.filter((item) => {
    const { card } = item;
    const { info } = card;

    // Destructuring to simplify access
    const { ribbon, itemAttribute, offerTags } = info;

    // Check against filters
    if (filters.bestSeller && ribbon?.text !== "Bestseller") {
      return false;
    }
    if (filters.showVeg && itemAttribute?.vegClassifier !== "VEG") {
      return false;
    }
    if (filters.showNonVeg && itemAttribute?.vegClassifier !== "NONVEG") {
      return false;
    }
    if (filters.showOffers && (!offerTags || offerTags.length === 0)) {
      return false;
    }

    return true;
  });
};

export default usefilterMenu;

// ANOTHER WAY TO WRITE THIS BUT THE ABOVE WAY IS FAR BETTER AND OPTIMIZED

// import React from "react";

// const usefilterMenu = (items, filters) => {
//   return items.filter((item) => {
//     if (filters.bestSeller && item?.card?.info?.ribbon?.text !== "Bestseller") {
//       return false;
//     }
//     if (
//       filters.showVeg &&
//       item?.card?.info?.itemAttribute?.vegClassifier !== "VEG"
//     ) {
//       return false;
//     }
//     if (
//       filters.showNonVeg &&
//       item?.card?.info?.itemAttribute?.vegClassifier !== "NONVEG"
//     ) {
//       return false;
//     }
//     if (
//       filters.showOffers &&
//       (!item?.card?.info?.offerTags || item?.card?.info?.offerTags.length === 0)
//     ) {
//       return false;
//     }
//     return true;
//   });
// };

// export default usefilterMenu;
