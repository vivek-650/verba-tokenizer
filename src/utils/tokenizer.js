const createSimpleTokenizer = () => {
  const vocabulary = new Map()
  const reverseVocab = new Map()

  const commonTokens = [
    "Hello","world","the","and","or","but","in","on","at","to","for","of","with","by",
    "Price",":","199",".","99","INR","Chai","Coffee","Let's","tokenize","this","text",
    "a","an","is","are","was","were","be","been","have","has","had","do","does","did",
    "will","would","could","should","can","may","might","must","shall","ought"," ",
    "\n","\t","!","?",",",";","(",")","[","]","{","}","\"","'","-","_","+","=",
    ..."0123456789","Namaste","Hi","Bye","Good","Morning","Evening","Night","Shukriya",
    "Dhanyavaad","Ok","Arrey","Ji",
    "Paratha","Roti","Dal","Sabzi","Curry","Paneer","Biryani","Rice","Samosa","Pakora",
    "Idli","Dosa","Vada","Sambar","Upma","Poha","Chutney","Tea","Masala","Lassi","Thali",
    "Rupees","₹","Discount","Offer","MRP","Free","Delivery","Shop","Mall","Market","Bazaar",
    "Big","Small","Cheap","Expensive","Buy","Sell","Cart","Order","Bill","Delhi","Mumbai",
    "Bangalore","Hyderabad","Chennai","Kolkata","Pune","Goa","Jaipur",
    "Auto","Bus","Train","Metro","Station","Ticket","Airport","Cab","Uber","Ola","Rickshaw",
    "UPI","Paytm","PhonePe","GooglePay","GPay","Wallet","Recharge","Balance","Bank",
    "OTP","Aadhaar","PAN","SIM","Data","Net","Jio","Airtel","VI","BSNL","Cricket","Bat",
    "Ball","Wicket","Six","Four","Over","Run","Goal","Match","Movie",
    "Bollywood","Song","Dance","Hero","Heroine","Villain","Serial","TV","Drama","India",
    "Bharat","Holi","Diwali","Eid","Ganesh","Puja","Mandir","Masjid","Church",
    "Festival","Family","Friend","School","College","Exam","Result","Work","Office",
    "I","me","my","mine","you","your","yours","he","him","his","she","her","hers",
    "they","them","their","theirs","we","us","our","ours","it","its","someone","everyone","anyone","nobody",
    "people","person","man","woman","child","children","friend","teacher","student","family",
    "go","come","walk","run","sit","stand","eat","drink","sleep","read","write","speak","talk","listen","hear","see","watch","look","make","take",
    "give","get","put","keep","call","know","think","understand","believe","like","love","want","need","play","work","study","open","close","start","stop","begin","end","wait",
    "help","show","find","tell","ask","answer","learn","move","stay",
    "day","days","week","weeks","month","months","year","years","today","tomorrow","yesterday",
    "monday","tuesday","wednesday","thursday","friday","saturday","sunday",
    "time","hour","minute","second","morning","afternoon","evening","night","now","later","soon","early","late","always",
    "never","sometimes","often",
    "big","small","large","short","long","tall","new","old","young","good","bad","best","better","happy","sad","angry","beautiful","ugly","strong",
    "weak","fast","slow","hot","cold","warm","cool","easy","hard","difficult","simple","clean","dirty","right","wrong","true","false","same","different","important","special",
    "high","low","early","late","busy","free","empty","full",
    "book","pen","pencil","paper","bag","box","table","chair","bed","room","house","home",
    "door","window","car","bus","train","bike","road","street","shop","store","school","college",
    "university","office","work","market","hospital","doctor","nurse","food","water","milk","bread","fruit","apple","banana",
    "mango","orange","egg","fish","meat","vegetable","salt","sugar","oil","rice",
    "flower","tree","garden","park","city","village","country",
    "phone","mobile","laptop","computer","tv","internet","email","message","chat","video",
    "music","song","game","app","website","password","account","number","photo","camera","picture","selfie","post",
    "like","share","comment","news","call","battery","charger","wifi","network","signal","data","file","folder","screen","keyboard","mouse","remote","channel"
  ]

  commonTokens.forEach((token, index) => {
    vocabulary.set(token, index)
    reverseVocab.set(index, token)
  })

  return { vocabulary, reverseVocab }
}

const { vocabulary, reverseVocab } = createSimpleTokenizer()

// 2. Tokenizer
export const tokenizeText = (text) => {
  const tokens = []
  const tokenIds = []
  let i = 0

  while (i < text.length) {
    let found = false
    for (let len = Math.min(20, text.length - i); len > 0; len--) {
      const substr = text.substring(i, i + len)
      if (vocabulary.has(substr)) {
        tokens.push(substr)
        tokenIds.push(vocabulary.get(substr))
        i += len
        found = true
        break
      }
    }
    if (!found) {
      const char = text[i]
      tokens.push(char)
      tokenIds.push(vocabulary.size + char.charCodeAt(0))
      i++
    }
  }
  return { tokens, tokenIds }
}

export const decodeTokens = (tokenIds) =>
  tokenIds.map((id) => reverseVocab.get(id) ?? String.fromCharCode(id - vocabulary.size)).join("")

export const getTokenColor = (token, index) => {
  if (/^\d+$/.test(token)) return "bg-cyan-100 text-cyan-800"
  if (/^[.,:;!?()[\]{}'"]/.test(token)) return "bg-gray-100 text-gray-800"
  if (token === " " || token === "\n" || token === "\t")
    return "bg-slate-100 text-slate-800"
  const colors = [
    "bg-blue-100 text-blue-800","bg-green-100 text-green-800",
    "bg-yellow-100 text-yellow-800","bg-purple-100 text-purple-800",
    "bg-pink-100 text-pink-800","bg-indigo-100 text-indigo-800",
    "bg-red-100 text-red-800","bg-orange-100 text-orange-800"
  ]
  return colors[index % colors.length]
}
