import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

const FavouriteContextProvider = ({ children }) => {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavourite(id) {
    myNewList = [...favouriteMealIds, id];
    setFavouriteMealIds((prevIds) => [...prevIds, id]);
    console.log("state: " + myNewList);
  }

  function removeFavourite(id) {
    myNewList = favouriteMealIds.filter((pId) => pId !== id);
    setFavouriteMealIds((prevIds) => prevIds.filter((pId) => pId !== id));
    console.log("state: " + myNewList);
  }

  function toggleFavourite(id) {
    if (!favouriteMealIds.includes(id)) {
      myNewList = [...favouriteMealIds, id];
      setFavouriteMealIds(myNewList);
      console.log("added");
    } else {
      myNewList = favouriteMealIds.filter((pId) => pId !== id);
      setFavouriteMealIds(myNewList);
      console.log("removed");
    }
  }

  const value = {
    ids: favouriteMealIds,
    addFavourite: toggleFavourite,
    removeFavourite: toggleFavourite,
  };
  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
