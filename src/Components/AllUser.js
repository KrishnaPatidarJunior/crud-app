import {React,useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button } from '@mui/material'
 import { getUsers, deleteUser} from '../Service/api'   
const StyleTable = styled(Table)`
  width:80%;
  margin:50px auto 0 auto;
`
const Thead= styled(TableRow)`
  background:#194522;
  & > th{
    color : #fff;
    font-size: 17px;  
  }
`
const Tbody= styled(TableRow)`
  & > td{
    color : #194522;
    font-size: 15px;  
  }
`
const Buttons = styled(Button)`
  background-color:#194522;
`
function AllUser() {
  const [users, setUsers]=useState([])

  useEffect(()=>{
     getUserDetail();
  },[])
  const getUserDetail= async ()=>{
      let response = await getUsers();
      setUsers(response.data)
  }
  const deleteUserData= async(id)=>{
      await deleteUser(id);
     getUserDetail()

  }

  return (
    <>
      <StyleTable>
        <TableHead>
          <Thead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Modification</TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {
            users.map(user=>(
           <Tbody>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
              <Buttons variant='contained'  style={{marginRight:10}} component ={Link} to ={`/edit/${user.id}`}>Edit</Buttons>
              <Buttons variant='contained' color="secondary" onClick={()=>deleteUserData(user.id)} >Delete</Buttons>
            </TableCell>  
            </Tbody>
            ))
          }
        </TableBody>
    </StyleTable>
    </>
  )
}

export default AllUser
