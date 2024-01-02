import { React, useState, useEffect } from "react";
import { getUser, editUser } from "../Service/api";
import { useNavigate, useParams } from "react-router-dom";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  Button,
  styled,
} from "@mui/material";
const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
      margin-top: 20px;
    }
  `
  const Buttons = styled(Button)`
  background-color:#194522;
`;
  const initialValue = { name: "", username: "", email: "", phone: "" };

function EditUser() {
  
const [users, setUsers] = useState(initialValue);
const navigate = useNavigate()
const {id} = useParams();
useEffect (()=>{
  getUserData()
},[])

const getUserData = async()=>{
let response = await getUser(id)
setUsers(response.data)
}
  const onValueChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };
  const addUserDetail= async()=>{
    await editUser(users, id)
    navigate('/all')
  }
  return (
    <>
      <Container>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            name="name"
            onChange={(e)=>{onValueChange(e)}}
            value={users.name}
          ></Input>
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input
            name="username"
            onChange={(e)=>{onValueChange(e)}}
            value={users.username}
          ></Input>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            name="email"
            onChange={(e)=>{onValueChange(e)}}
            value={users.email}
          ></Input>
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            name="phone"
            onChange={(e)=>{onValueChange(e)}}
            value={users.phone}
          ></Input>
        </FormControl>
        <FormControl>
          <Buttons onClick={()=>{addUserDetail()}}variant="contained">Edit User</Buttons>
        </FormControl>
      </Container>
    </>
  );
}

export default EditUser;
