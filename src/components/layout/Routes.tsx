import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Note from "../../pages/Note";
import Layout from "./Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
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
  },


]

export default routes;