import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {

  const [lista, setLista]=useState(['Estudar', 'Ler', 'Exercitar']);

  

  const [novaTarefa, setNovaTarefa] = useState("");


  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };


  const adicionaTarefa = () => {
    setLista([...lista, novaTarefa])
    setNovaTarefa('')
  };

  const removeTarefa = (tarefa) => {
   const novaLista = lista.filter((itemLista) => {
    return (tarefa != itemLista)
   })

   setLista(novaLista)

  };

  const renderizaLista = lista.map((tarefa, index)=>{
    return ( 
    <Tarefa key={index}>
    <p>{tarefa}</p>
    <RemoveButton onClick={()=>removeTarefa(tarefa)}>
     <img src={bin} alt="" width="16px" />
    </RemoveButton>
  </Tarefa>
    )
    
  })

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
         {renderizaLista}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
