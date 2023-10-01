import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { WORD_TYPES } from './types';

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const body = JSON.parse(event.body);
        const map = new Map();
        const words: string[] = body.text.split(' ');

        for (let word of words) {
            const wordType = WORD_TYPES[word];

            if (!wordType) {
                continue;
            }

            if (map.has(wordType)) {
                const count = map.get(wordType);
                map.set(wordType, count + 1);
            } else {
                map.set(wordType, 1);
            }
        };

        return {
            statusCode: 200,
            body: JSON.stringify({
                wordTypes: [...map],
            }),
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
};
