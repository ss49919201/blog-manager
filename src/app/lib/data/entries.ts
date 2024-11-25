export type Entry = {
  id: number;
  title: string;
  body: string;
  updatedAt: Date;
};

export type Entries = Entry[];

export async function findEntries(): Promise<Entries> {
  return [
    {
      id: 1,
      title: "Hello",
      body: "World",
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: "Goodbye",
      body: "World",
      updatedAt: new Date(),
    },
  ];
}

export async function findEntryById(id: number): Promise<Entry | null> {
  return {
    id,
    title: "Hello",
    body: "World",
    updatedAt: new Date(),
  };
}
