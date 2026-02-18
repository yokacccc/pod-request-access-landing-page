import "./App.css";

import { useState } from "react";

import logo from "./assets/images/desktop/logo.svg";
import spotifyIcon from "./assets/images/desktop/spotify.svg";
import appleIcon from "./assets/images/desktop/apple-podcast.svg";
import googleIcon from "./assets/images/desktop/google-podcasts.svg";
import pocketIcon from "./assets/images/desktop/pocket-casts.svg";
import dotsIcon from "./assets/images/desktop/bg-pattern-dots.svg";

function App() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [errorClass, setErrorClass] = useState("");

    // 验证email函数
    function validateEmail(email: string): string {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            return "Please enter your email";
        }

        if (regex.test(email)) {
            return "";
        } else {
            return "Oops! Please check your email";
        }
    }

    // input框onchange,每次输入变化时重新验证表单
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        // 获取input的value
        const value = e.target.value;

        setEmail(value);

        if (value === "") {
            setError("");
            setErrorClass("");
        }
    }

    // 提交按钮处理
    function handleClick(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        const errorMsg = validateEmail(email);
        const errorClassDisplay = "border-2 border-red";

        if (errorMsg) {
            setError(errorMsg);
            setErrorClass(errorClassDisplay);
        } else {
            setError("");
            setErrorClass("");
        }
    }

    return (
        <main className="landing__bg-container">
            <div className="landing__dots hidden sm:block">
                <img src={dotsIcon} alt="dots icon" />
            </div>
            <div className="landing__main-container">
                <div className="landing__header-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="landing__section-container">
                    <div className="landing__text-container sm:order-1">
                        <h1 className="text-center text-1-ms leading-[120%] text-green font-light ">
                            PUBLISH YOUR PODCASTS <span className="text-white">EVERYWHERE.</span>
                        </h1>
                        <p className="text-center text-2-ms leading-[150%] sm:max-w-md text-blue-300">
                            Upload your audio to Pod with a single click. We’ll then distribute your
                            podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
                            more!
                        </p>
                    </div>
                    <div className="flex justify-between items-center sm:order-3 ">
                        <div>
                            <img src={spotifyIcon} alt="spotify icon" className="scale-75" />
                        </div>
                        <div>
                            <img src={appleIcon} alt="apple icon" className="scale-75" />
                        </div>
                        <div>
                            <img src={googleIcon} alt="google icon" className="scale-75" />
                        </div>
                        <div>
                            <img src={pocketIcon} alt="pocket icon" className="scale-75" />
                        </div>
                    </div>
                    <form
                        onSubmit={handleClick}
                        className="landing__form-container sm:max-w-md sm:order-2"
                    >
                        <input
                            type="text"
                            value={email}
                            onChange={handleChange}
                            placeholder="Email address"
                            className={`bg-blue-900 h-11 sm:h-13 pl-12 rounded-[22px] outline-none text-white w-full ${errorClass}
                                      placeholder:text-3-s placeholder:font-bold placeholder:text-white placeholder:opacity-50`}
                        />
                        <button type="submit" className="  h-11 rounded-[22px]">
                            Request Access
                        </button>
                        <p className="text-red text-center min-h-6">{error}</p>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default App;
