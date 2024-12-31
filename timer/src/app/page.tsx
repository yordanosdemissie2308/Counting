import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-4xl font-bold text-center text-gray-700 bg-gray-200 rounded-lg py-4 px-8 shadow-md">
        00:00
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-opacity disabled:opacity-50">
          Start
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-opacity disabled:opacity-50">
          Pause
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-opacity disabled:opacity-50">
          Reset
        </button>
      </div>

    </>
  );
}
