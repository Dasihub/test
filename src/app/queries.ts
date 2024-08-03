import { useQuery } from 'react-query'
import axios, { AxiosError } from 'axios'
import { IBooks } from '@/app/types.ts'

export const useGetBooks = () => {
    return useQuery<IBooks, AxiosError>(
        ['books-list'],
        async () => {
            try {
                const { data } = await axios.get('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=13')
                return data
            } catch (e) {
                console.error(e)
            }
        },
        {
            refetchOnWindowFocus: false,
        },
    )
}
