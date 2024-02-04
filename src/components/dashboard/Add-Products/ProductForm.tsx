import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import AddProductImages from "./AddProductImages";

const ProductForm = () => {
  // descriptions
  const [descriptions, setDescriptions] = useState<string[]>([""]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleSizeChange = (event: any) => {
    setSelectedSize(event.target.value);
  };

  const handleColorChange = (event: any) => {
    setSelectedColor(event.target.value);
  };

  const handleChange = (index: number, value: string) => {
    console.log(index, value);
    setDescriptions((prevDescriptions) => {
      console.log(prevDescriptions);
      return prevDescriptions.map((description, i) => {
        console.log(description);
        return i === index ? value : description;
      });
    });
  };

  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    const imagesLimit = 5;

    if (!selectedFiles) return;

    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) =>
      URL.createObjectURL(file)
    );
    if (selectedImages.length + imagesArray.length > imagesLimit) {
      console.log("You cannot add more than 5 images");
      return;
    }

    setSelectedImages((prevImages) => [...prevImages, ...imagesArray]);
  };

  const [uploadedImageURLs, setUploadedImageURLs] = useState<string[]>([]);

  const uploadImageToImgBB = async (image: string): Promise<string | null> => {
    try {
      const blob = await fetch(image).then((res) => res.blob());

      // TODO: hide this api key
      const apiKey = "cee5c8e4272d01a162dd93f5d44c390b";

      const formData = new FormData();
      formData.append("image", blob, "image.png");

      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        formData
      );

      // console.log(response);

      const imageURL = response.data?.data?.url;
      if (!imageURL) {
        console.error("Error uploading image to ImgBB:", response.data?.error);
        return null;
      }

      return imageURL;
    } catch (error: any) {
      console.error("Error uploading image to ImgBB:", error?.message);
      return null;
    }
  };
  const handleContent = (e) => {
    console.log(e.target.value);
  };

  const handleInputChange = (event: any) => {
    setTagInput(event.target.value);
  };

  const handleInputKeyDown = (event: any) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    if (tagInput.trim() !== "" && tags.length < 5) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const productTitle = (e.target as HTMLFormElement).Title.value;
    const newPrice = (e.target as HTMLFormElement).newPrice.value;
    const oldPrice = (e.target as HTMLFormElement).oldPrice.value;
    const content = (e.target as HTMLFormElement).content?.value;
    const Tdescription = (e.target as HTMLFormElement).Tdescription?.value;
    const stockStatus = (e.target as HTMLFormElement).stockStatus?.value;

    const products = {
      productTitle,
      price: { newPrice, oldPrice },
      content,
      Tdescription,
      stockStatus,
      selectedSize,
      selectedColor,
      images: uploadedImageURLs,
      tags,
    };
    console.log(products);

    const title = (e.target as HTMLFormElement).Title.value;
    const description = descriptions;

    const uploadedURLs: string[] = [];
    // console.log(uploadedURLs)

    for (const image of selectedImages) {
      const imageURL = await uploadImageToImgBB(image);
      if (imageURL) {
        uploadedURLs.push(imageURL);
      } else {
        console.log("Skipping current image upload due to an error");
      }
    }

    setUploadedImageURLs(uploadedURLs);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="text-sm text-gray-500">
        Title
        <input
          type="text"
          className="border mb-4 text-[15px] border-gray-500 w-full px-3 py-2 rounded-md"
          name="Title"
          id="Title"
          placeholder="Enter your blog title"
        />
      </label>

      <div className="w-[50%] inline-block pr-1">
        <label className="text-sm text-gray-500">
          New Price
          <input
            type="text"
            className="border mb-4 text-[15px] border-gray-500 w-full px-3 py-2 rounded-md"
            name="newPrice"
            id="newPrice"
            placeholder="Enter New Price"
          />
        </label>
      </div>

      <div className="w-[50%] inline-block pl-1">
        <label className="text-sm text-gray-500">
          Old Price
          <input
            type="text"
            className="border mb-4 text-[15px] border-gray-500 w-full px-3 py-2 rounded-md"
            name="oldPrice"
            id="oldPrice"
            placeholder="Enter Old Price"
          />
        </label>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <label className="text-sm text-gray-500">
          Content
          <textarea
            name="content"
            rows={5}
            className="border mb-4 text-[15px]  border-gray-500 w-full px-3 py-2 rounded-md"
            placeholder="Enter your content here"
          />
        </label>
        <label className="text-sm text-gray-500">
          Description
          <textarea
            name="Tdescription"
            rows={5}
            className="border mb-4 text-[15px]  border-gray-500 w-full px-3 py-2 rounded-md"
            placeholder="Enter your description here"
          />
        </label>
      </div>

      <div className="flex items-center gap-6 py-2 uppercase">
        <div className="">
          <label htmlFor="size">Size:</label>
          <select
            onChange={handleSizeChange}
            className="py-2 px-4 border-2 ms-3"
            name="size"
            id="size"
          >
            <option value="xs">XS</option>
            <option value="s">s</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </select>
        </div>
        <div className="">
          <label htmlFor="color">Color:</label>
          <select
            onChange={handleColorChange}
            className="py-2 px-4 border-2 ms-3"
            name="color"
            id="color"
          >
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="white">White</option>
          </select>
        </div>
      </div>

      <AddProductImages
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
        onSelectFile={onSelectFile}
      />

      <div className="">
        <label className="text-sm text-gray-500">
          Stock Status
          <input
            type="text"
            className="border mb-4 text-[15px] border-gray-500 w-full px-3 py-2 rounded-md"
            name="stockStatus"
            placeholder="Enter Product Status"
          />
        </label>
        <div>
          <input
            type="text"
            value={tagInput}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder="Type tags and press ',' or Enter to add"
            className="border mb-4 text-[15px] border-gray-500 w-full px-3 py-2 rounded-md"
          />
        </div>
      </div>
      <hr />
      <button
        type="submit"
        className="py-3 mt-4 px-6 font-bold rounded-lg w-fit 
        bg-rose-500 hover:bg-rose-400  duration-300 text-white"
      >
        {loading ? (
          <span className="text-white loading loading-spinner loading-md"></span>
        ) : (
          <span>Submit</span>
        )}
      </button>
    </form>
  );
};

export default ProductForm;
