import { useState } from 'react';
import { getWordTypesRequest, WordTypesResponse } from '../api';

export const useApp = () => {
  const [text, setText] = useState('');
  const [wordTypes, setWordTypes] = useState<WordTypesResponse | null>(null);

  const handleSumbit = async () => {
    if (text.length === 0) {
      return;
    }

    const result = await getWordTypesRequest(text);

    if (result) {
      setWordTypes(result);
    }
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return {
    text,
    wordTypes,
    handleSumbit,
    handleChangeText,
  };
};
