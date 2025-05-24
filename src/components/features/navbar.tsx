"use client";

import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import ThemeToggle from "@/components/features/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <Card className="w-full bg-card px-4  md:px-8 border-0 flex items-center justify-between gap-6 py-4 shadow-none">
      <ul className="hidden md:flex items-center gap-10 text-card-foreground">
        <li className={isActive("/") ? "underline underline-offset-4" : ""}>
          <Link href="/">Home</Link>
        </li>
      </ul>

      <div className="flex items-center">
        <div className="flex md:hidden mr-2 items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5 rotate-0 scale-100" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="ml-4">
              <DropdownMenuItem
                className={isActive("/") ? "underline underline-offset-4" : ""}
              >
                <Link href="/">Home</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ThemeToggle />
      </div>
    </Card>
  );
};

export default Navbar;
