import React from 'react';
interface DescriptionFieldProps {
    descriptions: { id: number; value: string }[];
    handleChange: (id: number, value: string) => void;
    maxDescriptions: number;
    handleAddDescription: () => void;
  }

const DescriptionField: React.FC<DescriptionFieldProps> = ({descriptions, handleChange, maxDescriptions, handleAddDescription }) => {
    return (
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {descriptions.map((description) => (
          <label key={description.id} className="text-sm text-gray-500">
            Description {description.id}
            <textarea
              onChange={(e) => handleChange(description.id, e.target.value)}
              rows={5}
              className="border mb-4 text-[15px]  border-gray-500 w-full px-3 py-2 rounded-md"
              name="blog-title"
              id="blog-title"
              placeholder="Enter your blog title here"
            />
          </label>
        ))}
        {descriptions.length < maxDescriptions && (
          <button
            onClick={handleAddDescription}
            className="h-[115px] w-[115px] flex justify-center items-center border-2 rounded-lg font-semibold text-gray-500 hover:text-gray-400 text-center duration-200 border-dashed border-gray-500 hover:border-gray-400 mt-5 bg-gray-200"
          >
            Add <br />
            Description
          </button>
        )}
      </div>
    );
};

export default DescriptionField;