import { createEntry } from "@/app/lib/action/createEntriy";

export default async function Page() {
  return (
    <main>
      <form action={createEntry} className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <div className="mb-4">
            <label htmlFor="title">Title</label>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="title"
              id="title"
              className="block p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="body">Body</label>
          </div>
          <div className="mb-4">
            <textarea
              name="body"
              id="body"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
