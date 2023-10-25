import { useDispatch, useSelector } from "react-redux";
import Form from "./components/Form";
import { RootState } from "./features/store";
import Modal from "./components/Modal";
import { hide } from "./features/form/modalSlice";

export default function App() {
  const modalData = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  return (
    <>
      {modalData.show && (
        <Modal message={modalData.message} onClose={() => dispatch(hide())} />
      )}
      <div className="flex items-center justify-center min-h-[100vh] bg-slate-900">
        <Form />
      </div>
    </>
  );
}
