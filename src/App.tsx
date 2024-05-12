import "./App.css";
import { TodoLIst } from "./TodoList";
import React, { useState } from "react";
import styled from "styled-components";

export type BooksType = {
  id: number;
  name: string;
  isDone: boolean;
};

const booksListOne: BooksType[] = [
  { id: 1, name: "Судные дни", isDone: false },
  { id: 1, name: "Дракула", isDone: true },
  { id: 1, name: "Ритуал", isDone: true },
  { id: 1, name: "Чужой", isDone: false },
];

const booksListTwo: BooksType[] = [
  { id: 1, name: "Странник", isDone: false },
  { id: 1, name: "Питер", isDone: true },
  { id: 1, name: "Север", isDone: true },
  { id: 1, name: "Крым", isDone: true },
];

function App() {
  return (
    <AppWrapper>
      <TodoLIst title="Ужасы" booksList={booksListOne} />
      <TodoLIst title="Метро 2033" booksList={booksListTwo} />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  margin: 50px;
  display: flex;
  gap: 20px;
`;
