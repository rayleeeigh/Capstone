import { Select, FormControl, InputLabel, MenuItem, Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'

const StudentData = ['Grades', 'Schedule']

const TeacherData = ['Grades', 'Schedule', 'Submissions', 'Enrollment']

const AdminData = ['Dashboard', 'LoginTrail', 'AccountVerification']

function NavbarTask() {
    const { user } = useContext(AuthContext)
    const [userType, setUserType] = useState()
    useEffect(() => {
        const data = doc(db, 'users', user.uid)
        getDoc(data)
            .then(async (ress) => {
                console.log(ress.data().userType, 'DOC RESULT')
                setUserType(ress.data().userType)
            })
            .catch((err) => {
                console.log('hatdog')
            })
    }, [])

    return (
        <FormControl sx={{ m: 1, minWidth: '9rem' }}>
            {userType === 0 && (
                <>
                    <InputLabel>Admin Task</InputLabel>
                    <Select>
                        {AdminData.map((stud) => (
                            <a href={`/admin/${stud}`} key={stud}>
                                <MenuItem>{stud}</MenuItem>
                            </a>
                        ))}
                    </Select>
                </>
            )}
            {userType === 1 && (
                <>
                    <InputLabel>Teacher Task</InputLabel>
                    <Select>
                        {TeacherData.map((stud) => (
                            <a href={`/${stud}`} key={stud}>
                                <MenuItem>{stud}</MenuItem>
                            </a>
                        ))}
                    </Select>
                </>
            )}
            {userType === 3 && (
                <>
                    <InputLabel>Student Task</InputLabel>
                    <Select>
                        {StudentData.map((stud) => (
                            <a href={`/${stud}`} key={stud}>
                                <MenuItem>{stud}</MenuItem>
                            </a>
                        ))}
                    </Select>
                </>
            )}
            {userType === 3 && (
                <>
                    <InputLabel>Student Task</InputLabel>
                    <Select>
                        {StudentData.map((stud) => (
                            <a href="/grades" key={stud}>
                                <MenuItem>{stud}</MenuItem>
                            </a>
                        ))}
                    </Select>
                </>
            )}
        </FormControl>
    )
}

export default NavbarTask
