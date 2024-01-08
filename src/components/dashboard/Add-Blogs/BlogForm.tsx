import React, { ChangeEvent, useEffect, useState } from "react";
import AddImages from "./AddImages";
import DescriptionField from "./DescriptionField";
import axios from "axios";



const BlogForm = () => {
  // descriptions
  const [descriptions, setDescriptions] = useState<string[]>(['']);

  const [loading, setLoading] = useState(false)
const maxDescriptions = 3;

const handleAddDescription = () => {
  if (descriptions.length < maxDescriptions) {
    setDescriptions([...descriptions, '']);
  }
};

const handleChange = (index: number, value: string) => {
  setDescriptions((prevDescriptions) =>
    prevDescriptions.map((description, i) => (i === index ? value : description))
  );
};

  // useEffect(() => {
  //   console.log("Updated Descriptions:", descriptions);
  // }, [descriptions]);

  // images
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    const imagesLimit = 3;

    if (!selectedFiles) return;

    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map(file => URL.createObjectURL(file));
    if (selectedImages.length + imagesArray.length > imagesLimit) {
      console.log("You cannot add more than 3 images");
      return;
    }

    setSelectedImages(prevImages => [...prevImages, ...imagesArray]);
  };

  
  const [uploadedImageURLs, setUploadedImageURLs] = useState<string[]>([]);

  const uploadImageToImgBB = async (image: string): Promise<string | null> => {
    try {
     
      const blob = await fetch(image).then((res) => res.blob());
  
      // TODO: hide this api key
      const apiKey = "cee5c8e4272d01a162dd93f5d44c390b"
      
      const formData = new FormData();
      formData.append('image', blob, 'image.png'); 
  
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        formData
      );
  
      // console.log(response);
  
      const imageURL = response.data?.data?.url;
      if (!imageURL) {
        console.error('Error uploading image to ImgBB:', response.data?.error);
        return null;
      }
  
      return imageURL;
    } catch (error: any) {
      console.error('Error uploading image to ImgBB:', error?.message);
      return null;
    }
  };
  
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
  
    const title = (e.target as HTMLFormElement).blogTitle.value;
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

    const blogObj = {
      title, 
      description, 
      image : uploadedImageURLs
    }

    console.log(blogObj)
    setLoading(false)
  };
  
  // useEffect(() => {
  //   console.log("Updated Image URLs:", uploadedImageURLs);
  // }, [uploadedImageURLs]);

  return (
    <form onSubmit={handleSubmit}>
      <label className="text-sm text-gray-500">
        Title
        <input
          type="text"
          className="border mb-4 text-[15px] border-gray-500 w-full px-3 py-2 rounded-md"
          name="blogTitle"
          id="blogTitle"
          placeholder="Enter your blog title here"
        />
      </label>

      <DescriptionField
        handleAddDescription={handleAddDescription}
        maxDescriptions={maxDescriptions}
        handleChange={handleChange}
        descriptions={descriptions}
      />

      <AddImages
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
        onSelectFile={onSelectFile}
      />

      <hr />

      <button
        type="submit"
        className="py-3 mt-4 px-6 font-bold rounded-lg w-fit 
            bg-rose-500 hover:bg-rose-400  duration-300 text-white"
      >
        {
          loading ? <span className="text-white loading loading-spinner loading-md"></span> : <span>Submit</span>
        }
      </button>
    </form>
  );
};

export default BlogForm;
