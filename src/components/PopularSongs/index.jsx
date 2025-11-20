import React from "react";
import DataTable from "react-data-table-component";
import "./styles.scss";
import { Heart } from "lucide-react";

const columns = [
  {
    name: "#",
    sortable: true,
    selector: (row) => <>{row.id}</>,
  },
  {
    name: "Name",
    sortable: true,
    selector: (row) => (
      <>
        <img
          className="album-thumb"
          src="/placeholder.png"
          alt=""
          height={30}
          width={30}
        />
        {row.title}
      </>
    ),
  },
  {
    name: "Album",
    sortable: true,
    selector: (row) => row.year,
  },
  {
    name: "",
    selector: (row) => row.favourite,
  },
  {
    name: "",
    selector: (row) => row.duration,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
    favourite: <Heart size={20} />,
    duration: "4:52",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    favourite: <Heart size={20} />,
    duration: "4:52",
  },
];

function index() {
  return (
    <div id="popular-songs-home">
      <div className="wrapper">
        <div className="sub-title mt-4 mb-3">Popular</div>

        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default index;
