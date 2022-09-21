const Container: React.FC = ({ children }) => {
  return (
    <div className="relative h-screen bg-slate1">
      <main className="flex flex-col justify-center">{children}</main>
    </div>
  );
};

export default Container;
