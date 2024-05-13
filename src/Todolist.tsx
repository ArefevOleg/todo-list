import styled from "styled-components";
import { Button } from "./Button";
import React, { useState } from "react"; // Импорт функции useState из библиотеки React
import { BooksType, FilterValuesType } from "./App"; // Импорт типов BooksType и FilterValuesType из файла App

type PropsType = {
  title: string;
  booksList: BooksType[]; // Массив объектов типа BooksType, представляющих список книг
  removeBooks: (booksId: string) => void; // Функция для удаления книги по её ID
  changeFilter: (newFilter: FilterValuesType) => void; // Функция для изменения фильтра списка книг
  addBooks: (title: string) => void; // Функция для добавления новой книги
};

export const TodoList = ({
  title,
  booksList,
  removeBooks,
  changeFilter,
  addBooks,
}: PropsType) => {
  const [bookTitle, setBookTitle] = useState(""); // Использование useState для управления состоянием заголовка книги

  const addBooksHandler = () => {
    addBooks(bookTitle);
    setBookTitle(" ");
  };

  return (
    <BooksWrapper>
      <Title>{title}</Title> {/* Отображение заголовка списка */}
      <div>
        <input
          value={bookTitle}
          onChange={(event) => {
            setBookTitle(event.currentTarget.value);
          }}
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              addBooksHandler();
            }
          }}
        />
        {/* Поле ввода для добавления новой книги */}
        <Button title={"+"} onClick={addBooksHandler} />
      </div>
      {booksList.length === 0 ? ( // Проверка, пуст ли список книг
        <NoList>Список книг пуст</NoList> // Отображение сообщения, если список пуст
      ) : (
        <ListWrapper>
          {booksList.map((book) => {
            // Отображение списка книг
            return (
              <li key={book.id}>
                <input type="checkbox" checked={book.isDone} />{" "}
                {/* Флажок для отметки выполнения книги */}
                <span>{book.title}</span> {/* Отображение имени книги */}
                <Button title={"x"} onClick={() => removeBooks(book.id)} />{" "}
                {/* Кнопка для удаления книги */}
              </li>
            );
          })}
        </ListWrapper>
      )}
      <div>
        <Button title={"All"} onClick={() => changeFilter("All")} />{" "}
        {/* Кнопка для выбора всех книг */}
        <Button title={"Active"} onClick={() => changeFilter("Active")} />{" "}
        {/* Кнопка для выбора активных книг */}
        <Button
          title={"Completed"}
          onClick={() => changeFilter("Completed")}
        />{" "}
        {/* Кнопка для выбора завершенных книг */}
      </div>
    </BooksWrapper>
  );
};

const BooksWrapper = styled.div`
  padding: 20px;
  background-color: #10b2c0;
  border: 3px solid black;
  color: black;
  min-width: 150px;

  &:last-child {
    background-color: #0bd15a;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style-type: none;
  margin-bottom: 10px;
  padding: 5px;
`;

const Title = styled.h3`
  text-align: center;
`;

const NoList = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 5px;
  color: #000000;
`;

// Комментарии добавлены к каждому важному блоку кода:

// PropsType: Определение типов пропсов для компонента TodoList.
// TodoList: Компонент для отображения списка книг и управления им.
// BooksWrapper: Стилизованный контейнер для списка книг.
// inputRef: Создание ссылки на input элемент для доступа к его значению.
// Добавление книги: Обработка события клика на кнопку "+" для добавления новой книги.
// Отображение списка книг: Отображение списка книг с возможностью удаления и изменения статуса.
// Кнопки фильтрации: Кнопки для выбора различных фильтров списка книг.
// Стили: Стилизация компонентов с использованием библиотеки styled-components.
