import { BASE_MENU_ITEMS } from "@/lib/constants";
import { Scissors } from "lucide-react";
import Link from "next/link";
import Button from "./button";

export default function Sidebar() {
  return (
    <aside className="w-full border-r h-full border-primary/30 p-4">
      {/* Sidebar content */}
      <div className="inline-flex items-center justify-center gap-2">
        <div className="w-10 h-10 bg-primary flex items-center justify-center">
          <Scissors className="w-6 h-6 text-primary-foreground" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-medium text-primary">
            Mode M
          </h1>
          <p className="text-sm w-max">Luxury Management</p>
        </div>
      </div>
      {/* Sidebar items */}
      <div className="flex flex-col gap-1 my-4 border-b border-primary/50">
        <ul>
          {BASE_MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <Link href={item.href} className="flex items-center gap-2 p-2 hover:bg-primary/20 duration-300 cursor-pointer rounded">
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="">
        <Button className="w-full">Ajouter un produit</Button>
      </div>
    </aside>
  )
}