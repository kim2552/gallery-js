import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../../services/auth"

export default function NavBar() {
    let greetingMessage = ""
    if (isLoggedIn()) {
      greetingMessage = `Hi ${getUser().name}!`
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
                {isLoggedIn() ? (
                    <a
                        href="http://localhost:1338/admin/plugins/content-manager/collectionType/application::article.article"
                    >
                        Add
                    </a>
                ) : null}
                {` `}
                {isLoggedIn() ? (
                    <a
                        href="/"
                        onClick={event => {
                        event.preventDefault()
                        logout(() => navigate(`/app/login`))
                        }}
                    >
                        Logout
                    </a>
                ) : null}
            </nav>
        </div>
    )
}