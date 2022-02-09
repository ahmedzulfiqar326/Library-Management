import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const columns = [
    { id: 'name', label: 'Book Name', minWidth: 170 },
    { id: 'code', label: 'Author', minWidth: 100 },
    {
      id: 'State',
      label: 'Student',
      minWidth: 170,
      align: 'right',
    //   format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Borrow Date',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'return',
        label: 'Return Date',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
      },
    // {
    //   id: 'density',
    //   label: 'Density',
    //   minWidth: 170,
    //   align: 'right',
    //   format: (value) => value.toFixed(2),
    // },
  ];

  function createData(book,authorname,student,borrow,returndate) {
    return { book,authorname,student,borrow,returndate};
  }

const rows = [
    createData('Angel','Haris','Hamza','21-08-2018','29-08-2018'),
  createData('Snow White','Rutherford','','',''),
  createData('Cendrella','Nolan','','',''),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
    <AppBar sx={{display:'flex',bgcolor:'#2d1d19',alignItems:'center'}}>
            <Toolbar>
                <Typography variant="h3" component="div" sx={{minWidth:'100%'}}>
                Library Management
                </Typography>
            </Toolbar>
    </AppBar>
    <Paper sx={{mt:10, width: '100%', overflow: 'hidden'}}>
          <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                  <TableHead >
                      <TableRow>
                          {columns.map((column) => (
                              <TableCell
                                  key={column.id}
                                  align={column.align}
                                  style={{ minWidth: column.minWidth }}
                                  sx={{bgcolor:'#211d19',color:'white'}}
                              >
                                  {column.label}
                              </TableCell>
                          ))}
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {rows
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row) => {
                              return (
                                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                      {columns.map((column) => {
                                          const value = row[column.id];
                                          return (
                                              <TableCell key={column.id} align={column.align}>
                                                  {column.format && typeof value === 'number'
                                                      ? column.format(value)
                                                      : value}
                                              </TableCell>
                                          );
                                      })}
                                  </TableRow>
                              );
                          })}
                  </TableBody>
              </Table>
          </TableContainer>
      </Paper>
      </div>
  );
}