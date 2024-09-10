import React from "react";

const Contact = () => {
  return (
    <div className=" h-[35rem] flex items-center justify-center ">
      <div className="border-black border-2 h-[30rem] w-[40rem] flex flex-col items-center py-10 bg-gray-300">
        <p className="text-2xl font-serif font-semibold">SEND YOUR MESSAGE</p>
        <div className=" w-[65%] h-screen p-10">
          <form className="flex flex-col items-center gap-3 ">
            <div className="flex gap-2 w-[380px]">
             
              <div className="flex flex-col gap-2  ">
                <label for="username" className="text-gray-400">NAME</label>
                <input type="text" placeholder="Name" className="border border-gray-400 rounded-sm h-9 " />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="text-gray-400" for="username">EMAIL</label>
                <input type="email" placeholder="Email" className="border border-gray-400 rounded-sm h-9  " />
              </div>
             
            </div>
            <div className="flex flex-col gap-2 w-[380px]  ">
            <label className="text-gray-400" for="username">Subject</label>
            <select type="text" placeholder="subject" className="border border-gray-400 rounded-sm h-9 w-full " >
              <option disabled selected>subject </option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            </div>
            <div className="flex flex-col gap-2 w-[380px]  ">
            <label className="text-gray-400" for="username">MESSAGE</label>
            <textarea type="text" placeholder="Write your message here" className="border border-gray-400 rounded-sm h-24 w-full placeholder-gray-300 " />
            </div>
            <button className="bg-red-300 h-10 w-[380px] ">Send your message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
