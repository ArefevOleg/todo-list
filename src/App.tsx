import "./App.css";
import { TodoLIst } from "./TodoList";
import React, { useState } from "react";
import styled from "styled-components";

// let booksListTwo: BooksType[] = [
//   { id: 1, name: "Судные дни", isDone: false },
// { id: 2, name: "Дракула", isDone: true },
// { id: 3, name: "Ритуал", isDone: true },
// { id: 4, name: "Чужой", isDone: false },
// ];

export type BooksType = {
  id: number;
  name: string;
  isDone: boolean;
};

export type FilterValuesType = "All" | "Active" | "Completed";

function App() {
  const [booksList, setBooksList] = useState<BooksType[]>([
    { id: 1, name: "Странник", isDone: false },
    { id: 2, name: "Питер", isDone: true },
    { id: 3, name: "Север", isDone: true },
    { id: 4, name: "Крым", isDone: true },
  ]);

  const [filter, setFilter] = useState<FilterValuesType>("All");

  const removeBooks = (booksId: number) => {
    const filteredBooksList = booksList.filter((book) => book.id !== booksId);
    setBooksList(filteredBooksList);
  };

  const changeFilter = (newFilter: FilterValuesType) => {
    setFilter(newFilter);
  };

  let booksForTodoList = booksList;
  if (filter === "Active") {
    booksForTodoList = booksList.filter((book) => !book.isDone);
  } else if (filter === "Completed") {
    booksForTodoList = booksList.filter((book) => book.isDone);
  }

  return (
    <>
      <AppWrapper>
        <TodoLIst
          title="Метро 2033"
          booksList={booksForTodoList}
          removeBooks={removeBooks}
          changeFilter={changeFilter}
        />
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
