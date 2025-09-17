// import { useEffect, useState } from "react";

import { Github,  Heart, LinkedinIcon } from "lucide-react";

export default function Header() {
  // const [likes, setLikes] = useState(() => {
  //   // Initialize directly from localStorage (prevents flicker/reset)
  //   const savedLikes = localStorage.getItem("verba_likes");
  //   return savedLikes ? parseInt(savedLikes, 10) : 0;
  // });
  // const [hasLiked, setHasLiked] = useState(() => {
  //   return localStorage.getItem("verba_user_liked") === "true";
  // });

  // // Keep likes in sync with localStorage
  // useEffect(() => {
  //   localStorage.setItem("verba_likes", likes);
  // }, [likes]);

  // const handleLike = () => {
  //   if (hasLiked) return; // block multiple likes
  //   setLikes((prev) => prev + 1);
  //   setHasLiked(true);
  //   localStorage.setItem("verba_user_liked", "true");
  // };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-4 px-4">
      {/* Title */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          <span className="text-orange-600">Verba</span> - Tokenizer Project
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Explore tokenization & decoding interactively.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center md:justify-end gap-3">
        {/* GitHub */}
        <a
          href="https://github.com/vivek-650/verba-tokenizer"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 border rounded-lg hover:bg-gray-500 text-sm md:text-base"
        >
          <Github className="w-5 h-5" /> GitHub
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/curiousvivek"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 border rounded-lg hover:bg-blue-400 text-sm md:text-base"
        >
          <LinkedinIcon className="w-5 h-5" /> LinkedIn
        </a>

        {/* Like Button */}
        {/* <button
          onClick={handleLike}
          disabled={hasLiked}
          className={`flex items-center gap-2 px-3 py-2 border rounded-lg text-sm md:text-base transition ${
            hasLiked
              ? "bg-pink-100 text-pink-600 cursor-not-allowed"
              : "hover:bg-pink-50"
          }`}
        >
          <Heart
            className={`w-5 h-5 ${
              hasLiked ? "fill-pink-500 text-pink-500" : "text-pink-500"
            }`}
          />
          <span>
            {likes} {likes === 1 ? "Like" : "Likes"}
          </span>
        </button> */}
      </div>
    </div>
  );
}
