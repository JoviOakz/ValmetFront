import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import BudgetPage from "../pages/BudgetPage";
import RegisterPage from "../pages/RegisterPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />
    },
    {
        path: '/budget',
        element: <BudgetPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    }
]);