import styled from 'styled-components'
import { BooksType } from "./App"

type PropsType = {
  title: string
  booksList: BooksType[]
}

export const TodoLIst = ({title, booksList}: PropsType) => {
  return (
    <BooksWrapper>
      <Title>{title}</Title>
      <ListWrapper>
       {booksList.map((books) => {
        debugger
        return (
          <li>
            <input type="checkbox" checked={books.isDone}/>
            <span>{books.name}</span>
          </li>
        )
       }
      )}
      </ListWrapper>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </BooksWrapper>
  );  
};


const BooksWrapper = styled.div`
padding: 20px;
background-color: #10b2c0;
border: 3px solid black;
color: black;

&:hover {
  outline: 3px solid red;
}

&:last-child {
  background-color: #0bd15a;
}
`

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style-type: none; 
  margin-bottom: 10px;
` 
const Title = styled.h3`
    
`