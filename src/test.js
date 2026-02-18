import { useState } from "react";

export default function App() {
    const [email, setEmail] = useState("");

    return (
        <form>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="请输入邮箱"
            />
            <button type="submit">提交</button>
        </form>
    );
}
