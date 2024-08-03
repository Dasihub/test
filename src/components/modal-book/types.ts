import { IBookRow } from '@/app/types.ts'

export interface IProps {
    handleClose: () => void
    selectedBook: IBookRow
}
