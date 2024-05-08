import "./App.css";
import { Todolist } from "./Todolist";
import React, { useState } from "react";
import styled from "styled-components";

function App() {
  return  (
    <Wrapper>
      <Todolist title="Whtat to learn"/>
      <Todolist title="Songs"/>
      <Todolist title="Books"/>
    </Wrapper>
  )
}
 
export default App;

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin: 30px;
`