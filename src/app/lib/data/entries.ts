export type Entries = {
  id: number;
  title: string;
  body: string;
  updatedAt: Date;
}[];

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
