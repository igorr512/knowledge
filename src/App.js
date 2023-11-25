import logo from "./logo.svg";
import "./App.css";
import RootLayout from "./Layouts/RootLayout";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import MainPage from "./Pages/MainPage";

function App() {
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                { path: "/", element: <MainPage />  },
            ],
        },
      ]);

      return (
    
        <RouterProvider router={router} />
        
      );
    // return (
    //     <div className="app-layout">
    //         <Header></Header>
            
    //     </div>
    // );
}

export default App;
