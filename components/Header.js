import Image from "next/image";
import { useEditor } from "../hooks";

export default function Header() {
  const editor = useEditor();

  const handleImageChange = (e) => {
    editor.setImage(e);
  };
  const handleClick = () => document.getElementById("file-upload").click();

  return (
    <nav className="flex justify-between bg-gray-100 px-[24px] py-[16px] h-[75px]">
      <div className="flex gap-6">
        <Image
          priority
          src="/images/nav/logo.svg"
          alt="loog"
          width="40"
          height="40"
          className="ml-2 w-[40px] h-[40px]"
        />
        <button
          onClick={handleClick}
          className="w-[75px] border-2 border-blue-900 bg-transparent text-blue-900 rounded-lg items-center flex justify-center text-xs hover:text-sm"
        >
          <span className="flex justify-center items-center mr-2 w-4 h-4  border-[1px] border-blue-900 rounded-full">
            +
          </span>
          <span>New</span>
        </button>
        <input
          type="file"
          id="file-upload"
          style={{ display: "none" }}
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <div className="flex items-center">
        <button className="">
          <Image
            src="/images/nav/hand.svg"
            width="40"
            height="40"
            alt="drag"
            className="rounded-lg"
          />
        </button>
        <span className="flex h-[50%] w-[1px] bg-gray-200 h-px flex-grow mx-2"></span>
        <button className="">
          <Image
            src="/images/nav/undo.svg"
            width="40"
            height="40"
            alt="drag"
            className="rounded-lg"
          />
        </button>
        <span className="flex h-[50%] w-[1px] bg-gray-200 h-px flex-grow mx-2"></span>
        <button className="">
          <Image
            src="/images/nav/redo.svg"
            width="40"
            height="40"
            alt="drag"
            className="rounded-lg"
          />
        </button>
        <span className="flex h-[50%] w-[1px] bg-gray-200 h-px flex-grow mx-2"></span>
        <button className="">
          <Image
            src="/images/nav/reset.svg"
            width="40"
            height="40"
            alt="drag"
            className="rounded-lg"
          />
        </button>
      </div>
      <div className="flex gap-6">
        <button className="w-[167px] border-2 border-blue-900 bg-blue-900 text-white rounded-lg inline-flex items-center flex justify-center text-xs hover:text-sm gap-1">
          <Image src="/images/nav/save.svg" alt="loog" width="20" height="20" />
          <span>Save or Download</span>
        </button>
        <Image
          src="/images/nav/user.svg"
          alt="loog"
          width="40"
          height="40"
          className="w-[40px] h-[40px]"
        />
      </div>
    </nav>
  );
}
