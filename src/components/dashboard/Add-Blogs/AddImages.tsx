import React, { useState, ChangeEvent } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

interface AddImagesProps {
  selectedImages: string[];
  onSelectFile: (e: ChangeEvent<HTMLInputElement>) => void;
  setSelectedImages: React.Dispatch<React.SetStateAction<string[]>>;
}

const AddImages: React.FC<AddImagesProps> = ({
  selectedImages,
  onSelectFile,
  setSelectedImages,
}) => {
  return (
    <>
      <button
        className={` gap-2 flex relative  items-center py-3 px-6 font-bold rounded-lg w-fit ${
          selectedImages.length === 3
            ? "bg-gray-500"
            : "bg-rose-500 hover:bg-rose-400"
        }  duration-300 text-white`}
      >
        <MdOutlineAddPhotoAlternate />
        Add Photo
        <input
          disabled={selectedImages.length === 3}
          onChange={onSelectFile}
          accept="image/png,  image/jpeg, image/webp"
          name="images"
          className={`absolute opacity-0 cursor-pointer right-0  w-[150px] h-[46px]`}
          type="file"
        />
      </button>

      <div className="my-10 flex gap-10">
        {selectedImages.map((image, index) => (
          <div className="h-20 relative rounded-lg" key={index}>
            <img className="h-full w-full object-contain" src={image} alt="" />
            <RxCross2
              onClick={() =>
                setSelectedImages(selectedImages.filter((e) => e !== image))
              }
              className="p-1 text-2xl text-white bg-red-500 rounded-full absolute -top-2 -right-3 cursor-pointer hover:bg-red-400 duration-300"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AddImages;
