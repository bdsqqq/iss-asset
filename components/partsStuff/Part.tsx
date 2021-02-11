interface PartProp {
  key: string;
  name: string;
  nationality?: string;
  role?: string;
  description: string;
}

const Part: React.FC<PartProp> = ({
  key,
  name,
  nationality,
  role,
  description,
}) => {
  return (
    <div className="w-48" key={key}>
      <p className="text-center font-bold text-2xl">{name}</p>
      <Image
        className="mx-auto"
        src="/images/60x60.svg"
        width={60}
        height={60}
      />
      {role ? (
        <p className="text-center font-light">{role}</p>
      ) : (
        <>
          <br />
          <br />
        </>
      )}
      <br />
      <p>{description}</p>
    </div>
  );
};

export default Part;

import Image from "next/image";
