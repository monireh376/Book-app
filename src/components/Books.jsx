import { useState } from "react";

import { books } from "../constants/mockData";
import BookCard from "./BookCard";
function Books() {
  const [liked, setLiked] = useState([]);

  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }

    console.log(liked)
  };
  return (
    <div>
      <div>
        {books.map((book) => (
          <BookCard
            key={book.id}
            data={book}
            handleLikedList={handleLikedList}
          />
        ))}
      </div>
      {!!liked.length && <div>ffff</div>}
    </div>
  );
}

export default Books;
