interface Props {
  message: string;
  onClose: () => void;
}

export default function Modal({ message, onClose }: Props) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="bg-slate-300 rounded-lg w-[500px] py-4 px-10 flex flex-row">
            <p className="flex flex-1 font-semibold">{message}</p>
            <button onClick={onClose} className="font-bold">
              X
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
