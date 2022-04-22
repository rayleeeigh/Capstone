import { createContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { CircularProgress } from '@mui/material'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [studentUser, setStudentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const ref = collection(db, 'students')

    const getStudent = async (user) => {
        const q = query(ref, where('email', '==', user.email))
        try {
            const querySnapshot = await getDocs(q)
            const x = querySnapshot.docs.map((data) => {
                return { ...data.data() }
            })
            setStudentUser(x)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            getStudent(user)
            setUser(user)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <CircularProgress />
    }
    return (
        <AuthContext.Provider value={{ user, studentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
