"use client";

import Link from "next/link";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu, Home, User, Key } from "lucide-react";


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

export default function NavbarAuth() {
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
    <nav
        className="bg-teal-300  max-w-455 m-4 border-b rounded-2xl shadow-sm fixed   mt-6 w-full top-0 left-0 z-50 pb-100" 
      >        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>

          {/* Logo */}
          <Link href="/" className="flex items-center text-2xl font-bold text-white">
  <Image 
              src="/image.png" 
              alt="logo" 
              width={30} 
              height={30} 
              priority
              className="object-contain"
            />            <span className="ml-2">DEXCHANGE SAAS</span>
          </Link>

          {/* Liens Desktop */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-white hover:text-black transition"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Bouton Desktop */}
          <div className="hidden md:flex">
            <Button variant="outline" className="text-gray-900 bg-white rounded-3xl px-6">
              Call to action
            </Button>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>

<SheetContent side="left" className="w-[280px] ">
                <div className="flex flex-col space-y-4 mt-6">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 text-gray-700 hover:text-teal-600 text-lg transition"
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  ))}
                  <Button variant="outline" className="mt-4">
                    Connexion
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
 
  );
}