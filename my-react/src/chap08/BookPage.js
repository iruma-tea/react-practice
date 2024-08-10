import { useParams } from "react-router-dom";
import books from "../chap07/books";
import MyHeader from "./MyHeader";

export default function BookPage() {
  // const params = useParams();
  //   return <p>ISBNコード 「{params.isbn}」のページです。</p>;
  const { isbn = "987-4-8156-0182-9" } = useParams();
  // const { title, summary } = books.find((b) => isbn === b.isbn);

  if (!/978-4-[0-9]{2,7}-[0-9]{2,7}-[0-9X]/.test(isbn)) {
    throw new RangeError("ISBN is invalid");
  }

  return (
    <>
      {/* <MyHeader title={title} keywords={title} summary={summary} /> */}
      <p>ISBNコード 「{isbn}」のページです。</p>
    </>
  );
}
