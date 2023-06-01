import {
  useState,
  useEffect,
  useContext,
  useRef,
  useReducer,
  useMemo,
} from 'react';
import { ProfileContext } from '../App';

function Traning() {
  return (
    <div className="traning">
      <UseState />
      <hr />
      <UseContext />
      <hr />
      <UseRef />
      <hr />
      <UseReducer />
      <hr />
      <UseMemo />
    </div>
  );
}

function UseState() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    console.log('useEffect');
    // 第二引数に発火タイミングを指定する
  }, [count]);

  return (
    <div className="flex flex-col text-center bg-white p-1 px-3 rounded-sm gap-4">
      <h1 className="text-xl text-gray-800">useState, useEffect</h1>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleClick}
      >
        ＋
      </button>
      <p>{count}</p>
    </div>
  );
}

function UseContext() {
  const profileInfo = useContext(ProfileContext);

  return (
    <div className="flex flex-col text-center bg-white p-1 px-3 rounded-sm gap-4">
      <h1 className="text-xl text-gray-800">useContext</h1>
      <p>{profileInfo.name}</p>
    </div>
  );
}

function UseRef() {
  const [input, setInput] = useState<string | undefined>('');
  const ref = useRef<HTMLInputElement>(null);
  const handleRef = () => {
    setInput(() => ref.current?.value);
  };

  return (
    <div className="flex flex-col text-center bg-white p-1 px-3 rounded-sm gap-4">
      <h1 className="text-xl text-gray-800">useRef</h1>
      <input
        type="text"
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ref={ref}
      />
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleRef}
      >
        UseRef
      </button>
      <p>{input}</p>
    </div>
  );
}

function UseReducer() {
  const reducer = (state: number, action: { type: string }) => {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="flex flex-col text-center bg-white p-1 px-3 rounded-sm gap-4">
      <h1 className="text-xl text-gray-800">UseReducer</h1>
      <p>カウント：{state}</p>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => dispatch({ type: 'increment' })}
      >
        ＋
      </button>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        ー
      </button>
    </div>
  );
}

function UseMemo() {
  const [count01, setCount01] = useState<number>(0);
  const [count02, setCount02] = useState<number>(0);

  // const square = () => {
  //   let i = 0;
  //   // 重い処理
  //   while (i < 10000000000) i++;
  //   return count02 * count02;
  // };

  const square = useMemo(() => {
    let i = 0;
    // 重い処理
    while (i < 1000000000) i++;
    return count02 * count02;
  }, [count02]);

  return (
    <div className="flex flex-col text-center bg-white p-1 px-3 rounded-sm gap-4">
      <h1 className="text-xl text-gray-800">useMemo</h1>
      <div>カウント１：{count01}</div>
      <div>カウント２：{count02}</div>
      <div>平方カウント２結果：{square}</div>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setCount01(count01 + 1)}
      >
        カウント１＋
      </button>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setCount02(count02 + 1)}
      >
        カウント２＋
      </button>
    </div>
  );
}

export default Traning;
