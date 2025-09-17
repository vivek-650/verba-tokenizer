export default function TextInput({ inputText, setInputText }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-lg text-orange-600">📝 Text Input</h2>
        <button
          className="text-sm px-3 py-1 border rounded"
          onClick={() => setInputText("")}
        >
          Clear
        </button>
      </div>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="w-full p-3 border rounded min-h-[100px]"
      />
      <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">
        {inputText.length} characters
      </p>
    </div>
  );
}
