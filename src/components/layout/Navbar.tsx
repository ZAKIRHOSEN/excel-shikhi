import { Link, NavLink } from "react-router-dom";
import { APP_NAME } from "@/data/constants";
import { mainNavItems } from "@/data/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/utils/cn";
import { useState } from "react";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">

        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 font-bold text-primary"
        >
          <img
            src={logo}
            alt="এক্সেল শিখি"
            className="h-10 w-10 rounded-xl object-cover shadow"
          />

          <span className="text-lg sm:text-xl font-extrabold">
            {APP_NAME}
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-1 md:flex">
          {mainNavItems
            .filter((item) => item.path !== "/settings")
            .map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-primary text-white"
                    : "text-text-muted hover:bg-accent/10 hover:text-text"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            className="rounded-lg border border-border p-2 md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="মেনু খুলুন"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

      </div>

      {mobileOpen && (
        <nav className="border-t border-border px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {mainNavItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-lg px-3 py-2 text-sm font-medium",
                      isActive
                        ? "bg-primary text-white"
                        : "text-text-muted hover:bg-accent/10"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}