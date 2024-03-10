type ButtonIconProps = {
  src: string;
  alt: string;
  onClick: () => void;
};

export default function ButtonIcon({ src, alt, onClick }: ButtonIconProps) {
  return (
    <button
      className="hover:bg-cyan-300 w-full text-center flex flex-row justify-center items-center p-2"
      onClick={onClick}
    >
      <img className="h-6 w-6" src={src} alt={alt} />
    </button>
  );
}
