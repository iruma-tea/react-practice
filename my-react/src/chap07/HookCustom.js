import useCounter from "./UseCounter";

export default function HookCustom() {
  const [state, handlerUp, handlerDown, handlerReset] = useCounter(0, 1);
  return (
    <>
      <button onClick={handlerUp}>カウントアップ</button>
      <button onClick={handlerDown}>カウントダウン</button>
      <button onClick={handlerReset}>リセット</button>
      <p>{state.count}回、クリックされました。</p>
    </>
  );
}
