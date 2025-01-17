import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Note from "../../pages/Note";
import NoteUpdate from "../../pages/NoteUpdate";
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
        path: "note",
        element: <Note />,
      },
      {
        path: "note/:id",
        element: <NoteUpdate />,
      },
    ],
  },
];

export default routes;
