import styled from "styled-components"
import { ShoppingCartOutlined } from "@material-ui/icons"
import { Favorite, Search } from "@mui/icons-material"

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(0,0,0,0.2);
  align-items: center;
  justify-content: center;
  transition: all 0.5 ease; 
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  margin: 4px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: none;

  &:hover ${Info}{
    opacity: 1;
  }
`

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`

const Image = styled.img`
  height: 75%;
  z-index: 2;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: white;
    transform: scale(1.1);
  }
`

const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img}/>
      <Info>
        <Icon>
          <ShoppingCartOutlined/>
        </Icon>
        <Icon>
          <Favorite/>
        </Icon>
        <Icon>
          <Search/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
