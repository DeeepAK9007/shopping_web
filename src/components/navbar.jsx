import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { UserContext } from '../context/UserContext'
import { getAuth, signOut } from 'firebase/auth'

export const Navbar = () => {
	let user = useContext(UserContext)

	async function handleLogout () {
		let auth = getAuth()
		await signOut(auth)
	}

	return (
		<div className="navbar">
			<div className="links">
				<Link to="/add_merch">Make some bucks here</Link>
				{ user == null ?
					<Link to="/login">Login</Link>
					:
					<Link onClick={handleLogout}>Logout</Link>
				}
				<Link to="/Shop">Shop</Link>
			</div>
		</div>
	)
}
