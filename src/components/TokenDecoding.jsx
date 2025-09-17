import { RotateCcw } from "lucide-react"

export default function TokenDecoding({ decodeInput, setDecodeInput, decodedText, tokenIds }) {
  return (
  <div className="bg-white p-4 rounded-2xl shadow dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg text-orange-600">🔓 Token Decoding</h2>
        <button
          className="text-sm px-3 py-1 border rounded"
          onClick={() => {
            setDecodeInput("")
          }}
        >
          <RotateCcw className="inline w-4 h-4 mr-1" /> Reset
        </button>
      </div>
      <input
        type="text"
        value={decodeInput}
        onChange={(e) => setDecodeInput(e.target.value)}
        placeholder={`Try: ${tokenIds.slice(0, 5).join(", ")}`}
        className="w-full p-2 border rounded font-mono"
      />
      {decodedText && (
  <div className="bg-green-50 border p-3 rounded mt-3 font-mono dark:bg-green-900 dark:text-green-100">{decodedText}</div>
      )}
    </div>
  )
}
