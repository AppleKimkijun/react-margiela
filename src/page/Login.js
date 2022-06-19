import React from 'react'
import {Form,Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();

    const loginUser = (event)=>{
        event.preventDefault();
        console.log("loginUser function issue");
        setAuthenticate(true);
        navigate('/')
    }
  return (
    <div className="login_wrap">
      <Form onSubmit={(event)=>loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>ID</Form.Label>
          <Form.Control type="ID" placeholder="ID" />
          <Form.Text className="text-muted">
            ID와 Password를 입력하시면 자동으로 로그인이 됩니다.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit" style={{backgroundColor:"white",border:"1px solid black", color:"black"}}>
          로그인
        </Button>
      </Form>
    </div>
  )
}

export default Login