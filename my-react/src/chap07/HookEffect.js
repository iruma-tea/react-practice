import { useEffect, useLayoutEffect, useState } from "react";

const sleep = (delay) => {
  const start = Date.now();
  while (true) {
    if (Date.now() - start > 1000) {
      break;
    }
  }
};

export default function HookEffect({ init }) {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     sleep(2000);
  //     setCount(init);
  //   }, []);

  useLayoutEffect(() => {
    sleep(2000);
    setCount(init);
  }, []);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされました。</p>
    </>
  );
}
