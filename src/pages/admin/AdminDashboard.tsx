import { useEffect, useState } from "react";
import { supabaseClient } from "@/providers/supabaseClient.ts";
import CardLayout from "@/components/cards/CardLayout.tsx";
interface IBooks {
  id: number;
  book: string;
  author_id: number;
}

export const AdminDashboard = ({ role }: { role: string }) => {
  const [books, setBooks] = useState<IBooks[]>([]);

  useEffect(() => {
    const refreshToken = async () => {
      await supabaseClient.auth.refreshSession();
    };
    const getBooks = async () => {
      const { data, error } = await supabaseClient.from("books_example").select();
      if (error) throw error;

      setBooks(data);
    };
    refreshToken().then();
    getBooks().then();
  }, [setBooks]);

  useEffect(() => {
    const getUsers = async () => {
      const { data, error } = await supabaseClient
        .schema("auth")
        .from("users")
        .select();

      if (error) throw error;
      console.log(data);
    };
    getUsers().then();
  }, []);

  return (
    <div className="container">      
      <div className="row">
        <CardLayout />
      </div>
      <hr />
      <h1>Role: {role}</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <p>Author: {book.author_id}</p>
              <p>Book name: {book.book}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <p>Author: {book.author_id}</p>
              <p>Book name: {book.book}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <p>Author: {book.author_id}</p>
              <p>Book name: {book.book}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <p>Author: {book.author_id}</p>
              <p>Book name: {book.book}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <p>Author: {book.author_id}</p>
              <p>Book name: {book.book}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <p>Author: {book.author_id}</p>
              <p>Book name: {book.book}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <p>Author: {book.author_id}</p>
              <p>Book name: {book.book}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <p>Author: {book.author_id}</p>
              <p>Book name: {book.book}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <p>Author: {book.author_id}</p>
              <p>Book name: {book.book}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <p>Author: {book.author_id}</p>
              <p>Book name: {book.book}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <p>Author: {book.author_id}</p>
              <p>Book name: {book.book}</p>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};
