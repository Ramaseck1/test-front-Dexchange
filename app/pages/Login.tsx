"use client";

import NavbarLogin from "../../components/navbarAuth";
import FormSignup from "../../components/formsignIn";
 
import { z } from "zod";
 
const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit comporter au moins 2 caractères." }),
  email: z.string().email({ message: "Email invalide." }),
  password: z.string().min(6, { message: "Le mot de passe doit comporter au moins 6 caractères." }),
  rememberMe: z.boolean(),
});


export default function Login() {

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 🔹 Navbar */}

      <NavbarLogin />
      {/* 🔹 Contenu principal */}
      <main className="flex-1 flex items-center justify-center mt-24 px-4">
        <div className="  z-100 w-full max-w-md rounded-3xl  p-8">
          <h2 className="text-center text-2xl font-semibold mb-6 text-teal-500">
            Créer un compte
          </h2>

          <h1 className="absolute top-28 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-white text-center">
            Welcome!
          </h1>

           <FormSignup />
        </div>
      </main>
    </div>
  );
}
