
# configuration d'un nouveau projet Next.js
pour creer un projet next on a besoin :
  * Node.js 18.18 ou version ultérieure.

npx create-next-app@latest  pour creer un projet 
 apres j'avoir exécuté cette commande ,
  # create-next-app 
  créera un dossier avec le nom de votre projet et installera les dépendances nécessaires.
 

# explication des dossiers 
app    ==	Routeur d'application (App Router)
pages  ==	Routeur de pages (Pages Router)
public ==	Ressources statiques à servir contient les images
 


# Dependances

        npx shadcn@latest init: //installation de shadcn/ui
        //installation des composant dans shadcn/ui
        npx shadcn@latest add form : installation du formulaire
        npx shadcn@latest add input : installltion d'input pour les champs  dans shadcn
        npx shadcn@latest add textarea : installltion de textera 
        npx shadcn@latest add card  

        # composant navbar

        npx shadcn@latest add button navigation-menu sheet
        🔹 button → pour les boutons
        🔹 navigation-menu → pour les liens de la navbar
        🔹 sheet → pour le menu mobile (slide sur téléphone)

        npm install lucide-react : Shadcn utilise la librairie lucide-react pour les icônes

        npm install next-themes : pour le Dark/Light mode 

# Documentation

    pour les icones j'ai utilisé la documentation lucid react  : https://lucide.dev/icons/
    apres avoir installer le package lucide-react(voir partie Dependances) 
    je l'ai importer sur les page avec : import { Home, User, Menu, Key, Settings } from "lucide-react";
    puis l'utilisé dans les balises 
