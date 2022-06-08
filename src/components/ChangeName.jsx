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
        className="bg-lawngreen-500 px-12 py-3 rounded-sm text-xs font-semibold uppercase text-white cursor-pointer"
      >
        MINT
      </button>
    </div>
  );
}
