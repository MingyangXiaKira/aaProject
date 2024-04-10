import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./LoginCard.module.css";
import {Button} from "../../@/components/ui/button.tsx";
import Header from "@/components/Header.tsx";

const LoginCard = () => {
    const [email, setEmail] = useState("qwerty@tcd.ie");
    const [password, setPassword] = useState("qwerty");
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault();

        if (email && password) navigate("/main");
    }

    return (
        <main className={styles.login}>
            <Header></Header>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <label htmlFor="email" style={{color: "white", fontSize: "20px"}}>Email Address</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) =>setEmail(e.target.value)}
                        value={email}
                        style={{backgroundColor: "darkgrey"}}
                    />
                </div>

                <div className={styles.row}>
                    <label htmlFor="password" style={{color: "white", fontSize: "20px"}}>Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        style={{backgroundColor: "darkgrey"}}
                    />
                </div>

                <div>
                    <Button >LOG IN</Button>
                </div>
            </form>
        </main>
    );
};

export default LoginCard;
