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
import { PersonalTrainersCards } from "./pages/personalTrainers"
import { NutritionistsCards } from "./pages/nutritionists"
import { PhysiotherapistsCards } from "./pages/physiotherapists"

function App() {
  //Routes
  const AppRoutes = () => {
    let routes = useRoutes ([
      { path: '/', element: <Home /> },
      { path: '/register', element: <Register /> },
      { path: '/register-form', element: <RegisterForm /> },
      { path: '/login', element: <Login /> },
      { path: '/my-profile', element: <MyProfile /> },
      { path: '/trainers', element: <Trainers /> },
      { path: '/trainers/personal-trainers', element: <PersonalTrainersCards /> },
      { path: '/trainers/nutritionits', element: <NutritionistsCards /> },
      { path: '/trainers/physiotherapists', element: <PhysiotherapistsCards /> },
      { path: '/trainers/profile/:idProfile', element: <Profile /> },
      { path: '/*', element: <NotFound /> }
    ])

    return routes
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
