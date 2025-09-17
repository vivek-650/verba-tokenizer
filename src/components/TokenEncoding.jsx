import { Copy } from "lucide-react"
import toast from "react-hot-toast"

export default function TokenEncoding({ tokens, tokenIds }) {
  return (
  <div className="bg-white p-4 rounded-2xl shadow ">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-lg text-orange-600">🔢 Token Encoding ({tokens.length})</h2>
        <button
          className="text-sm px-3 py-1 border rounded"
          onClick={() => {
            navigator.clipboard.writeText(tokenIds.join(", "))
            toast.success("Copied IDs!")
          }}
        >
          <Copy className="inline w-4 h-4 mr-1" /> Copy
        </button>
      </div>
      <div className="space-y-2">
        <p className="mb-3">Token → ID Mapping: </p>
        <div className="flex flex-wrap gap-1 max-h-32 overflow-y-auto">
          
          {tokens.map((t, i) => (
            <span key={i} className="bg-gray-100 px-2 py-1 text-xs rounded dark:bg-gray-800">
              "{t}" → {tokenIds[i]}
            </span>
          ))}
        </div>
        <p className="">Token Sequence: </p>
        <div className="bg-gray-50 p-2 rounded text-sm font-mono dark:bg-gray-800">
          [{tokenIds.join(", ")}]
        </div>
      </div>
    </div>
  )
}
