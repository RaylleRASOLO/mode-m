"use client";

import { Search, ShoppingBag, User } from "lucide-react";
import Button from "./button";
import Link from "next/link";

export default function Navbar() {

  const menus = [
    { id: 1, name: "Marketplace", href: "#" },
    { id: 2, name: "Stylists", href: "#" },
    { id: 3, name: "Portfolio", href: "#" },
    { id: 4, name: "Contact", href: "#" },
  ];

  const iconMenus = [
    { id: 1, icon: Search, label: "Recherche", href: "#" },
    { id: 2, icon: ShoppingBag, label: "Panier", href: "#" },
    { id: 3, icon: User, label: "Compte", href: "#" },
  ]

  return (
    <nav className="max-w-screen w-full h-16 text-primary-foreground flex items-center justify-start border-b border-primary/20">
      <div className="inline-flex w-full justify-start items-center gap-6 max-w-screen-2xl mx-auto px-12">
        <h1 className="text-3xl font-bold text-primary">Mode'M</h1>
        <ul className="inline-flex items-center justify-start w-full gap-4 text-foreground">
          {menus.map((item) => {
            return (
              <li key={item.id}><a href={item.href}>{item.name}</a></li>
            )
          })
          }
        </ul>
        <div className="inline-flex items-center w-max gap-2 text-foreground/20">
          <ul className="inline-flex items-center text-foreground gap-2">
            {iconMenus.map(({ id, icon: Icon, label, href }) => {
              return (
                <li key={id}>
                  <a href={href} title={label}>
                    <Icon className="w-4 h-4" />
                  </a>
                </li>
              )
            })}
          </ul>
          |
          <Button variant="fill" className="w-max">
            <Link href="/login">Je suis styliste</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}