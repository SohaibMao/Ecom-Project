import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`

const Button = styled.button`
  width: 40%;
  height: 30%;
  margin-top: 3px;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Register = () => {
  return (
    <div>
      <Navbar/>
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
              I agree to all the bla bla info & <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Register;