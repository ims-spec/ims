import {useState, useEffect} from 'react'

export const Dashboard = () => {
  const [role, setRole] = useState('')

    useEffect(() => {
      setRole('admin');
    },[])

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>My role: {role}</p>
    </div>
  )
}
