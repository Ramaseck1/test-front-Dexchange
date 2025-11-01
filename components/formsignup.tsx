"use client";

import Link from "next/link";
import { useState } from "react";
 
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Home, User, Key, Facebook, Apple } from "lucide-react";


// ✅ Schéma de validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit comporter au moins 2 caractères." }),
  email: z.string().email({ message: "Email invalide." }),
  password: z.string().min(6, { message: "Le mot de passe doit comporter au moins 6 caractères." }),
  rememberMe: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

type NavLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

export default function Login() {
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", password: "", rememberMe: false },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
  }

  const links: NavLink[] = [
    { name: "DASHBOARD", href: "/", icon: <Home className="w-4 h-4" /> },
    { name: "PROFILE", href: "/profile", icon: <User className="w-4 h-4" /> },
    { name: "SIGN UP", href: "/signup", icon: <User className="w-4 h-4" /> },
    { name: "SIGN IN", href: "/signin", icon: <Key className="w-4 h-4" /> },
  ];
 
  return (
  <div className="bg-white z-100 w-full max-w-md rounded-3xl shadow-2xl p-8">

            <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
              Register with
            </h2>

            {/* Boutons de connexion sociale */}
            <div className="flex gap-4 mb-6">
              <button className="flex-1 flex items-center justify-center p-3 border-2 border-gray-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 transition">
                <Facebook className="w-5 h-5 text-gray-700" />
              </button>
              <button className="flex-1 flex items-center justify-center p-3 border-2 border-gray-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 transition">
                <Apple className="w-5 h-5 text-gray-700" />
              </button>
              <button className="flex-1 flex items-center justify-center p-3 border-2 border-gray-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </button>
            </div>

            {/* Séparateur */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>


            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                {/* Champ Nom */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Nom</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Votre nom complet"
                          className="border-gray-300 focus:border-teal-400 focus:ring-teal-400 rounded-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Champ Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Votre adresse email"
                          className="border-gray-300 focus:border-teal-400 focus:ring-teal-400 rounded-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Champ Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Mot de passe</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Votre mot de passe"
                          className="border-gray-300 focus:border-teal-400 focus:ring-teal-400 rounded-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Checkbox */}
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-teal-400"
                        />
                      </FormControl>
                      <FormLabel className="text-gray-600">Se souvenir de moi</FormLabel>
                    </FormItem>
                  )}
                />

                {/* Bouton */}
                <Link href="/routes/dashboard" className="w-full block">
                  <Button
                    type="button"
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition"
                  >
                    S'inscrire
                  </Button>
                </Link>
                <h2 className="text-xl text-gray-300 text-bold">Already have an account? <span><Link href="/routes/login" className="text-teal-400 text-2xl">Sign in </Link></span></h2>
              </form>
            </Form>
          </div>
  );
}