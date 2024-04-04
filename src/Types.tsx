export type PropsType  = {
  title: string
  date?: string
  tasks: Array<TaskType> // анологично tasks2: TaskType[], массив объектов
  removeTask: (taskId: number) => void
  changeFilter: (filter: FilterValuesType) => void
}

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}


export type ButtonPropsType = {
  title: string
  onClick?: () => void
}


export type FilterValuesType = 'all' | 'active' | 'completed'