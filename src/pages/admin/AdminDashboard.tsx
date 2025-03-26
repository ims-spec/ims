import {useEffect, useState} from "react";
import {supabaseClient} from "../../providers/supabaseClient.ts";


interface IBooks{
    id:number;
    book:string;
    author_id:number
}

export const AdminDashboard = ({role}: { role: string }) => {
        const [books, setBooks] = useState<IBooks[]>([]);
        

        useEffect(()=>{
            const refreshToken = async()=>{
                await supabaseClient.auth.refreshSession()
            }
            const getBooks = async()=>{
                const {data, error} = await supabaseClient.from('books').select()
                if(error) throw error

                console.log(data)
                setBooks(data)
            }
            refreshToken()
            getBooks().then()
        }, [setBooks])
        

       


        return (
            <div className="container">
                <h1>Role: {role}</h1>
                <ul>
                    {books.map((book)=>(
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
    }
;
