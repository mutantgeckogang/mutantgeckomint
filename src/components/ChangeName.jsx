import { useState } from "react";
import { changeName } from "../utils/wallet";

export default function ChangeName(props) {
  const [name, setName] = useState("");

  return (
    <div className="flex">
      <button
        onClick={() => {
          changeName(name);
        }}
        className="bg-green-250 px-0 py-0 rounded-sm text-md font-semibold uppercase text-white cursor-pointer"
      >
        MINT
      </button>
    </div>
  );
}
