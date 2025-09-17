import { useState, useEffect } from "react"
import { tokenizeText, decodeTokens } from "../utils/tokenizer"
import TextInput from "./TextInput"
import TokenEncoding from "./TokenEncoding"
import TokenVisualization from "./TokenVisualization"
import TokenDecoding from "./TokenDecoding"
import Header from "./Header"

export default function TokenizerPage() {
  const [inputText, setInputText] = useState("Namaste, welcome to Verba! Explore tokenization and visualize how actually your text getting converted to tokens.")
  const [tokens, setTokens] = useState([])
  const [tokenIds, setTokenIds] = useState([])
  const [decodeInput, setDecodeInput] = useState("")
  const [decodedText, setDecodedText] = useState("")

  useEffect(() => {
    const result = tokenizeText(inputText)
    setTokens(result.tokens)
    setTokenIds(result.tokenIds)
  }, [inputText])

  useEffect(() => {
    if (decodeInput.trim()) {
      try {
        const ids = decodeInput
          .split(",")
          .map((s) => parseInt(s.trim()))
          .filter((n) => !isNaN(n))
        setDecodedText(decodeTokens(ids))
      } catch {
        setDecodedText("Invalid token IDs")
      }
    } else setDecodedText("")
  }, [decodeInput])

  return (
  <div className="min-h-screen bg-gradient-to-br from-orange-200 to-yellow-200 p-4 border border-red-800">
      <div className="max-w-5xl mx-auto space-y-6">
        <Header />

        {/* Input + Encoding */}
        <div className="grid lg:grid-cols-2 gap-6">
          <TextInput inputText={inputText} setInputText={setInputText} />
          <TokenEncoding tokens={tokens} tokenIds={tokenIds} />
        </div>

        {/* Visualization */}
        <TokenVisualization tokens={tokens} />

        {/* Decoding */}
        <TokenDecoding
          decodeInput={decodeInput}
          setDecodeInput={setDecodeInput}
          decodedText={decodedText}
          tokenIds={tokenIds}
        />
      </div>
    </div>
  )
}
