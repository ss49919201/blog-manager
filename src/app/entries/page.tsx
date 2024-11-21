type Entry = {
  title: string;
  body: string;
  updatedAt: Date;
};

const entries: Array<Entry> = [
  {
    title: "Entry 1",
    body: "This is the body of entry 1",
    updatedAt: new Date("2021-10-01"),
  },
  {
    title: "Entry 2",
    body: "This is the body of entry 2",
    updatedAt: new Date("2021-10-01"),
  },
  {
    title: "Entry 3",
    body: "This is the body of entry 3",
    updatedAt: new Date("2021-10-01"),
  },
];

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="mb-2">Entries</h1>
      <ul>
        {entries.map(({ title, body, updatedAt }) => (
          <li className="mb-2" key={title}>
            <h2>Title: {title}</h2>
            <p>UpdatedAt: {updatedAt.toISOString()}</p>
            <p>Body:</p>
            <p>{body}</p>
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
          </li>
        ))}
      </ul>
    </div>
  );
}
