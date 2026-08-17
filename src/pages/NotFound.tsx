import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md space-y-6 py-16 text-center">
      <p className="text-6xl font-bold text-primary">৪০৪</p>
      <h1 className="text-2xl font-bold text-text">পৃষ্ঠা পাওয়া যায়নি</h1>
      <p className="text-text-muted">
        আপনি যে পৃষ্ঠাটি খুঁজছেন তা বিদ্যমান নেই বা সরানো হয়েছে।
      </p>
      <Link
        to="/"
        className="inline-flex rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
      >
        হোমে ফিরুন
      </Link>
    </div>
  )
}
