import { BrowserRouter, useRoutes } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Auth/Register"
import RegisterForm from "./pages/RegisterForm"
import Login from "./pages/auth/Login"
import NotFound from "./pages/Notfound"
import { useState, useEffect } from "react"
import { supabase } from "./supabaseClient"
// import Auth from "./Auth";
// import Account from "./Account";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  //Routes
  const AppRoutes = () => {
    let routes = useRoutes ([
      { path: '/', element: <Home />},
      { path: '/register', element: <Register />},
      { path: '/register-form', element: <RegisterForm />},
      { path: '/login', element: <Login />},
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
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
