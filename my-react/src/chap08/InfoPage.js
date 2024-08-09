import { Link } from "react-router-dom";

export default function InfoPage() {
  return (
    <>
      <p>Infoページ</p>
      <Link to=".." relative="path">
        トップ
      </Link>
    </>
  );
}
