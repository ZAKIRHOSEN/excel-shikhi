import { APP_NAME } from "@/data/constants";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center">

        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} {APP_NAME}. সর্বস্ব সংরক্ষিত।
        </p>

        <p className="mt-3 text-sm text-text-muted">
          Developed by{" "}
          <span className="font-semibold text-primary">
            Zakir Hosen
          </span>
        </p>

        <div className="mx-auto my-4 h-px w-24 bg-border"></div>

        <p className="text-sm text-accent">
          বাংলায় Microsoft Excel শেখার সবচেয়ে সহজ ও আধুনিক প্ল্যাটফর্ম
        </p>

      </div>
    </footer>
  );
}