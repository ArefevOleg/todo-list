export type PropsType  = {
  title: string
  date?: string
  tasks: Array<TaskType> // массив объектов
}

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}


export type ButtonPropsType = {
  title: string
}