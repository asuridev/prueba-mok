import { createContext, useEffect, useState } from "react";
import { apiRandomUser } from "../api/apiRandomUser";

export const AppContext = createContext();

const initialState = {
  isLoading:true,
  initialUsers:[],
  users:[],
  themeTable:'light',
  searchCountry:""
};

export const Provider = ({ children })=>{

  const [ appState, setAppState ] =  useState(initialState);
 
  const getUsers = async ()=>{
    const { data } = await apiRandomUser.get('/?results=100');
    const infoUsers = data.results.map((user, index) => ({
      url: user.picture.thumbnail,
      name: user.name.first,
      last: user.name.last,
      country: user.location.country,
      id: user.name.first + index
    }));
    setAppState({
      ...appState,
      initialUsers:[...infoUsers],
      users:[...infoUsers],
      isLoading:false,
     }
    );
  }

  const deleteUserById =(id)=>{
    const userFilter = appState.users.filter(user => user.id !== id);
    setAppState({
      ...appState,
      users:[...userFilter]
    });
  };

  const toggleThemeTable = ()=>{
    if(appState.themeTable === 'light'){
      setAppState({
        ...appState,
        themeTable:'dark'
      });
    }else{
      setAppState({
        ...appState,
        themeTable:'light'
      });
    }
  }

  const sortByCountry = () =>{
    const sortCountry = [...appState.users];
    sortCountry.sort( (a, b) => {
      if (a.country > b.country) {
        return 1;
      }
      if (a.country < b.country) {
        return -1;
      }
      return 0;
    });
    setAppState({
      ...appState,
      users:[...sortCountry]
    });
  };

  const sortByName = () =>{
    const sortCountry = [...appState.users];
    sortCountry.sort( (a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    setAppState({
      ...appState,
      users:[...sortCountry]
    });
  };

  const sortByLast = () =>{
    const sortCountry = [...appState.users];
    sortCountry.sort( (a, b) => {
      if (a.last > b.last) {
        return 1;
      }
      if (a.last < b.last) {
        return -1;
      }
      return 0;
    });
    setAppState({
      ...appState,
      users:[...sortCountry]
    });
  };

  const restore = () => {
    setAppState({
      ...appState,
      users:[...appState.initialUsers]
    });
  };

  const setSearchCountry =(country)=>{
    setAppState({
      ...appState,
      searchCountry:country
    });
  }; 

  useEffect(()=>{
    getUsers();
  },[]);


  return( 
    <AppContext.Provider value={{
      ...appState,
      deleteUserById,
      toggleThemeTable,
      sortByCountry,
      sortByName,
      sortByLast,
      restore,
      setSearchCountry
    }}>
      {
        children
      }
    </AppContext.Provider>
  );
}