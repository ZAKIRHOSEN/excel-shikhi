import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/utils/cn'

const labels: Record<string, string> = {
  light: 'হালকা',
  dark: 'গাঢ়',
  system: 'সিস্টেম',
}

export default function ThemeToggle() {
  const { theme, cycleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className={cn(
        'inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2',
        'text-sm font-medium text-text transition hover:bg-accent/10',
      )}
      aria-label="থিম পরিবর্তন করুন"
      title={`থিম: ${labels[theme]}`}
    >
      <span className="text-base" aria-hidden="true">
        {theme === 'dark' ? '🌙' : theme === 'light' ? '☀️' : '💻'}
      </span>
      <span className="hidden sm:inline">{labels[theme]}</span>
    </button>
  )
}
