// 元组useState函数
function useState<T>(initialState: T): [T, (newState: T) => void] {
  let state = initialState;
  function setState(newState: T) {
    state = newState;
  }
  return [state, setState];
}
// 初始话count
const [count, setCount] = useState(100);
const [message, setMessage] = useState("hello");
const [bananers, setBananers] = useState<any[]>([]);
export {};
