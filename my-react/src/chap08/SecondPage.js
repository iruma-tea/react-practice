import { Link } from "react-router-dom";

export default function SecondPage() {
  return (
    <>
      <h2>Secondページ</h2>
      <hr />
      <p style={{ height: 800 }}></p>
      <p>
        <Link to="/">Firstページ</Link>
      </p>
    </>
  );
}
