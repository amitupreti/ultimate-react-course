export const faqs = [
  {
    title: "What is React?",
    text: (
      <p>
        React is a JavaScript library for building user interfaces. It is
        maintained by Facebook and a community of individual developers and
        companies.
      </p>
    ),
  },
  {
    title: "How do you create a React component?",
    text: (
      <p>
        A React component can be created as a function or a class. Function
        components are simpler and are the preferred way to create components in
        modern React.
      </p>
    ),
  },
  {
    title: "What is JSX?",
    text: (
      <p>
        JSX stands for JavaScript XML. It is a syntax extension for JavaScript
        that looks similar to XML or HTML. JSX is used with React to describe
        what the UI should look like.
      </p>
    ),
  },
  {
    title: "What are props in React?",
    text: (
      <p>
        Props (short for properties) are read-only attributes that are passed
        from a parent component to a child component. They are used to pass data
        and event handlers to child components.
      </p>
    ),
  },
  {
    title: "What is state in React?",
    text: (
      <p>
        State is a built-in object that stores property values that belong to a
        component. When the state object changes, the component re-renders.
      </p>
    ),
  },
  {
    title: "What is the difference between state and props?",
    text: (
      <p>
        Props are read-only and are passed from parent to child components,
        while state is managed within the component and can change over time.
      </p>
    ),
  },
  {
    title: "How do you handle events in React?",
    text: (
      <p>
        Events in React are handled using event handlers, which are functions
        that are called when an event occurs. Event handlers are passed as props
        to the elements that should handle the events.
      </p>
    ),
  },
  {
    title: "What are hooks in React?",
    text: (
      <p>
        Hooks are functions that let you use state and other React features in
        function components. The most commonly used hooks are useState and
        useEffect.
      </p>
    ),
  },
  {
    title: "What is the useEffect hook?",
    text: (
      <p>
        The useEffect hook lets you perform side effects in function components.
        It is similar to lifecycle methods in class components, such as
        componentDidMount, componentDidUpdate, and componentWillUnmount.
      </p>
    ),
  },
  {
    title: "How do you conditionally render components in React?",
    text: (
      <p>
        You can conditionally render components in React using JavaScript
        conditional statements like if-else or the ternary operator. For
        example:
      </p>
    ),
  },
  {
    title: "What are the benefits of using React?",
    text: (
      <div>
        <p>React offers several benefits:</p>
        <ul>
          <li>
            <strong>Component-Based Architecture</strong>: React allows to build
            encapsulated components that manage their own state, then compose
            them to make complex UIs.
          </li>
          <li>
            <strong>Declarative UI</strong>: React makes it easy to create
            interactive UIs. Design simple views for each state in your
            application, and React will efficiently update and render just the
            right components when your data changes.
          </li>
          <li>
            <strong>Virtual DOM</strong>: React uses a virtual DOM to improve
            performance. When the state of an object changes, React updates the
            virtual DOM first, then it compares the virtual DOM with a snapshot
            of the previous virtual DOM and updates only the changed parts in
            the real DOM.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "How do you manage state in a large React application?",
    text: (
      <div>
        <p>
          Managing state in a large React application can be challenging. Here
          are some strategies:
        </p>
        <ol>
          <li>
            <strong>Local State</strong>: Use the <code>useState</code> hook for
            local state management in function components.
          </li>
          <li>
            <strong>Context API</strong>: Use the Context API to pass data
            through the component tree without having to pass props down
            manually at every level.
          </li>
          <li>
            <strong>State Management Libraries</strong>: Use state management
            libraries like Redux, MobX, or Recoil for more complex state
            management needs.
          </li>
        </ol>
        <p>
          Each of these strategies has its own use cases and trade-offs, so it's
          important to choose the one that best fits your application's
          requirements.
        </p>
      </div>
    ),
  },
];
