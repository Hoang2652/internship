import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import HandymanIcon from '@mui/icons-material/Handyman';
import Taskbar from '@/components/TaskBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
   },
   [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
   },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
   },
   // hide last border
   '&:last-child td, &:last-child th': {
      border: 0,
   },
}));

export default function Product() {
   const [product, setProduct] = useState([]);

   const [search, setSearch] = useState('');

   const [open, setOpen] = React.useState(false);

   const token = localStorage.getItem('token');

   const [deleted, setDeleted] = React.useState({
      id: '',
      name: '',
      phone: '',
      address: '',
      email: '',
   });

   const [currentPage, setCurrentPage] = useState(1);

   const [totalPages, setTotalPages] = useState(1);

   const PER_PAGE = 7; // Số lượng phần tử hiển thị trên mỗi trang
   const offset = (currentPage - 1) * PER_PAGE;

   useEffect(() => {
      const requestUrl = `http://localhost:3000/api/user?q=${search}`;
      fetch(requestUrl)
         .then((res) => res.json())
         .then((posts) => {
            // setNumPage(posts);
         });
   }, [search]);

   useEffect(() => {
      const axiosInstance = axios.create({
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });

      const requestUrl = `https://retails.beesoft.com.vn/api/v1/products`;

      axiosInstance.get(requestUrl).then((response) => {
         setProduct(response.data.product);
         setTotalPages(Math.ceil(response.data.product.length / PER_PAGE));
         console.log(response.data.product.length);
      });
   }, []);

   const deleteProduct = async (id) => {
      const axiosInstance = axios.create({
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      const requestUrl = 'https://retails.beesoft.com.vn/api/v1/product' + id;
      axiosInstance.delete(requestUrl).then((response) => {
         console.log(response);
      });
   };

   const handlePage = (event, value) => {
      setCurrentPage(value);
   };

   const searchItem = (key) => {
      setSearch(key);
   };

   const handleClickOpen = (id, name, category, store) => {
      const options = {
         id: id,
         name: name,
         category: category,
         store: store,
      };
      setOpen(true);
      setDeleted(options);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const deleteItem = () => {
      setProduct(product.filter((item) => item.id !== deleted.id));
      deleteProduct(deleted.id);
      // setPage(1);
      handleClose();
   };

   return (
      <Box sx={{ p: 3 }}>
         <Taskbar
            changeSearch={(e) => {
               searchItem(e.target.value);
            }}
         />
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
               <TableHead>
                  <TableRow>
                     <StyledTableCell>ID</StyledTableCell>
                     <StyledTableCell>NAME</StyledTableCell>
                     <StyledTableCell>PRICE</StyledTableCell>
                     <StyledTableCell>CATEGORY</StyledTableCell>
                     <StyledTableCell>STORE</StyledTableCell>
                     <StyledTableCell align="center">MANAGE</StyledTableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {product.slice(offset, offset + PER_PAGE).map((row) => (
                     <StyledTableRow key={row.id}>
                        <StyledTableCell>{row.id}</StyledTableCell>
                        <StyledTableCell>{row.aliasName}</StyledTableCell>
                        <StyledTableCell>{row.category[0].price + ' ' + row.category[0].currency}</StyledTableCell>
                        <StyledTableCell>{row.category[0].name}</StyledTableCell>
                        <StyledTableCell>{row.store[0].name}</StyledTableCell>
                        <StyledTableCell align="center">
                           <HandymanIcon color="primary" />
                           <DeleteForeverIcon
                              sx={{
                                 color: red[500],
                                 marginLeft: 1,
                              }}
                              onClick={() =>
                                 handleClickOpen(row.id, row.aliasName, row.category[0].name, row.store[0].name)
                              }
                           />
                        </StyledTableCell>
                     </StyledTableRow>
                  ))}
               </TableBody>
               <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>{'Do you want to delete this product?'}</DialogTitle>
                  <DialogContent>
                     <DialogContentText>
                        Id: {deleted.id}
                        <br />
                        Name: {deleted.name}
                        <br />
                        Category: {deleted.category}
                        <br />
                        Store: {deleted.store}
                     </DialogContentText>
                  </DialogContent>
                  <DialogActions sx={{ justifyContent: 'center' }}>
                     <Button onClick={handleClose} variant="contained" color="error">
                        Disagree
                     </Button>
                     <Button onClick={deleteItem} variant="contained">
                        Agree
                     </Button>
                  </DialogActions>
               </Dialog>
            </Table>
         </TableContainer>
         <Stack spacing={2} sx={{ alignItems: 'end', marginTop: 2 }}>
            <Pagination count={totalPages} page={currentPage} color="primary" size="small" onChange={handlePage} />
         </Stack>
      </Box>
   );
}
