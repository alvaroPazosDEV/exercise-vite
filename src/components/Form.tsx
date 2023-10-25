import { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { show } from "../features/form/modalSlice";

const countries = [
  {
    label: "Peru",
    value: "PE",
  },
  {
    label: "United States",
    value: "US",
  },
];

export default function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setError("");
  }, [name, age, selectedCountry]);

  const onSubmitForm = () => {
    if (!name || !age || !selectedCountry)
      return setError("Please complete all the fields");
    if (!/^[A-Z]+$/i.test(name))
      return setError(
        "Name should only have alphabetic characters. Please, review it"
      );
    const countryName = countries.find(
      (c) => c.value === selectedCountry
    )?.label;
    dispatch(
      show({
        message: `User ${name}, ${age} years old from ${countryName} was successfully registered in the platform.`,
        show: true,
      })
    );
  };

  return (
    <form
      className="flex flex-col bg-slate-200 py-8 px-6 text-black rounded-xl w-[80%] sm:w-[450px]"
      onSubmit={(e) => e.preventDefault()}
    >
      <h1 className="font-semibold text-2xl text-slate-600">Register user</h1>
      <section className="flex flex-col gap-4 mt-5">
        <Input
          label="Full name"
          type="text"
          value={name}
          onChange={(text) => setName(text)}
        />
        <Input
          label="Age"
          type="number"
          value={age}
          onChange={(text) => setAge(text)}
        />
        <Input
          label="Country"
          type="select"
          value={selectedCountry}
          options={countries}
          onChange={(value) => setSelectedCountry(value)}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Button text="Submit" onClick={() => onSubmitForm()} />
      </section>
    </form>
  );
}
