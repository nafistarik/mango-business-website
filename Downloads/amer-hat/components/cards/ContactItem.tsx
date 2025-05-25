import React from "react";

const ContactItem = ({
  Icon,
  title,
  infos,
}: {
  Icon: React.ElementType;
  title: string;
  infos: string[];
}) => {
  return (
    <div className="flex items-center  gap-4">
      <div className="bg-leaf-100 p-3 rounded-full">
        <Icon className="h-6 w-6 text-leaf-600" />
      </div>
      <div className="flex flex-col items-start">
        <h4 className="font-medium text-leaf-800 mb-1">{title}</h4>
        {infos.map((info, index) => (
          <p key={index} className="text-gray-700">
            {info}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContactItem;
