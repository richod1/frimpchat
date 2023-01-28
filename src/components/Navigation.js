import React from "react"
import styled from "styled-components"


const Navigation=()=>{
    return (
        <>
        <Container>
            <Logo>
                <img src="" alt="this is te logo"/>
            </Logo>
            <Link>
            <LinkItem>Home</LinkItem>
            <LinkItem>Home</LinkItem>
            <LinkItem>Home</LinkItem>

            </Link>
            <Account>
                <button>Explore</button>
            </Account>
            <Avatar>
                <img src="https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=600" alt="acct"/>
            </Avatar>

        </Container>
        </>
    )
}

export default Navigation

const Container=styled.div`
width:100vw;
height:65px;
display:flex;
align-self:center;
background-color:powderblue;
`
const Logo = styled.div`
align-items:center;
display:flex;
margin:4px;
`
const Link=styled.ul`
display:flex;
align-items:center;
justify-content:space-between;
`

const LinkItem=styled.li`
display:flex;
justify-content:space-between;
font-style:bold;
font-size:20px;
font-family:sans-serif;
list-style:none;
`

const Account=styled.div`

cursor:pointer;
button{
    cursor:pointer;
    border:none;
    align-items:center;
    display:flex;
    align-self:center;
}
`

const Avatar=styled.div`
display:flex;

img{
    width:50px;
    height:40px;
    border:none;
    border-radius:100%;
    cursour:pointer;
    border-style:none;
    o-object-fit:contain;
}
`