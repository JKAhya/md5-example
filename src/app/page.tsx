"use client";

import { useState } from "react";
const md5 = require("md5");

export default function Home() {
  const [userText, setUserText] = useState("");
  const [results, setResults] = useState<string[]>([]);

  function transfer() {
    if (userText.trim() !== "") {
      setResults((prev) => [...prev, md5(userText)]);
      setUserText("");
    }
  }

  return (
    <div>
      <div className="text-5xl nh text-center mt-35">암호 함수</div>
      <div className="w-full flex justify-center items-center">
        <div className="my-35 w-[95%] rounded-4xl nh text-center py-20 bg-gray-100">
          <div className="nh text-xl">
            암호 함수를 통해 변환할&nbsp;
            <wbr />
            글을 입력해주세요.
          </div>
          <input
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            type="text"
            placeholder="변환할 글 입력"
            className="bg-gray-200 w-[70%] mt-3 h-12 rounded-4xl px-3"
          ></input>
          <button
            onClick={transfer}
            className="ml-2 rounded-3xl w-[15%] bg-orange-300 nh text-gray-950 h-12"
          >
            변환
          </button>
          <div className="nh text-start w-[85%] rounded-3xl mt-5 px-5 bg-gray-200 justify-self-center flex-none">
            <div className="pt-2 pb-2" id="result">
              변환 기록
              {results.map((hash, idx) => (
                <div key={idx}>{hash}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
