// A mock function to mimic making an async request for data
export function fetchCount(amount = 1): Promise<{
  data: number;
}> {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

/*
export const fetchPokemon = async (url : string) : Promise<{
  data: any;
}> => { return  await axios.get(url)}*/
