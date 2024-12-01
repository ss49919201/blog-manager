import { getEntryById, parseEntryIdOrThrow } from "@/app/lib/data/entries";
import { notFound } from "next/navigation";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const parsedId = parseEntryIdOrThrow(id);

  const entry = await getEntryById(parsedId);

  if (!entry) {
    notFound();
  }

  return (
    <div>
      <h1>Edit</h1>
      <h2>Title: {entry.title}</h2>
      <div>
        <p>Body:</p>
        <p>{entry.body}</p>
        <p>UpdatedAt: {entry.updatedAt.toISOString()}</p>
      </div>
      <div>
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Edit
        </button>
      </div>
      <div>
        <button
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
