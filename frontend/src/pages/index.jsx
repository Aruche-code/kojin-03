import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  // アイデアのテキストを管理するためのステート
  const [ideaText, setIdeaText] = useState('');
  // 送信されたアイデアを表示するためのステート
  const [ideas, setIdeas] = useState([]);

  // アイデアのリストを取得する関数
  const fetchIdeas = async () => {
    try {
      const response = await axios.get('/api/ideas/get');
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // バックエンドにPOSTリクエストを送信
      const response = await axios.post('/api/ideas/post', { text: ideaText });
      // 新しいアイデアをステートに追加
      setIdeas([...ideas, response.data]);
      // フォームの入力をリセット
      setIdeaText('');
    } catch (error) {
      console.error("アイデアの送信に失敗しました:", error);
    }
  };

  return (
    <div>
      <h1>アイデア投稿フォーム</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ideaText}
          onChange={(e) => setIdeaText(e.target.value)}
          placeholder="あなたのアイデアをここに入力..."
          required
        />
        <button type="submit">送信</button>
      </form>
      <h2>投稿されたアイデア</h2>
      <ul>
        {ideas.map((idea) => (
          <li key={idea.id}>{idea.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;







