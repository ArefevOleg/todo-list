import "./App.css";
import { TodoLIst } from "./TodoList";
import React, { useState } from "react";
import styled from "styled-components";

export type BooksType = {
  id: number;
  name: string;
  isDone: boolean;
};

// let booksListTwo: BooksType[] = [
//   { id: 1, name: "Странник", isDone: false },
//   { id: 1, name: "Питер", isDone: true },
//   { id: 1, name: "Север", isDone: true },
//   { id: 1, name: "Крым", isDone: true },
// ];


export type FilterValuesType = 'All' | 'Active' | 'Completed'

function App() {
  const [booksList, setBooks] = useState<FilterValuesType>('all') (
    [
      { id: 1, name: "Судные дни", isDone: false },
      { id: 2, name: "Дракула", isDone: true },
      { id: 3, name: "Ритуал", isDone: true },
      { id: 4, name: "Чужой", isDone: false },
    ]);

  const removeBooks = (booksId: number) => {
  const filterBooksListOne = booksList.filter((books) => {
    return books.id !== booksId;
  });
  setBooks(filterBooksListOne);
};

const [filter, setFilter] = useState("All")

const chanheFilter = (filter: FilterValuesType) => {
  setFilter(filter)
}

let booksForTodolist = booksList
  if (filter === 'active') {
    booksForTodolist = booksList.filter((book) => !book.isDone)
  }

  if (filter === 'completed') {
    booksForTodolist = booksList.filter((book) => book.isDone)
  }

  return (
    <>
      <AppWrapper>
        {/* <TodoLIst title="Ужасы" removeBooks={removeBooks}/> */}
        <TodoLIst title="Метро 2033" booksList={booksForTodolist} removeBooks={removeBooks} chanheFilter={chanheFilter}/>
      </AppWrapper>
    </>
  );
}

export default App;

const AppWrapper = styled.div`
  margin: 50px;
  display: flex;
  gap: 20px;
`;
