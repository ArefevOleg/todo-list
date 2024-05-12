import styled from "styled-components";
import { BooksType } from "./App";
import { Button } from "./Button";

type PropsType = {
  title: string;
  booksList: BooksType[];
  removeBooks: (booksId: number) => void;
};

export const TodoLIst = ({ title, booksList, removeBooks }: PropsType) => {
  return (
    <BooksWrapper>
      <Title>{title}</Title>
      {booksList.length === 0 ? (
        <NoList>Список книг пуст</NoList>
      ) : (
        <ListWrapper>
          {booksList.map((books) => {
            return (
              <li>
                <input type="checkbox" checked={books.isDone} />
                <span>{books.name}</span>
                <button onClick={() => removeBooks(books.id)}>x</button>
              </li>
            );
          })}
        </ListWrapper>
      )}

      <div>
        <Button title="All" />
        <Button title="Active" />
        <Button title="Completed" />
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
