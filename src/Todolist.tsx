import styled from "styled-components";
import { Button } from "./Button";
import { ChangeEvent, useState, KeyboardEvent} from 'react' // Импорт функции из библиотеки React
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

  const changerBookTitleHeandler = (event: ChangeEvent<HTMLInputElement>) => {
    setBookTitle(event.currentTarget.value)
  }

  const addBookOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addBooksHandler()
    }
  }

  const changeFilterBooksHandler = (filter: FilterValuesType) => {
    changeFilter(filter)
  }

  return (
    <BooksWrapper>
      <Title>{title}</Title> {/* Отображение заголовка списка */}
      <div>
        <input
          value={bookTitle}
          onChange={changerBookTitleHeandler}
          onKeyUp={addBookOnKeyUpHandler}
        />
        {/* Поле ввода для добавления новой книги */}
        <Button title={"+"} onClick={addBooksHandler} />
      </div>
      {booksList.length === 0 ? ( // Проверка, пуст ли список книг
        <NoList>Список книг пуст</NoList> // Отображение сообщения, если список пуст
      ) : (
        <ListWrapper>
          {booksList.map((book) => {
            const removeBookHandler = () => {
              removeBooks(book.id)
            }
            return (
              <li key={book.id}>
                <input type="checkbox" checked={book.isDone} />
                <span>{book.title}</span> 
                <Button title={"x"} onClick={removeBookHandler} />
              </li>
            );
          })}
        </ListWrapper>
      )}
      <div>
        <Button title={"All"} onClick={() => changeFilterBooksHandler("all")} />
        {/* Кнопка для выбора всех книг */}
        <Button title={"Active"} onClick={() => changeFilterBooksHandler("active")} />
        {/* Кнопка для выбора активных книг */}
        <Button
          title={"Completed"}
          onClick={() => changeFilterBooksHandler("completed")}
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
