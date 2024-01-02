import { React, useState } from "react";
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";
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
  `;
  const initialValue = { name: "", username: "", email: "", phone: "" };

function AddUser() {
  
  const [users, setUsers] = useState(initialValue);
const navigate = useNavigate()
  const onValueChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };
  const addUserDetail= async()=>{
    await addUser(users)
    navigate('/all')
  }
  return (
    <>
      <Container>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            name="name"
            onChange={(e)=>{onValueChange(e)}}
            
          ></Input>
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input
            name="username"
            onChange={(e)=>{onValueChange(e)}}
            
          ></Input>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            name="email"
            onChange={(e)=>{onValueChange(e)}}
          
          ></Input>
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            name="phone"
            onChange={(e)=>{onValueChange(e)}}
            
          ></Input>
        </FormControl>
        <FormControl>
          <Button onClick={()=>{addUserDetail()}}variant="contained">Add User</Button>
        </FormControl>
      </Container>
    </>
  );
}

export default AddUser;
