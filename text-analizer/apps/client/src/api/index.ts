const TEXT_ANALIZER_LAMBDA_API = 'http://localhost:3000/text-analizer';

export type WordTypesResponse = Array<[string, number]>;

export const getWordTypesRequest = async (text: string) => {
  try {
    const response = await fetch(`${TEXT_ANALIZER_LAMBDA_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error('Failed to get channel data');
    }

    const json = await response.json();

    return json.wordTypes as WordTypesResponse;
  } catch (e) {
    console.error(e);
    alert('Failed to get channel data');
  }
};
