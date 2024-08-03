import { useMemo, useState } from 'react'
import { DataGrid, GridRowParams } from '@mui/x-data-grid'
import { Box, createTheme, ThemeProvider, IconButton, CssBaseline, Typography } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useGetBooks } from '@/app/queries.ts'
import { IBookRow } from '@/app/types.ts'
import { ModalBook } from '@/components/modal-book'
import { columns } from '@/app/consts.tsx'

export const App = () => {
    const [open, setOpen] = useState(false)
    const [selectedBook, setSelectedBook] = useState<IBookRow>()
    const [themeMode, setThemeMode] = useState<'dark' | 'light'>((localStorage.getItem('theme') as 'dark' | 'light') || 'light')
    const { data, isFetching } = useGetBooks()

    const handleClose = () => {
        setOpen(false)
        setSelectedBook(undefined)
    }

    const toggleTheme = () => {
        if (themeMode === 'light') {
            localStorage.setItem('theme', 'dark')
            return setThemeMode('dark')
        }
        localStorage.setItem('theme', 'light')
        setThemeMode('light')
    }

    const theme = createTheme({
        palette: {
            mode: themeMode,
        },
        typography: {
            fontSize: 14,
        },
    })

    const content = useMemo((): IBookRow[] => {
        if (Array.isArray(data?.items)) {
            return data.items.map((book, index) => ({
                id: book.id,
                image: book.volumeInfo.imageLinks.thumbnail,
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors?.join(','),
                publishedDate: book.volumeInfo.publishedDate,
                pageCount: book.volumeInfo.pageCount,
                description: book.volumeInfo.description,
                buyLink: book.saleInfo.isEbook ? book.saleInfo.buyLink : '',
                isEbook: book.saleInfo.isEbook,
                publisher: book.volumeInfo.publisher,
                categories: book.volumeInfo.categories,
            }))
        }
        return []
    }, [data?.items])

    const onCellClick = (params: GridRowParams) => {
        setSelectedBook(params.row)
        setOpen(true)
    }

    return (
        <ThemeProvider theme={theme}>
            {open && <ModalBook handleClose={handleClose} selectedBook={selectedBook} />}

            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                    padding: '10px',
                }}>
                <Typography variant='h2'>Тестовое задание</Typography>
                <IconButton onClick={toggleTheme}>{themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}</IconButton>
            </Box>

            <DataGrid
                rows={content}
                columns={columns}
                loading={isFetching}
                rowHeight={150}
                onRowClick={onCellClick}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
            />
        </ThemeProvider>
    )
}
