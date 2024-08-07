import { forwardRef } from "react";

// export default function MyTextBox({ label, ref }) {
//   return (
//     <label>
//       {label}:
//       <input type="text" size="15" ref={ref} />
//     </label>
//   );
// }

const MyTextBox = forwardRef(({ label }, ref) => (
  <label>
    {label}:
    <input type="text" size="15" ref={ref} />
  </label>
));

export default MyTextBox;
