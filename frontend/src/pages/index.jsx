//トップレベルのページコンポーネント
import Layout from "@/components/layouts";

const Home = () => {
  return (
    <Layout>
      <div className="flex-1 bg-gray-100 p-4 shadow rounded-lg m-2">
        <h1>ホームだよ</h1>
      </div>
    </Layout>
  );
};

export default Home;
