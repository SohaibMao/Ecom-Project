import { Send } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
  height: 60vh;
  background-color: #FCF5F5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`

const InputContainer = styled.div`
  width: 50%;
  height: 10%;
  background-color: white;
  display:flex;
  justify-content:space-between;
  border: 1px solid lightgrey;
`

const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 20px;
`

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get Timely Updated TO Our Latest Offers.</Description>
      <InputContainer>
        <Input placeholder="Your Email"/>
        <Button>
          <Send/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
