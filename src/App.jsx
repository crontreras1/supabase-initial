import { BrowserRouter, useRoutes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Register } from "./pages/Auth/Register"
import { RegisterForm } from "./pages/RegisterForm"
import { Login } from "./pages/Auth/Login"
import { NotFound } from "./pages/Notfound"
import { Profile } from "./pages/Profile"
import { AuthProvider } from "./Auth"
import { Trainers } from "./pages/trainers"
import { MyProfile } from "./pages/myProfile"
// import { useState, useEffect } from "react"
// import { supabase } from "./supabaseClient"
// import Auth from "./Auth";
// import Account from "./Account";

function App() {
  //Routes
  const AppRoutes = () => {
    let routes = useRoutes ([
      { path: '/', element: <Home />},
      { path: '/register', element: <Register />},
      { path: '/register-form', element: <RegisterForm />},
      { path: '/login', element: <Login />},
      { path: '/my-profile', element: <MyProfile />},
      { path: '/trainers', element: <Trainers />},
      { path: '/trainers/profile/:idProfile', element: <Profile />},
      { path: '/*', element: <NotFound />}
    ])

    return routes
  }

  return (
    // <div className="container" style={{ padding: "50px 0 100px 0" }}>
    //   {!session ? (
    //     <Auth />
    //   ) : (
    //     <Account key={session.user.id} session={session} />
    //   )}
    // </div>
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
