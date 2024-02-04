import React from 'react';

interface DescriptionFieldProps {
  descriptions: string[];
  handleChange: (index: number, value: string) => void;
  maxDescriptions: number;
  handleAddDescription: () => void;
}

const ProductTextarea: React.FC<DescriptionFieldProps> = ({
  descriptions,
  handleChange,
  maxDescriptions,
  handleAddDescription,
}) => {
  const value1 = descriptions[0];
  const value2 = descriptions[1];
  console.log(value1);
  console.log(value2);
  const description = descriptions.map(descript => {
    return console.log(descript);
  })
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      
        <label  className="text-sm text-gray-500">
          Content {1 + 1}
          <textarea
            onChange={(e) => handleChange(1, e.target.value)}
            value={descriptions.map(description => description)}
            rows={5}
            className="border mb-4 text-[15px]  border-gray-500 w-full px-3 py-2 rounded-md"
            placeholder="Enter your description here"
          />
        </label>
        <label  className="text-sm text-gray-500">
          Content {1 + 1}
          <textarea
            onChange={(e) => handleChange(2, e.target.value)}
            value={descriptions.map(description => description)}
            rows={5}
            className="border mb-4 text-[15px]  border-gray-500 w-full px-3 py-2 rounded-md"
            placeholder="Enter your description here"
          />
        </label>
    </div>
  );
};

export default ProductTextarea;
