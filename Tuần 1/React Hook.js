import React, {
    useState,
    useEffect,
    useContext,
    createContext,
    useRef,
    useReducer,
    useMemo,
    useCallback,
  } from "react";
  
  // =============================
  // 1. useState
  // =============================
  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
        <h3>useState</h3>
        <p>Bạn đã bấm {count} lần</p>
        <button onClick={() => setCount(count + 1)}>Tăng</button>
      </div>
    );
  }
  
  // =============================
  // 2. useEffect
  // =============================
  function Timer() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => setSeconds(s => s + 1), 1000);
      return () => clearInterval(interval); // cleanup
    }, []);
    return (
      <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
        <h3>useEffect</h3>
        <p>Đã trôi qua {seconds} giây</p>
      </div>
    );
  }
  
  // =============================
  // 3. useContext
  // =============================
  const UserContext = createContext();
  
  function Child() {
    const user = useContext(UserContext);
    return <p>Xin chào, {user}</p>;
  }
  
  function ContextDemo() {
    return (
      <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
        <h3>useContext</h3>
        <UserContext.Provider value="Hiep">
          <Child />
        </UserContext.Provider>
      </div>
    );
  }
  
  // =============================
  // 4. useRef
  // =============================
  function FocusInput() {
    const inputRef = useRef();
    const handleFocus = () => inputRef.current.focus();
    return (
      <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
        <h3>useRef</h3>
        <input ref={inputRef} type="text" placeholder="Nhập gì đó..." />
        <button onClick={handleFocus}>Focus</button>
      </div>
    );
  }
  
  // =============================
  // 5. useReducer
  // =============================
  function reducer(state, action) {
    switch (action.type) {
      case "increment": return { count: state.count + 1 };
      case "decrement": return { count: state.count - 1 };
      default: return state;
    }
  }
  
  function ReducerDemo() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
      <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
        <h3>useReducer</h3>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
    );
  }
  
  // =============================
  // 6. useMemo & useCallback
  // =============================
  function ExpensiveCalculation(num) {
    console.log("Tính toán lại...");
    return num * 2;
  }
  
  function MemoCallbackDemo() {
    const [count, setCount] = useState(0);
    const result = useMemo(() => ExpensiveCalculation(count), [count]);
    const handleClick = useCallback(() => setCount(c => c + 1), []);
  
    return (
      <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
        <h3>useMemo & useCallback</h3>
        <p>Kết quả: {result}</p>
        <button onClick={handleClick}>Tăng</button>
      </div>
    );
  }
  
  // =============================
  // 7. Custom Hook
  // =============================
  function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
  }
  
  function CustomHookDemo() {
    const width = useWindowWidth();
    return (
      <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
        <h3>Custom Hook</h3>
        <p>Chiều rộng cửa sổ: {width}px</p>
      </div>
    );
  }
  
  // =============================
  // APP
  // =============================
  export default function App() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>React Hook Demo</h1>
        <Counter />
        <Timer />
        <ContextDemo />
        <FocusInput />
        <ReducerDemo />
        <MemoCallbackDemo />
        <CustomHookDemo />
      </div>
    );
  }
  
