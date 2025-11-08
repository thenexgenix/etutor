export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} e-Tutor. All rights reserved.
      </div>
    </footer>
  );
}
