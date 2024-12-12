'use client'
import { useContext } from "react"
import { AuthContext } from "./Auth_example"

export default function AuthButton() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("AuthButton must be used within an AuthContext.Provider");
      }
    const [signedIn, setSignedIn] = context;
    return (
        <>
        <button onClick={() => setSignedIn(!signedIn)} className="border rounded-lg p-2">
            {signedIn?"Sign out":"Sign In"}
        </button>
        </>
    )
}