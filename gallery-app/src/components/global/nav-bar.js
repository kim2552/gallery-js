import React from "react"
import { Link, navigate } from "gatsby"
import useAuth from "../../hooks/useAuth"

export default function NavBar() {
    const { state, isAuthenticated, logout } = useAuth()

    let greetingMessage = ""
    if (isAuthenticated) {
      greetingMessage = `Hi ${state.user.username}!`
    } else {
      greetingMessage = "You are not logged in"
    }
    return (
        <div
        style={{
            display: "flex",
            flex: "1",
            justifyContent: "space-between",
            borderBottom: "1px solid #d1c1e0",
        }}
        >
            <span>{greetingMessage}</span>
            <nav>
                {isAuthenticated ? (
                    <a
                        href="http://localhost:1338/admin/plugins/content-manager/collectionType/application::article.article"
                    >
                        Add
                    </a>
                ) : null}
                {` `}
                {isAuthenticated ? (
                    <a
                        href="/"
                        onClick={event => {
                        event.preventDefault()
                        logout()
                        }}
                    >
                        Logout
                    </a>
                ) : null}
            </nav>
        </div>
    )
}