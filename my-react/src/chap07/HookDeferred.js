import { useDeferredValue, useState } from "react";

export default function HookDefeered() {
  const [text, setText] = useState("");
  const deferText = useDeferredValue(text);

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text, deferText);
  };

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      {[...Array(100000)].map((e, index) => (
        <p key={index}>{deferText}</p>
      ))}
    </>
  );
}
