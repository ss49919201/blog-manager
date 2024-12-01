export type Entry = {
  id: number;
  title: string;
  body: string;
  updatedAt: Date;
};

export type Entries = Entry[];

export async function getEntries(): Promise<Entries> {
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

export async function getEntryById(id: number): Promise<Entry | null> {
  return {
    id,
    title: "Hello",
    body: "World",
    updatedAt: new Date(),
  };
}

/**
 * 小数点は無視したいので、Number ではなくて parseInt を使っている
 * Number("1.05") => 1.05
 * parseInt("1.05") => 1
 * */
export function parseEntryIdOrThrow(id: string): number {
  const parsedId = Number(id);
  if (Number.isNaN(parsedId)) {
    throw new Error("ID is not number");
  }
  return parsedId;
}
