'use client'
import { createContext, Dispatch, SetStateAction } from "react";
import { useState } from "react";
import AuthNav from "./AuthNav";
type AuthContextType = [boolean, Dispatch<SetStateAction<boolean>>];
export const AuthContext = createContext<AuthContextType | undefined>(undefined)
export default function AuthExample() {

    const [signedIn, setSignedIn] = useState(false)
    return (
        <div>
            <AuthContext.Provider value={[signedIn, setSignedIn]}>
                <div className="flex flex-col items-center gap-2">
                <AuthNav/>
                <h1>{signedIn?"Signed In": "Signed Out"}</h1>
                </div>
                
            </AuthContext.Provider>

        </div>
    )
}