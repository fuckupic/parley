import MainNavigation from './MainNavigation'
// import { useUser } from '@auth0/nextjs-auth0'

function Layout(props) {
  // const { user, userError, isLoading } = useUser()

  return (
    <div>
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
