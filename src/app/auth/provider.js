// import { AuthRouteProtection } from "../auth-listener"

import { AuthRouteProtection } from "../auth-listener"

const Provider = ({ children }) => {
  return <AuthRouteProtection>{children}</AuthRouteProtection>
}

export default Provider
