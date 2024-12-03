'use client'
import { SetStateAction, useState } from "react"
export default function FormExample() {
    const [form, setForm] = useState({
        firstName: 'vishnu',
        lastName: 'vardhan',
        email: 'flutevishnu@gmail.com',
      });


   return (
    <div className="flex flex-col gap-4 items-center">
        <h1 className="text-lg">
            Form Example
        </h1>
        <label htmlFor="">
            First name:  
            <input type="text"
            className="pl-2 text-black"
            value={form.firstName}
            onChange={e =>
            {
                setForm({
                    ...form,
                    firstName: e.target.value
                })
            }}
             />
        </label>
        <label>
            Last name:
            <input
            value={form.lastName}
            className="pl-2 text-black"
            onChange={e => {
                setForm({
                ...form,
                lastName: e.target.value
                });
            }}
            />
        </label>
        <label>
            Email:
            <input
            value={form.email}
            className="pl-2 text-black"
            onChange={e => {
                setForm({
                ...form,
                email: e.target.value
                });
            }}
            />
        </label>
        <p>
            {form.firstName}{' '}
            {form.lastName}{' '}
            ({form.email})
        </p>
    </div>
   )
}