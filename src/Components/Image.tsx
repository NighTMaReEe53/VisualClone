interface IImage {
  src: string;
  className?: string;
}

const Image = ({ src, className = "w-5 h-5" }: IImage) => {
  return <img src={src} alt="" className={className} />;
};

export default Image;
