import React, { FC } from 'react'
import { Box, Button, Chip, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import { IProps } from './types.ts'

export const ModalBook: FC<IProps> = ({ handleClose, selectedBook }) => {
    return (
        <Dialog open onClose={handleClose}>
            <DialogTitle>Книга {selectedBook?.title}</DialogTitle>
            <DialogContent>
                <img src={selectedBook.image} alt='img' style={{ width: '200px' }} />

                <Typography gutterBottom variant='h5'>
                    Автор книги: {selectedBook.authors}
                </Typography>
                <Typography gutterBottom variant='subtitle1'>
                    Издатель: {selectedBook.publisher}
                </Typography>
                <Typography gutterBottom variant='subtitle1'>
                    Дата публикации: {selectedBook.publishedDate}
                </Typography>
                <Typography gutterBottom>Количество страниц: {selectedBook?.pageCount}</Typography>
                <Typography gutterBottom>
                    Категории: {selectedBook.categories?.map((item, index) => <Chip key={index} label={item} />)}
                </Typography>
                <Typography gutterBottom variant='body1'>
                    Описание: {selectedBook.description}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {selectedBook.isEbook ? (
                        <a target='_blank' href={selectedBook.buyLink}>
                            <Button variant='contained'>Купить книгу</Button>
                        </a>
                    ) : (
                        <Typography variant='h5'>Книга не продается</Typography>
                    )}
                </Box>
            </DialogContent>
        </Dialog>
    )
}
