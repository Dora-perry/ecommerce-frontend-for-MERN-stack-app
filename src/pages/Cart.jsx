import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import {mobile} from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding: '10px' })}
`;
const Title = styled.h1`
font-weight: 300;
text-align:center
`
const Top = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
padding:20px
`
const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${props=>props.type==='filled' && "none"};
background-color:${props=>props.type === 'filled' ? "black" : "transparent"};
color:${props=>props.type==='filled' && "white"}
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  ${mobile({display: 'none' })}
`;
const Info = styled.div`
  flex: 3;

`;
const Summary = styled.div`
flex:1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding:20px;
height: 50vh;
`

const TopTexts= styled.div``
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const ProductDetails = styled.div`
flex:2;
display:flex
`
const PriceDetail = styled.div`
flex:1;
display:flex;
align-items: center;
flex-direction:column;
justify-content:center
`
const ProductName = styled.span``
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })}
`;
const Hr = styled.hr`
border:none;
background-color:#eee;
height:1px
`
const ProductId = styled.span``
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color: ${props=>props.color}
`
const ProductSize = styled.span`

`
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color:white;
  font-weight:600
`;
const Image = styled.img`
width:200px
`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};

`
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItemPrice = styled.span``
const SummaryItemText = styled.span``
const Details = styled.div`
padding:20px;
display:flex;
flex-direction: column;
justify-content:space-around
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: 'column' })}
`;



const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Whislist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Product:</b>JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b>37.5
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://www.pngarts.com/files/1/T-Shirt-PNG-Transparent-Image.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b>HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b>medium
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart