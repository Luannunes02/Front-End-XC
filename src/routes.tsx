import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import UpdateUser from "./pages/UpdateUser";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<SignUp />} />
                <Route path="/update/:id" element={<UpdateUser />}  />
            </Routes>
        </BrowserRouter>
    )
}

