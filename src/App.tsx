import "./App.css";
import { TodoLIst } from "./TodoList";
import React, { useState } from "react";
import styled from "styled-components";
import { v1 } from "uuid";

// let booksListTwo: BooksType[] = [
//   { id: 1, name: "Судные дни", isDone: false },
// { id: 2, name: "Дракула", isDone: true },
// { id: 3, name: "Ритуал", isDone: true },
// { id: 4, name: "Чужой", isDone: false },
// ];

export type BooksType = {
  id: string;
  name: string;
  isDone: boolean;
};

export type FilterValuesType = "All" | "Active" | "Completed";

function App() {
  
  const addBooks = () => {
    const newBook: BooksType = {
      id: v1(), // Генерируем уникальный ID
      name: "Новая книга",
      isDone: false,
    };
     // Добавляем новую книгу в начало списка booksList
     const newBooks = [newBook, ...booksList];
     setBooksList(newBooks); // Обновляем состояние booksList
   };



  const [booksList, setBooksList] = useState<BooksType[]>([
    { id: v1(), name: "Странник", isDone: false },
    { id: v1(), name: "Питер", isDone: true },
    { id: v1(), name: "Север", isDone: true },
    { id: v1(), name: "Крым", isDone: true },
  ]);
  // console.log(booksList);

  const [filter, setFilter] = useState<FilterValuesType>("All");

  const removeBooks = (booksId: string) => {
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
          addBooks={addBooks}
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
