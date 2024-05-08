import "./App.css";
import { Todolist } from "./Todolist";
import React, { useState } from "react";
import styled from "styled-components";

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}


function App() {
  const tasks1: TaskType[] = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: 'Redux', isDone: false },
  ];

  const tasks2: TaskType[] = [
    { id: 1, title: "Hello world", isDone: true },
    { id: 2, title: "I am Happy", isDone: false },
    { id: 3, title: "Yo", isDone: false },
    { id: 4, title: 'Redux', isDone: false },
  ];
  return (
    <Wrapper>
      <Todolist title="Songs" tasks={tasks1} date={"13.13.1666"}/>
      <Todolist title="Books" tasks={tasks2} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin: 30px;
`;
