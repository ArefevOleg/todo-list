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

  // Фильтрация списка книг в зависимости от выбранного фильтра
  let booksForTodoList = booksList;
  if (filter === "active") {
    booksForTodoList = booksList.filter((book) => !book.isDone);
  } else if (filter === "completed") {
    booksForTodoList = booksList.filter((book) => book.isDone);
  }

  // Отображение компонента TodoList с передачей необходимых пропсов
  return (
    <>
      <AppWrapper>
        <TodoList
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

// Стилизованный контейнер для компонента App
const AppWrapper = styled.div`
  margin: 50px;
  display: flex;
  gap: 20px;
`;


// Комментарии добавлены к следующим частям кода:

// import: Импорт необходимых модулей и компонентов.
// BooksType и FilterValuesType: Определение типов данных для книг и фильтров.
// useState: Использование хуков useState для управления состоянием.
// addBooks: Функция для добавления новой книги в список.
// booksList: Состояние списка книг.
// removeBooks: Функция для удаления книги из списка по ID.
// changeFilter: Функция для изменения текущего фильтра списка.
// filter: Состояние текущего фильтра списка.
// booksForTodoList: Фильтрация списка книг в зависимости от выбранного фильтра.
// TodoList: Использование компонента TodoList для отображения списка книг с применением фильтрации и управлением состоянием.
// AppWrapper: Стилизованный контейнер для компонента App.
