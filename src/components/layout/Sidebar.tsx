import { NavLink } from "react-router-dom";
import { sidebarNavItems } from "@/data/navigation";
import { cn } from "@/utils/cn";

export default function Sidebar() {
  return (
    <aside className="hidden border-r border-border bg-surface text-text transition-colors duration-300 md:block">
      <nav className="p-4">
        <ul className="flex flex-col gap-1">
          {sidebarNavItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  cn(
                    "block rounded-lg px-3 py-2.5 text-sm font-medium transition",
                    isActive
                      ? "bg-primary text-white"
                      : "text-text-muted hover:bg-accent/10 hover:text-text"
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}