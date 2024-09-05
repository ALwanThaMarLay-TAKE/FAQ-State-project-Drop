import { create } from "zustand";

const useFAQ = create((set) => ({
    faqData :  [
        {
          id: 1,
          question: "What is React?",
          answer:
            "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of the application efficiently.",
            isOpen:false
        },
        {
          id: 2,
          question: "What are components in React?",
          answer:
            "Components are the building blocks of a React application. They are reusable pieces of UI that can manage their own state and can be composed to create complex UIs.",
            isOpen:false
        },
        {
          id: 3,
          question: "What is a state in React?",
          answer:
            "State is an object that holds data that may change over the lifecycle of a component. State is managed within the component and can be updated using the `setState` function in class components or the `useState` hook in functional components.",
            isOpen:false
        },
        {
          id: 4,
          question: "What is a prop in React?",
          answer:
            "Props, short for properties, are read-only components that must be kept pure and immutable. They are used to pass data from a parent component to a child component.",
            isOpen:false
        },
        {
          id: 5,
          question: "What is the difference between state and props in React?",
          answer:
            "State is managed within a component and can change over time, while props are passed to components (child components) from outside and are immutable.",
            isOpen:false
        },
        {
          id: 6,
          question: "What is the Virtual DOM in React?",
          answer:
            "The Virtual DOM is a lightweight representation of the actual DOM in memory. React uses it to optimize updates and rendering by only changing what needs to be updated in the real DOM.",
            isOpen:false
        },
        {
          id: 7,
          question: "What are hooks in React?",
          answer:
            "Hooks are functions that let you 'hook into' React state and lifecycle features from function components. The most commonly used hooks are `useState`, `useEffect`, and `useContext`.",
            isOpen:false
        },
    
      ] , 
      toggleData : (id) => {
        return set((state) => {
            return {
                faqData : state.faqData.map( el => el.id === id ? {...el, isOpen : !el.isOpen} : { ...el , isOpen : false})
            }
        })
        
      }
    
}))
export default useFAQ;