import React from "react";
// 共通コンポーネント
// AppBar コンポーネント: アプリケーションのヘッダーバーを表示する
// Props:
// - setDrawerOpen: ドロワーの状態を設定する関数
const AppBar = () => {
  return (
    <header className="flex-shrink-0 bg-sky-400 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold">dev-next</h1>
      </div>
    </header>
  );
};

export default AppBar;
