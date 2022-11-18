import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import {
  Container,
  ContainerItens,
  Input,
  Button,
  ListItem,Trash, Check
} from './styles.js'

function App() {
  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState('')


  function inputMudou(event) {
    console.log(event.target.value)
    setInputTask(event.target.value)
  }

  function cliqueiNoBotao() {
    if(inputTask){
    setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }
  }

  function FinalizarTarefa(id){
    const newList = list.map( item => (
      item.id === id ? { ...item , finished: !item.finished } : item
      ))
      setList(newList)
  }

 function deletarItem(id){
  const newList = list.filter(item => item.id !== id)
  setList(newList)
 }

  return (
    <Container>
      <ContainerItens>
        <Input onChange={inputMudou} placeholder="O que tenha para fazer..." />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (

            list.map((item) => (
              <ListItem isFinished={item.finished}  key={item.id}>
              <Check onClick={()=>FinalizarTarefa(item.id)}/>
              <li>{item.task}</li>
              <Trash onClick={()=> deletarItem(item.id)}/>
              </ListItem>
            ))
            ) : (
              <h3>Não há itens na lista</h3>
            )
          }
        </ul>
      </ContainerItens>
    </Container>
  )
}

export default App
