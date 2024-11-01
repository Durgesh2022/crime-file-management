import React from "react";
import "./App.css"; // Assuming you have some global styles here
import Officer from "../src/pages/Officer/Officer";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Signup";
const App = () => {
    const [showlogin, setshowlogin] = React.useState(false);
    return (
        <div>
            <div className="app">
                <Routes>
                    <Route
                        path="/"
                        element={<Login setshowlogin={setshowlogin} />}
                    />
                    <Route path="/officer" element={<Officer />} />
                </Routes>
            </div>
        </div>
    );
};
export default App;
