import React from "react";

const ContactInfoItem = ({
  Icon,
  title,
  info1,
  info2,
}: {
  Icon: React.ElementType;
  title: string;
  info1: string;
  info2: string;
}) => {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-leaf-100 p-3 rounded-full">
        <Icon className="h-6 w-6 text-leaf-600" />
      </div>
      <div>
        <h4 className="font-medium text-leaf-800 mb-1">{title}</h4>
        <p className="text-gray-700">{info1}</p>
        <p className="text-gray-700">{info2}</p>
      </div>
    </div>
  );
};

export default ContactInfoItem;
