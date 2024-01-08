import React from "react";

const AboutHero = () => {
  return (
    <div>
      <div className="sm:flex justify-center gap-4 items-center p-6">
        <img
          className="sm:w-7/12 w-full"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
        <div className="sm:w-6/12 mt-5 w-full  ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">
            Who We Are
          </h2>
          <p className="mt-4 leading-8 text-[16px] text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            consequuntur quibusdam enim expedita sed nesciunt incidunt accusamus
            adipisci officia libero laboriosam!
          </p>
          <p className="mt-4 leading-8 text-[16px] text-gray-600">
            Proin gravida nibh vel velit auctor aliquet. nec sagittis sem nibh
            id elit. Duis sed odio sit amet nibh vultate cursus a sit amet
            mauris. Duis sed odio sit amet nibh vultate cursus a sit amet
            mauris.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
