import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import DynamicTable from '../../Componets/DynamicTable'
import { Button, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { fbGet } from '../../Config/Firebasemethod';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));



const Acceptors = () => {

    const [alldonors, setalldonors] = useState<any>([])
    const [filteredDonors, setFilteredDonors] = useState<any>([]);

    const getdonors = () => {
        fbGet('donors')
            .then((res: any) => {
                console.log(res);
                setalldonors([...res]);
                setFilteredDonors([...res])
            })
            .catch((err) => {
                console.log(err);
            }
            )
    }
    const [selectedBloodGroup, setSelectedBloodGroup] = useState(''); // Initialize with an empty string
    const handleBloodGroupFilter = (bloodGroup: any) => {
        setSelectedBloodGroup(bloodGroup);

        // Define an array of allowed blood groups based on the selected filter
        let allowedBloodGroups:any[] = [];

        if (bloodGroup === 'All') {
            allowedBloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
        } else if (bloodGroup === 'A+' || bloodGroup === 'A-') {
            allowedBloodGroups = ['A+', 'A-', 'AB+', 'AB-'];
        } else if (bloodGroup === 'O+' || bloodGroup === 'O-') {
            allowedBloodGroups = ['O+', 'O-'];
        }else if (bloodGroup === 'B+' || bloodGroup === 'B-') {
            allowedBloodGroups = ['B+', 'B-', 'AB+','AB-'];
        }
        // Filter the donors based on the selected blood group
        const filteredDonors = alldonors.filter((donor: any) =>
            allowedBloodGroups.includes(donor.bloodGroup)
        );

        setFilteredDonors(filteredDonors);
    };
   

    const navigate = useNavigate()
    const fill =(dnrs:any) => {
        navigate(`/admin/acceptors/${dnrs}`)
    }

    useEffect(() => {
        getdonors();
    }, []);

    return (
        <>


            <Grid container spacing={2} mb-2>
                <Grid item xs={6}>
                    <h1>Donors List</h1>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="bloodGroup">Filter by Blood Group</InputLabel>
                        <Select
                            value={selectedBloodGroup}
                            onChange={(e) => handleBloodGroupFilter(e.target.value)}
                            inputProps={{
                                name: 'bloodGroup',
                                id: 'bloodGroup',
                            }}
                        >
                            <MenuItem value="All">All</MenuItem>
                            <MenuItem value="A+">A+</MenuItem>
                            <MenuItem value="A-">A-</MenuItem>
                            <MenuItem value="B+">B+</MenuItem>
                            <MenuItem value="B-">B-</MenuItem>
                            <MenuItem value="O+">O+</MenuItem>
                            <MenuItem value="O-">O-</MenuItem>
                            <MenuItem value="AB+">AB+</MenuItem>
                            <MenuItem value="AB-">AB-</MenuItem>-
                            {/* Add options for other blood groups as needed */}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>


            <TableContainer component={Paper} mt-2>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Name</StyledTableCell>
                            <StyledTableCell align="center">Father Name</StyledTableCell>
                            <StyledTableCell align="center">Blood Group</StyledTableCell>
                            <StyledTableCell align="center">Detail</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>


                    {filteredDonors.map((x: any, i: any) => {
                        return (
                            <>
                                <TableBody>
                                    <StyledTableCell align="center">{x.name}</StyledTableCell>
                                    <StyledTableCell align="center">{x.fatherName}</StyledTableCell>
                                    <StyledTableCell align="center">{x.bloodGroup}</StyledTableCell>
                                    <StyledTableCell align="center"><Button onClick={() => fill(x.id)}>Click Here</Button></StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Button
                                            startIcon={<DeleteIcon />}
                                        >
                                            Delete
                                        </Button>
                                    </StyledTableCell>

                                    {/* <StyledTableCell align="center">{x.body}</StyledTableCell> */}
                                </TableBody>
                            </>
                        )

                    })}

                </Table>
            </TableContainer>
        </>
    )
}

export default Acceptors