import Image from "./Image";

const WelcomeComponent = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Image src="/icons/vscode.svg" className="w-64 h-64" />
    </div>
  );
};

export default WelcomeComponent;
