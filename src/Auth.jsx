import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "./supabase/supabaseClient";
// import Register from "./pages/Auth/Register";

const AuthContext = createContext()

function AuthProvider ({ children }) {
  // const [user, setUser] = useState(null)
  const [session, setSession] = useState(null);

  // const login = ({ userEmail }) => {
  //   setUser({ userEmail })
  //   Navigate('/profile')
  // }
  // const auth = { user }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ session }}>
        { children }
      </AuthContext.Provider>
    </>
  )
}


const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useData must be used within a Provider");
  }
  return context;
};

// function useAuth () {
//   const auth = useContext(AuthContext)
//   return auth
// }

export { AuthProvider, useAuth }

// export default function Auth() {
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     setLoading(true);
//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       alert(error.error_description || error.message);
//     } else {
//       console.log("logueado");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="row flex flex-center">
//       {/* <div className="col-6 form-widget">
//         <h1 className="header">Supabase + React</h1>
//         <p className="description">
//           Sign in via magic link with your email below
//         </p>
//         <form className="form-widget" onSubmit={handleLogin}>
//           <div>
//             <input
//               className="inputField"
//               type="email"
//               placeholder="Your email"
//               value={email}
//               required={true}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <input
//               className="inputField"
//               type="password"
//               placeholder="Password"
//               value={password}
//               required={true}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div>
//             <button className={"button block"} disabled={loading}>
//               {loading ? <span>Loading</span> : <span>Sing In</span>}
//             </button>
//           </div>
//         </form>
//       </div> */}
//         <Register />
//     </div>
//   );
// }
