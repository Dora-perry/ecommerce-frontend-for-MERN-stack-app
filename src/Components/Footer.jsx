import styled from "styled-components"
import {
  Facebook,
  Twitter,
  Pinterest,
  Instagram,
  Room,
  Phone,
  MailOutlined,
} from '@material-ui/icons';

const Container = styled.div`
display:flex;



`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding:20px;
`;
const Center = styled.div`
  flex: 1;
  padding:20px;

`;
const Right = styled.div`
  flex: 1;
  padding:20px
`;
const Title = styled.h3`
margin-bottom:30px;
`
const List = styled.ul`
List-style:none;
padding:0;
margin:0;
display:flex;
flex-wrap:wrap
`

const ListItem = styled.li`
width:50%;
margin-bottom:10px
`

const Logo = styled.div`
`
const Desc = styled.p`
margin: 20px 0px
`

const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
align-items:center;
justify-content:center;
display:flex;
background-color:#${props=>props.color};
margin-right:20px;
`
const ContactItem = styled.div`
margin-bottom: 20px;
display:flex;
align-items:center
`
const SocialContainer = styled.div`
display:flex
`
const Payment = styled.img`
width:50%
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          There are so many variations of beautiful wears, that you can buy from
          our store at a very affordable price
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem> Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Whislist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} /> No 6, Archangeldrive, Asaba
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> +234 815674893
        </ContactItem>
        <ContactItem>
          <MailOutlined style={{ marginRight: '10px' }} /> contact@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}

export default Footer