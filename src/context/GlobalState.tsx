import React, { useEffect } from 'react'
import { createContext, PropsWithChildren, useContext, useState } from 'react'
// import { mockTodos } from '../temp'
import { IGlobalContext } from '../types/IGlobalContext'
import { ITodo } from '../types/ITodo'
import AsyncStorage from '@react-native-async-storage/async-storage'

// @ts-ignore
const GlobalContext = createContext<IGlobalContext>({})

export const useGlobalContext = (): IGlobalContext => useContext(GlobalContext)

export const GlobalContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [selectedTodoId, setSelectedTodoId] = useState<null | string | number>(null)

  const createTodo = async (todo: Partial<ITodo>) => {
    const newTodo = {
      ...todo,
      id: +todos[todos.length - 1].id + 1,
      createdAt: new Date(),
      isCompleted: false,
    }

    await AsyncStorage.setItem('todos', JSON.stringify([...todos, newTodo]))

    const updatedTodos = await AsyncStorage.getItem('todos')

    if (updatedTodos) {
      const serializedTodos = JSON.parse(updatedTodos).map((todo: ITodo) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
      }))

      setTodos(serializedTodos)
    }
  }

  const updateTodo = async (todo: Partial<ITodo>) => {
    const selectedTodoIndex = todos.findIndex(t => t.id === todo.id)

    if (selectedTodoIndex >= 0) {
      const newTodos = todos.map((oldTodo, index) => {
        if (index === selectedTodoIndex) {
          return { ...oldTodo, ...todo }
        } else {
          return oldTodo
        }
      })

      await AsyncStorage.setItem('todos', JSON.stringify(newTodos))

      const updatedTodos = await AsyncStorage.getItem('todos')

      if (updatedTodos) {
        const serializedTodos = JSON.parse(updatedTodos).map((todo: ITodo) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
        }))

        setTodos(serializedTodos)
      }
    }
  }

  const deleteTodo = async (id: string | number) => {
    const newTodos = todos.filter(todo => todo.id != id)

    await AsyncStorage.setItem('todos', JSON.stringify(newTodos))

    const updatedTodos = await AsyncStorage.getItem('todos')

    if (updatedTodos) {
      const serializedTodos = JSON.parse(updatedTodos).map((todo: ITodo) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
      }))

      setTodos(serializedTodos)
    }
  }

  const addTodo = async (newTodo: ITodo) => {
    const newTodos = [...todos, newTodo]

    await AsyncStorage.setItem('todos', JSON.stringify(newTodos))

    const updatedTodos = await AsyncStorage.getItem('todos')

    if (updatedTodos) {
      const serializedTodos = JSON.parse(updatedTodos).map((todo: ITodo) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
      }))

      setTodos(serializedTodos)
    }
  }

  const getTodos = async () => {
    // uncomment for saving mock todos into async storage
    // await AsyncStorage.setItem('todos', JSON.stringify(mockTodos))

    const todosJson = await AsyncStorage.getItem('todos')

    if (todos) {
      const parsedTodos = JSON.parse(todosJson as string).map((todo: ITodo) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
      }))
      setTodos(parsedTodos)
    }
  }

  const value: IGlobalContext = {
    todos,
    deleteTodo,
    addTodo,
    updateTodo,
    selectedTodoId,
    setSelectedTodoId,
    createTodo,
    getTodos,
  }

  useEffect(() => {
    getTodos()
  }, [])

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}
