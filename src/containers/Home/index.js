import React, { useState, useRef } from "react";
import Arrow from '../../assets/arrow.svg'
import axios from 'axios'

/* import { useHistory } from "react-router"; */

import People from '../../assets/people.png'

import { H1 } from "../../components/Title/styles";

import ContainerItens from "../../components/ContainerItens";

import Button from "../../components/Button";

import { Container, Image, InputLabel, Input } from "./styles";

function App() {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
/* const history = useHistory */


  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
   console.log(newUser)
    setUsers([
      ...users,
      newUser,
    ]);

    /* history.push ('/usuarios') */

  }

  //PROPS -> PROPRIEDADES

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />


        {/* <Button onclick = {addNewUser}  */}
        <Button to = "/usuarios" onClick={addNewUser}> 
            Cadastrar <img alt="seta" src={Arrow} />
        </Button>

        

      </ContainerItens>
    </Container>
  );
}

export default App;
