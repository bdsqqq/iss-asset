interface PartProp {
  name: string;
  nationality?: string;
  role?: string;
  description: string;
}

const Part: React.FC<PartProp> = ({ name, nationality, role, description }) => {
  return (
    <div className="w-48 p-2 mx-2">
      <div className="flex">
        <div className="h-auto break-hiphen">
          <p className="font-bold text-2xl">{name}</p>
          {role ? (
            <p className="text-xs">{role}</p>
          ) : (
            <>
              <div className="text-center text-xs">
                <br />
              </div>
            </>
          )}
        </div>
      </div>
      <br />
      <p className="text-sm text-justify break-hiphen">{description}</p>
    </div>
  );
};

export default Part;

import Image from "next/image";
