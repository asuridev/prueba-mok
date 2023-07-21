import React, { useContext } from 'react';
import { RowUser } from './RowUser';
import { AppContext } from '../context/AppContext';


export const Table = () => {
  const {isLoading, users, searchCountry,sortByCountry,sortByName,sortByLast } = useContext(AppContext);
  const filterCountry = users.filter(user => user.country.toUpperCase().includes(searchCountry.toUpperCase()));
   
  return (
    <table className='table'>
      <thead>
        <tr>
          <th >Foto</th>
          <th onClick={ sortByName }>Nombre</th>
          <th onClick={ sortByLast } >Apellido</th>
          <th onClick={ sortByCountry } >Pais</th>
          <th>Accion</th>
        </tr>
      </thead>
      {
        !isLoading &&(
          <tbody>
            {
              filterCountry.map(user => (
                <RowUser key={ user.id } user={ user }/>
              ))
            }
          </tbody>
        )
      }
    </table>
  );
}
