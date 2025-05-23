import { useCounterStore } from "../store/store";

const Zustand = () => {
  //   const [count, setCount] = useState(0);
  const count = useCounterStore((state) => state.count);
  // Best pratcices
  //1. You can do something like :

  //   const {count} = useCounterStore((state) => state); // This is going to give access of everything in store and the app will be less performant
  // Directly access the value -> Reason is it'll return to entire to state from the (state)=>state

  return (
    <div>
      <OtherCompo count={count} />
    </div>
  );
};
const OtherCompo = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const AsyncIncrement = useCounterStore((state) => state.incrementAsync);
  return (
    <div className="text-white">
      {count}

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrewment</button>
      <button onClick={AsyncIncrement}>IncrementAsync</button>
    </div>
  );
};

export default Zustand;
