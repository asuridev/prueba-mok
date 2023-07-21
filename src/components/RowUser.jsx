import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const RowUser = ({ user }) => {
  const { deleteUserById, themeTable } = useContext(AppContext);

  return (
    <tr className={themeTable === 'dark' ? 'dark' : 'row-user'}>
      <td className="center"> <img src={user.url} alt="" /> </td>
      <td className="center">{ user.name}</td>
      <td className="center">{ user.last}</td>
      <td className="center">{ user.country}</td>
      <td className="center">
        <button onClick={()=>deleteUserById(user.id)} className='button'>Delete</button>
      </td>
    </tr>
  )
}
