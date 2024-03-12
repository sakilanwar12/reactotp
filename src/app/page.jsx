"use client"

import { OtpInput } from "../otp";

const Home = () => {
  const handleValue = (value) => {
    console.log(value)
  }
  return (
    <main className="container min-h-screen max-w-xl w-full flex justify-center items-center">

      <form >
        <OtpInput
          buttonLabel="verify Now"
          numInputs={6}
          getValue={handleValue}
          removeStyles
          classNames={{
            layoutWrapper: "w-full flex-1 flex-col gap-3",
            inputWrapper: "flex flex-wrap gap-3",
            input: "w-12 h-12 rounded-md border border-gray-300 text-center",
            button: "h-10 border border-gray-300 mt-4 px-4 capitalize rounded-md w-full"
          }}
        />

      </form>

    </main>
  );
};

export default Home;