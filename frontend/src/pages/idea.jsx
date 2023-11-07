import AppBar from "../components/AppBar";
import Sidebar from "../components/Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Idea() {
  // アイデアのテキストを管理するためのステート
  const [ideaText, setIdeaText] = useState("");
  // 送信されたアイデアを表示するためのステート
  const [ideas, setIdeas] = useState([]);

  // アイデアのリストを取得する関数
  const fetchIdeas = async () => {
    try {
      const response = await axios.get("/api/ideas");
      setIdeas(response.data);
    } catch (error) {
      console.error("アイデアの取得に失敗しました:", error);
    }
  };

  // コンポーネントがマウントされた時にアイデアのリストを取得
  useEffect(() => {
    fetchIdeas();
  }, []);

  // アイデアを送信する関数
  const handleIdeaSubmission = async () => {
    try {
      const response = await axios.post("/api/ideas", { text: ideaText });
      // 新しいアイデアをステートに追加
      setIdeas([...ideas, response.data]);
      // フォームの入力をリセット
      setIdeaText("");
    } catch (error) {
      console.error("アイデアの送信に失敗しました:", error);
    }
  };

  // アイデアを削除する関数
  const handleIdeaDelete = async (id) => {
    try {
      await axios.delete(`/api/ideas/${id}`);
      setIdeas(ideas.filter((idea) => idea.id !== id));
    } catch (error) {
      console.error("アイデアの削除に失敗しました:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <AppBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 p-4 overflow-auto">
          <div className="flex-1 bg-gray-100 p-4 shadow rounded-lg m-2">
            <h1 className="text-xl font-bold mb-4">アイデアを作成</h1>
            <input
              type="text"
              value={ideaText}
              onChange={(e) => setIdeaText(e.target.value)}
              className="border p-2 rounded w-full mb-4"
              placeholder="あなたのアイデアをここに入力..."
              required
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleIdeaSubmission}
            >
              送信
            </button>
            <h2 className="text-lg font-bold mt-6">アイデア一覧</h2>
            <ul className="list-disc pl-5">
              {ideas.map((idea) => (
                <li key={idea.id} className="mb-2">
                  {idea.text}
                  <button
                    className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleIdeaDelete(idea.id)}
                  >
                    削除
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
