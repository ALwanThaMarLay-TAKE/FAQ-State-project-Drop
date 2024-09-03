import React from 'react'
import FaqCart from './FaqCart';

const FaqSection = () => {
    const faqData = [
        {
          id: 1,
          question: "What is React?",
          answer:
            "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of the application efficiently.",
        },
        {
          id: 2,
          question: "What are components in React?",
          answer:
            "Components are the building blocks of a React application. They are reusable pieces of UI that can manage their own state and can be composed to create complex UIs.",
        },
        {
          id: 3,
          question: "What is a state in React?",
          answer:
            "State is an object that holds data that may change over the lifecycle of a component. State is managed within the component and can be updated using the `setState` function in class components or the `useState` hook in functional components.",
        },
        {
          id: 4,
          question: "What is a prop in React?",
          answer:
            "Props, short for properties, are read-only components that must be kept pure and immutable. They are used to pass data from a parent component to a child component.",
        },
        {
          id: 5,
          question: "What is the difference between state and props in React?",
          answer:
            "State is managed within a component and can change over time, while props are passed to components (child components) from outside and are immutable.",
        },
        {
          id: 6,
          question: "What is the Virtual DOM in React?",
          answer:
            "The Virtual DOM is a lightweight representation of the actual DOM in memory. React uses it to optimize updates and rendering by only changing what needs to be updated in the real DOM.",
        },
        {
          id: 7,
          question: "What are hooks in React?",
          answer:
            "Hooks are functions that let you 'hook into' React state and lifecycle features from function components. The most commonly used hooks are `useState`, `useEffect`, and `useContext`.",
        },
        {
          id: 8,
          question: "What is useEffect in React?",
          answer:
            "`useEffect` is a hook that allows you to perform side effects in function components. It replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.",
        },
        {
          id: 9,
          question: "How do you create a React application?",
          answer:
            "To create a new React application, you can use the `Create React App` tool. Run `npx create-react-app my-app` in your terminal, and it will set up a new React application with all necessary configurations.",
        },
        {
          id: 10,
          question: "What is JSX in React?",
          answer:
            "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to HTML. It allows developers to write HTML structures in the same file as JavaScript code.",
        },
      ];
  return (
    <div className=' py-9 px-32 mx-auto'>
    {faqData.map( el => (<FaqCart key={el.id} question={el.question} answer={el.answer} />))}
    
    </div>
  )
}

export default FaqSection