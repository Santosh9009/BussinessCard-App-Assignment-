// eslint-disable-next-line no-unused-vars
import React from "react";

export default function CreateCard() {
  return (
    <div className="w-full flex flex-col gap-6 p-10 bg-[#201E1F] m-10">
      <input className="h-12 text-lg px-3 rounded" type="text" placeholder="Name" />
      <input className="h-12 text-lg px-3 rounded" type="text" placeholder="Description" />
      <input className="text-lg p-3 rounded" type="text" placeholder="Interest" />
      <input className="h-12 text-lg px-3 rounded" type="text" placeholder="Linkdin" />
      <input className="h-12 text-lg px-3 rounded" type="text" placeholder="Twitter" />

      <button className="w-[20%] bg-[#59CD90] hover:bg-[#7cf6b5] text-xl text-white font-bold py-2 px-4 rounded">
  Add
</button>
    </div>
  );
}
