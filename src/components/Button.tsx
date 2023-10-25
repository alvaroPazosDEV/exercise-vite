interface Props {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-cyan-800 rounded-lg text-white flex flex-row items-center justify-center px-4 h-10 border-2 border-sky-100"
    >
      {text}
    </button>
  );
}
