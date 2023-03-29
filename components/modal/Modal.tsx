import React from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FileOpenIcon from "@mui/icons-material/FileOpen";

type Props = {
  onClose: any;
};

function Modal({ onClose }: Props) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto backdrop-blur-xl fixed z-50 inset-0 outline-none focus:outline-none">
        <div className="relative w-5/6 h-2/6 my-6 mx-auto max-w-3xl ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  bg-gray-400 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl text-purple-200 font-semibold flex justify-center align-middle">
                Contact Information
              </h3>
            </div>
            {/*body*/}
            <div className="my-7">
              <div className="relative p-3 mx-10 flex-auto flex flex-row">
                <EmailOutlinedIcon />
                <p className="mx-5 text-purple-200">shayleeomeyer@gmail.com</p>
              </div>
              <div className="relative p-3  mx-10 flex-auto flex flex-row">
                <LocalPhoneOutlinedIcon />
                <p className="mx-5 text-purple-200">906-282-6127</p>
              </div>
              <li className="relative p-3  mx-10 flex-auto flex flex-row">
                <FileOpenIcon />
                <a
                  download
                  href="ShayleeMeyerResume.pdf"
                  className="mx-5 text-purple-200 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </li>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="p-1 ml-auto bg-transparent border-0  opacity-2 float-right text-md text-purple-200 leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-60 bg-black"></div>
    </>
  );
}
export default Modal;
