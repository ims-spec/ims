import {useEffect, useState} from "react";
import {supabaseClient} from "@/providers/supabaseClient.ts";
import CardLayout from "@/components/cards/CardLayout.tsx";


interface IBooks {
    id: number;
    book: string;
    author_id: number
}

export const AdminDashboard = ({role}: { role: string }) => {
        const [books, setBooks] = useState<IBooks[]>([]);

        useEffect(() => {
            const refreshToken = async () => {
                await supabaseClient.auth.refreshSession()
            }
            const getBooks = async () => {
                const {data, error} = await supabaseClient.from('books').select()
                if (error) throw error

                setBooks(data)
            }
            refreshToken().then()
            getBooks().then()
        }, [setBooks])

        useEffect(() => {
            const getUsers = async () => {
                const {data, error} = await supabaseClient.schema('auth').from('users').select()

                if (error) throw error
                console.log(data)
            }
            getUsers().then()
        }, []);


        return (
            <div className="container">
                <div className="row">
                    <div className="card col-12 shadow-lg mt-2">
                        <div className=" d-flex justify-content-between ">
                            <div className="hstack gap3">
                                <div className="p-3">
                                    <input type="text"/>
                                </div>
                                <div className="p-3">
                                    <input type="text"/>
                                </div>
                                <div className="p-3">
                                    <button type='button' className='btn btn-primary'>Click</button>
                                </div>
                            </div>

                            <div className="p-3">
                                <img
                                    src="https://steamuserimages-a.akamaihd.net/ugc/2100422066956953334/BCFFD0DB0C56F71CD288304540E39FC2FADFD155/?imw=512&amp;imh=341&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"
                                    alt="Avatar"
                                    className="rounded-circle"
                                    width="50"
                                    height="50"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <CardLayout/>
                </div>
                <hr/>
                <div className="row">
                    <CardLayout/>
                </div>
                <hr/>
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
            </div>
        );
    }
;
