export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" className="text-xl font-bold">e-Tutor</a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="/courses" className="hover:underline">Courses</a>
          <a href="/category" className="hover:underline">Categories</a>
          <a href="/auth/signin" className="rounded-md border px-3 py-1.5 hover:bg-gray-50">Sign in</a>
        </nav>
      </div>
    </header>
  );
}
