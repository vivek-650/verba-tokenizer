import { motion, AnimatePresence } from "framer-motion"
import { getTokenColor } from "../utils/tokenizer.js"

export default function TokenVisualization({ tokens }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow d">
      <h2 className="font-bold text-lg text-orange-600 mb-4">
        🎨 Token Visualization
      </h2>
      <div className="flex flex-wrap gap-2">
        <AnimatePresence>
          {tokens.map((t, i) => (
            <motion.span
              key={`${t}-${i}`}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ duration: 0.2, delay: i * 0.03 }}
              className={`${getTokenColor(
                t,
                i
              )} px-2 py-1 rounded-xl font-mono text-sm shadow-sm`}
            >
              {t === " " ? "␣" : t === "\n" ? "↵" : t}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
