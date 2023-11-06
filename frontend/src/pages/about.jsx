import Sidebar from "../components/Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function About() {
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
    <div className="flex">
      <Sidebar />
      <div className="pl-2">
        <h1>アイデアタイトル</h1>
        <input
          type="text"
          value={ideaText}
          onChange={(e) => setIdeaText(e.target.value)}
          placeholder="あなたのアイデアをここに入力..."
          required
        />
        <button onClick={handleIdeaSubmission}>送信</button>
        <h2>アイデア一覧</h2>
        <ul>
          {ideas.map((idea) => (
            <li key={idea.id}>
              {idea.text}
              <button onClick={() => handleIdeaDelete(idea.id)}>削除</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
