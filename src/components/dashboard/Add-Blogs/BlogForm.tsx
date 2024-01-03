import React, { useState } from "react";
import AddImages from "./AddImages";
import DescriptionField from "./DescriptionField";

const BlogForm = () => {
  const [descriptions, setDescriptions] = useState([{ id: 1, value: "" }]);
  const maxDescriptions = 3;

  const handleAddDescription = () => {
    if (descriptions.length < maxDescriptions) {
      const newDescription = { id: descriptions.length + 1, value: "" };
      setDescriptions([...descriptions, newDescription]);
    }
  };
  const handleChange = (id: number, value: string) => {
    setDescriptions((prevDescriptions) =>
      prevDescriptions.map((description) =>
        description.id === id ? { ...description, value } : description
      )
    );
    // console.log(descriptions);
  };

  //   handleFormchange here
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="text-sm text-gray-500">
        Title
        <input
          type="text"
          className="border mb-4 text-[15px] border-gray-500 w-full px-3 py-2 rounded-md"
          name="blog-title"
          id="blog-title"
          placeholder="Enter your blog title here"
        />
      </label>
      <DescriptionField
        handleAddDescription={handleAddDescription}
        maxDescriptions={maxDescriptions}
        handleChange={handleChange}
        descriptions={descriptions}
      />
      <AddImages />

      <hr />

      <button
        type="submit"
        className="py-3 mt-4 px-6 font-bold rounded-lg w-fit 
            bg-rose-500 hover:bg-rose-400  duration-300 text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
