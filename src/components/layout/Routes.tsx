import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Note from "../../pages/Note";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "notes",
    element: <Note />,
    children: [
      {
        path: ":id",
        element: <Note />
      }
    ]
  },

]

export default routes;