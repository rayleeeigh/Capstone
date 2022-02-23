import React from 'react';
import { HeaderCell } from "./Grades.style"
import { Table, TableRow, TableBody, TableCell, TableHead} from '@mui/material';


export default function GradesTable(){
  return(
    <Table>
      <TableHead>
        <TableRow>
          <HeaderCell>Subject</HeaderCell>
          <HeaderCell align="right">1st</HeaderCell>
          <HeaderCell align="right">2nd</HeaderCell>
          <HeaderCell align="right">3rd</HeaderCell>
          <HeaderCell align="right">4th</HeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Math</TableCell>
          <TableCell align="right">90</TableCell>
          <TableCell align="right">90</TableCell>
          <TableCell align="right">90</TableCell>
          <TableCell align="right">90</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Math</TableCell>
          <TableCell align="right">90</TableCell>
          <TableCell align="right">90</TableCell>
          <TableCell align="right">90</TableCell>
          <TableCell align="right">90</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Math</TableCell>
          <TableCell align="right">90</TableCell>
          <TableCell align="right">90</TableCell>
          <TableCell align="right">90</TableCell>
          <TableCell align="right">90</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Math</TableCell>
          <TableCell align="right">90</TableCell>
          <TableCell align="right">90</TableCell>
          <TableCell align="right">90</TableCell>
          <TableCell align="right">90</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Math</TableCell>
          <TableCell align="right">90</TableCell>
          <TableCell align="right">90</TableCell>
          <TableCell align="right">90</TableCell>
          <TableCell align="right">90</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}