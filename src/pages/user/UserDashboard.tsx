import {useState, useEffect} from "react";
import {User} from "@supabase/supabase-js";
import {supabaseClient} from "../../providers/supabaseClient.ts";
import {useAuth} from "../../store/useAuth.ts";

export const UserDashboard = () => {
    const [user, setUser] = useState<User>();
    const {role} = useAuth();

    useEffect(() => {
        const fetchUser = async () => {
            const {
                data: {session},
            } = await supabaseClient.auth.getSession();
            if (session) {
                setUser(session.user);
                console.log(session.user.app_metadata.role);
            }
        };

        fetchUser().then();
    }, []);


    return (
        <div className="container">
            <h3>UserDashboard</h3>
            <div>
                <h2>Профиль</h2>
                {user ? (
                    <div>
                        <p>Email: {user.email}</p>
                        <p>Роль: {role || "не указана"}</p>
                    </div>
                ) : (
                    <p>Загрузка...</p>
                )}
            </div>
        </div>
    );
};
