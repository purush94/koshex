import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  return (
    <div>
      <div
        style={{ position: "relative", display: "flex", alignItems: "center" }}
      >
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: "24px",
            padding: "0px 5px",
            alignItems: "center",
          }}
        >
          <SearchIcon
            sx={{
              color: "#557aff",
              fontSize: "15px",
              // display: "flex",
              // alignItems: "center",
            }}
          />
        </div>
        <input
          type="search"
          placeholder="Search by PAN, Email, Mobile No"
          style={{
            backgroundColor: "#f4f7ff",
            border: "none",
            borderRadius: "3px",
            width: "160px",
            height: "25px",
            paddingLeft: "20px",
            fontfamily: "SFProDisplay",
            fontSize: "9px",
          }}
        />
      </div>
    </div>
  );
}

export default Search;
