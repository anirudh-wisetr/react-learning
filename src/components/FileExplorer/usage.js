import { useImperativeHandle } from "react";
import FileExplorer from "./component/search";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FileExplorer fileData={fileData} />
    </div>
  );
}

const fileData = {
  name: "File Explorer",
  type: "folder",
  children: [
    {
      name: "Public",
      type: "folder",
      children: [
        {
          name: "index.html",
          type: "file",
        },
      ],
    },
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "components",
          type: "folder",
          children: [
            {
              name: "Search",
              type: "folder",
              children: [
                {
                  name: "index.js",
                  type: "file",
                },
                {
                  name: "style.scss",
                  type: "file",
                },
              ],
            },
            {
              name: "Accordion",
              type: "folder",
              children: [
                {
                  name: "index.js",
                  type: "file",
                },
                {
                  name: "style.scss",
                  type: "file",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
