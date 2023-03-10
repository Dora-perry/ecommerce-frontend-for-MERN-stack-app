
import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import {mobile} from "../responsive"

const Container = styled.div`
`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding: "10px", flexDirection:"column" })}
`;
const ImgContainer = styled.div`
flex:1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height: '40vh' })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding: '10px' })}
`;
const Title = styled.h1`
font-weight: 200;
`
const Desc = styled.p`
margin: 20px 0px
`
const Price = styled.span`
font-weight: 100;
font-size: 40px
`
const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;
const Filter = styled.div`
display:flex;
align-items:center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight:200
`
const FilterColor = styled.div`
width: 20px;
height:20px;
border-radius:50%;
background-color: ${props => props.color};
margin:0px 5px;
cursor:pointer;

`
const FilterSize = styled.select`
margin-left: 10px;
padding:5px
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between ;
  ${mobile({ width: '100%' })};
`;
const AmountContainer = styled.div`
  align-items: center;
  font-weight:700;
  display:flex
`;
const Amount = styled.span`
width: 30px;
height:30px;
border-radius:10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content:center;
margin:0px 5px;

&:hover{
    background-color:#f8f4f4
}

`
const Button = styled.button`
padding:15px;
border:2px solid teal;
background-color: white;
cursor:pointer;
font-weight:500;

`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://www.prada.com/content/dam/pradabkg_products/G/GFP/GFP482/109NF0557/GFP482_109N_F0557_S_222_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.400.500.webp" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Denim is a strong cotton fabric made using a twill weave, which
            creates a subtle diagonal ribbing pattern. The cotton twill fabric
            is warp-facing, meaning that the weft threads go under two or more
            warp threads, and the warp yarns are more prominent on the right
            side.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
              <FilterSizeOption >XS</FilterSizeOption>
              <FilterSizeOption >S</FilterSizeOption>
              <FilterSizeOption >M</FilterSizeOption>
              <FilterSizeOption >L</FilterSizeOption>
              <FilterSizeOption >XL</FilterSizeOption>
              <FilterSizeOption >XS</FilterSizeOption>
              </FilterSize>
            </Filter>
                  </FilterContainer>
                  <AddContainer>
                      <AmountContainer>
                          <Remove />
                          <Amount>1</Amount>
                          <Add/>
                      </AmountContainer>
                      <Button>Add To Cart</Button>
                  </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product