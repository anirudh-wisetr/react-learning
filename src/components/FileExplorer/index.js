import { useState } from "react";

const FileExplorer = ({ fileData = {} }) => {
  const { name = "", children = [], type = "" } = fileData;
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div
      className="flie-explorer-wrapper"
      style={{
        borderLeft: "1px solid",
        marginTop: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "12px",
          paddingLeft: "12px",
        }}
        onClick={() => setShowChildren((prev) => !prev)}
      >
        <span>{type === "folder" ? (showChildren ? `📁` : `📂`) : `📄`}</span>
        <label>{name}</label>
      </div>
      {showChildren &&
        children?.map((data, index) => {
          return (
            <div style={{ paddingLeft: "12px" }}>
              <FileExplorer fileData={data} key={index} />
            </div>
          );
        })}
    </div>
  );
};

export default FileExplorer;
