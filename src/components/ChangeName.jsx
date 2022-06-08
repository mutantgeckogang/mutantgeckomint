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
        className="bg-green-500 px-6 py-2 rounded-sm text-xl font-semibold uppercase text-white cursor-pointer"
      >
        MINT
      </button>
    </div>
  );
}
