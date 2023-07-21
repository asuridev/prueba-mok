import React, { useContext, useEffect, useState } from 'react';
import { Button } from './Button';
import { AppContext } from '../context/AppContext';



export const Header = () => {
  const { toggleThemeTable, sortByCountry, restore, setSearchCountry  } = useContext(AppContext);

  const [search, setSearch] = useState("");

  const onChange =({ target })=>{
    setSearch(target.value);
  }

  useEffect(()=>{
    setSearchCountry(search);
  },[search]);

  return (
   <header className='header'>
     <h1 className='header__title'>Lista de usuarios</h1>
    <section className='header__panel'>
      <Button label="Colorea Filas" onClick={ toggleThemeTable } ></Button>
      <Button label="Ordenar Por Pais" onClick={ sortByCountry } ></Button>
      <Button label="Restaurar Estado Inicial" onClick={ restore } ></Button>
      <input placeholder='Filtrar por pais' className='input-search' type='text' value={search} onChange={onChange}/>
    </section>
   </header>
  )
}
