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
    console.log(descriptions);
  };
  return (
    <form>
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
    </form>
  );
};

export default BlogForm;
