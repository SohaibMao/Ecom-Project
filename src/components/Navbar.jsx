    import React from 'react'
    import styled from 'styled-components'
    import { Search,Badge } from '@mui/icons-material';
    import { ShoppingCartOutlined } from "@material-ui/icons"
    import { Link } from "react-router-dom";

    const Container = styled.div`
      height: 60px;
    `
    const Wrapper = styled.div`
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
    `
    
    const Left = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
    `
    const Center = styled.div`
      flex: 1;
      text-align: center;
    `
    const Logo = styled.h1`
      font-weight: bold;
      color: black;
      text-decoration: none;
    `

    const Right = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `
    const Language = styled.div`
      font-size: 14px;
      cursor: pointer;
    `
    const SearchContainer = styled.div`
      border: 0.5px solid lightgrey; 
      display: flex;
      align-items: center;
      margin-left: 25px;
      padding: 5px;
    `
    const Input = styled.input`
      border:none;
    `
    const MenuItem = styled.div`
      font-size: 14px;
      cursor: pointer;
      margin-left: 25px;
      color: black;
    `

    const NavbarLink = styled(Link)`
    color: black;
    text-decoration: none;
    `

    const Navbar = () => {
      return (
        <Container>
          <Wrapper>
            <Left>
              <Language>EN</Language>
              <SearchContainer>
                <Input />
                <Search />
              </SearchContainer>
            </Left>
            <Center><Link to="/"><Logo>EcTePro</Logo></Link></Center>
            <Right>
              <MenuItem><NavbarLink to="/ProductList">PRODUCTS</NavbarLink></MenuItem>
              <MenuItem><NavbarLink to="/Register">REGISTER</NavbarLink></MenuItem>
              <MenuItem><NavbarLink to="/Login">SIGN IN</NavbarLink></MenuItem>
              <MenuItem>
                <NavbarLink to="/Cart">
                  <Badge badgeContent={100} color="grey">
                  <ShoppingCartOutlined/>
                  </Badge>
                </NavbarLink>
              </MenuItem>
            </Right>
          </Wrapper>
        </Container>
      )
    }
    
    export default Navbar