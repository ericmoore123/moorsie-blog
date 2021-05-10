import * as React from "react"
// import { Link } from "gatsby"

const Layout = (props) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = props.location.pathname === rootPath
  let header

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
