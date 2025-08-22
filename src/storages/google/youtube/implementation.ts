import { ApiError } from '@common/responses/errors/api-error';
import axios, { AxiosError } from 'axios';

const http = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});

export const getPlayList = async (token: string) => {
    try {
        const { data } = await http.get(
            '/playlists?part=snippet,contentDetails&mine=true&maxResults=20',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log({ data });
    } catch (e) {
        if (e instanceof AxiosError) {
            throw new ApiError('Authorization', e.status!);
        }
        console.log({ e });
    }
};
