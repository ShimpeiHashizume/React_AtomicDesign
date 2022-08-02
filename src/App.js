import { PrimaryButton } from "./componets/atoms/button/PrimaryButton";
import { SecondaryButton } from "./componets/atoms/button/SecondaryButton";
import { SearchInput } from "./componets/molecules/SearchInput";
import { UserCard } from "./componets/organism/User/UserCard";
import "./styles.css";

const user = {
  name: "ずめ",
  image: "https://source.unsplash.com/Mv9hjnEUHR4",
  email: "1111@example.com",
  phone: "000-9999-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://www.google.com/"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput></SearchInput>
      <UserCard user={user} />
    </div>
  );
}
