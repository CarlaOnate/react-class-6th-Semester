
import { RouteObject, createBrowserRouter } from "react-router-dom";
import {ROUTES} from "./constants";
import {MovieList} from "../components/MovieList";

const routes: RouteObject[] = [
    {
        path: ROUTES.MOVIELIST,
        element: <MovieList />,
    }
];

export const router = createBrowserRouter(routes);