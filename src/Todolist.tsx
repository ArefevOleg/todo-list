import styled from "styled-components";
import { Button } from "./Button";
import { ChangeEvent, useState, KeyboardEvent} from 'react' // Импорт функции из библиотеки React
import { BooksType, FilterValuesType } from "./App"; // Импорт типов BooksType и FilterValuesType из файла App


type PropsType = {
  filter: FilterValuesType;
  title: string;
  booksList: BooksType[]; // Массив объектов типа BooksType, представляющих список книг
  removeBooks: (booksId: string) => void; // Функция для удаления книги по её ID
  changeFilter: (newFilter: FilterValuesType) => void; // Функция для изменения фильтра списка книг
  addBooks: (title: string) => void; // Функция для добавления новой книги
  changeBookStatus: (booksId: string, newStatusValue: boolean) => void; // Функция для изменения статуса книги
};

export const TodoList = ({
  filter,
  title,
  booksList,
  removeBooks,
  changeFilter,
  addBooks,
  changeBookStatus,
}: PropsType) => {
  const [bookTitle, setBookTitle] = useState(""); // Использование useState для управления состоянием заголовка книги
  const [error, setError] = useState<string | null>(null)

  // Обработчик добавления новой книги
const addBooksHandler = () => {
    // Проверяем, что заголовок книги (bookTitle) не пустой после удаления начальных и конечных пробелов
    if (bookTitle.trim() !== "") {
      // Если заголовок книги не пустой, вызываем функцию addBooks, передавая в нее заголовок (обрезанный от лишних пробелов)
      addBooks(bookTitle.trim());
      setBookTitle(""); // Очистка поля ввода после добавления книги
    } else {
      setError('Title is required')
    }
  };
  // Обработчик изменения заголовка книги
  const changeBookTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setBookTitle(event.currentTarget.value); // Обновление состояния заголовка книги
  }

  // Обработчик нажатия клавиши Enter для добавления книги
  const addBookOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    setError(null)
    if (event.key === 'Enter') {
      addBooksHandler(); // Вызов функции добавления книги при нажатии Enter
    }
  }

  // Обработчик изменения фильтра списка книг
  const changeFilterBooksHandler = (filter: FilterValuesType) => {
    changeFilter(filter); // Вызов функции изменения фильтра из компонента App
  }

  // Обработчик изменения статуса книги
  const changeBookStatusHandler = (book: BooksType, e: ChangeEvent<HTMLInputElement>) => {
    const newStatusValue = e.currentTarget.checked; // Получение нового значения статуса книги
    changeBookStatus(book.id, newStatusValue); // Вызов функции изменения статуса книги из компонента App
  }

  return (
    <BooksWrapper>
      <Title>{title}</Title> {/* Отображение заголовка списка */}
      <div>
        <input
        className={error ? 'error' : ''}
          value={bookTitle}
          onChange={changeBookTitleHandler}
          onKeyUp={addBookOnKeyUpHandler}
        />
        {/* Поле ввода для добавления новой книги */}
        <Button title={"+"} onClick={addBooksHandler} />
        {error && <div className={'error-message'}>{error}</div>}
      </div>
      {booksList.length === 0 ? ( // Проверка, пуст ли список книг
        <NoList>Список книг пуст</NoList> // Отображение сообщения, если список пуст
      ) : (
        <ListWrapper>
          {booksList.map((book) => {
            const removeBookHandler = () => {
              removeBooks(book.id); // Вызов функции удаления книги из компонента App
            }
            return (
              <li key={book.id} className={book.isDone ? 'is-done' : ''}>
                <input type="checkbox" checked={book.isDone} onChange={(e) => changeBookStatusHandler(book, e)}/>
                {/* Флажок для отметки выполнения книги */}
                <span>{book.title}</span> 
                {/* Отображение имени книги */}
                <Button title={"x"} onClick={removeBookHandler} />
                {/* Кнопка для удаления книги */}
              </li>
            );
          })}
        </ListWrapper>
      )}
      <ButtonWrapper>
        <Button 
        className={filter === 'all' ? 'active-filter' : ''}
        title={"All"} 
        onClick={() => changeFilterBooksHandler("all")} />
        {/* Кнопка для выбора всех книг */}
        <Button 
        className={filter === 'active' ? 'active-filter' : ''}
        title={"Active"} 
        onClick={() => changeFilterBooksHandler("active")} />
        {/* Кнопка для выбора активных книг */}
        <Button
        className={filter === 'completed' ? 'active-filter' : ''}
          title={"Completed"}
          onClick={() => changeFilterBooksHandler("completed")}
        />{" "}
        {/* Кнопка для выбора завершенных книг */}
      </ButtonWrapper>
    </BooksWrapper>
  );
};

const BooksWrapper = styled.div`
  padding: 20px;
  background-color: #060606;
  border: 3px solid black;
  color: white;
  min-width: 150px;
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

const ButtonWrapper = styled.div`
  display: flexbox;
`