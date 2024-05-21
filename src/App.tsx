import "./App.css";
import { TodoList } from "./TodoList"; // Импорт компонента TodoList
import React, { useState } from "react"; // Импорт функции useState из React
import styled from "styled-components"; // Импорт библиотеки styled-components для стилизации
import { v1 } from "uuid"; // Импорт функции v1 из библиотеки uuid для генерации уникальных ID

export type BooksType = {
  id: string;
  title: string;
  isDone: boolean;
};

type TodolistType = {
  id: string
  title: string
  filter: FilterValuesType
}

export type FilterValuesType = "all" | "active" | "completed";

function App() {
  
  // Функция для добавления новой книги в список
  const addBooks = (title: string) => {
    const newBook: BooksType = {
      id: v1(), // Генерируем уникальный ID для новой книги
      title,
      isDone: false,
    };
    
    // Добавляем новую книгу в начало списка booksList
    const newBooks = [newBook, ...booksList];
    setBooksList(newBooks); // Обновляем состояние booksList
  };

  // Состояние для списка книг
  const [booksList, setBooksList] = useState<BooksType[]>([
    { id: v1(), title: "Странник", isDone: false },
    { id: v1(), title: "Питер", isDone: false },
    { id: v1(), title: "Север", isDone: true },
    { id: v1(), title: "Крым", isDone: true },
  ]);

  // Состояние для фильтрации списка книг
  const [filter, setFilter] = useState<FilterValuesType>("all");

  // Функция для удаления книги из списка по ID
  const removeBooks = (booksId: string) => {
    const filteredBooksList = booksList.filter((book) => book.id !== booksId);
    setBooksList(filteredBooksList); // Обновляем состояние booksList
  };

  // Функция для изменения фильтра списка книг
  const changeFilter = (newFilter: FilterValuesType) => {
    setFilter(newFilter); // Обновляем состояние filter
  };

  // изменения статуса книги
  const changeBookStatus = (bookId: string, newStatus: boolean) => {
    const updatedBooks = booksList.map((book) =>
      book.id === bookId ? { ...book, isDone: newStatus } : book
    );
    setBooksList(updatedBooks); 
  };
  

  // Фильтрация списка книг в зависимости от выбранного фильтра
  let booksForTodoList = booksList;
  if (filter === "active") {
    booksForTodoList = booksList.filter((book) => !book.isDone);
  } else if (filter === "completed") {
    booksForTodoList = booksList.filter((book) => book.isDone);
  }



  let [todolists, setTodolists] = useState<TodolistType[]>([
    { id: v1(), title: 'What to learn', filter: 'all' },
    { id: v1(), title: 'What to buy', filter: 'all' },
  ])
  // Отображение компонента TodoList с передачей необходимых пропсов
  return (
    <>

    {todolists. map((el) => {
      return (
        <AppWrapper>
        <TodoList
        key={el.id}
         filter={el.filter}
          title={el.title}
          booksList={booksForTodoList}
          removeBooks={removeBooks}
          changeFilter={changeFilter}
          addBooks={addBooks}
          changeBookStatus={changeBookStatus}
        />
      </AppWrapper>
      )
    })
    
    
    }
     
    </>
  );
}

export default App;

// Стилизованный контейнер для компонента App
const AppWrapper = styled.div`
  margin: 50px;
  display: flex;
  gap: 20px;
`;