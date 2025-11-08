'use client';
export default function Error({ error, reset }) {
  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-semibold">Something went wrong</h2>
      <p className="text-gray-600 mt-2">{String(error?.message || "")}</p>
      <button onClick={() => reset()} className="mt-4 rounded-md border px-3 py-1.5">Try again</button>
    </div>
  );
}
