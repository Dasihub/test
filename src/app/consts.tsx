import { IBookRow } from '@/app/types.ts'
import { GridColDef } from '@mui/x-data-grid'

export const columns: GridColDef<IBookRow>[] = [
    {
        field: 'imageLinks',
        headerName: 'Обложка',
        width: 150,
        headerAlign: 'center',
        align: 'center',
        hideSortIcons: true,
        renderCell: params => {
            return <img src={params.row.image} alt='thumbnail' style={{ cursor: 'pointer' }} />
        },
    },
    {
        field: 'title',
        headerName: 'Название',
        width: 300,
        sortable: true,
        editable: true,
    },
    {
        field: 'authors',
        headerName: 'Автор',
        width: 200,
        sortable: true,
        editable: true,
    },
    {
        field: 'publisher',
        headerName: 'Издатель',
        width: 150,
        sortable: true,
        editable: true,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'publishedDate',
        headerName: 'Дата публикации',
        width: 150,
        sortable: true,
        editable: true,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'description',
        headerName: 'Описание',
        width: 300,
        sortable: true,
        editable: true,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'pageCount',
        headerName: 'Количество страниц',
        width: 200,
        sortable: true,
        editable: true,
        headerAlign: 'center',
        align: 'center',
    },
]
