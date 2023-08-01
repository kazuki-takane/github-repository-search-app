import { InputRepo } from "./InputRepo";
import { RepoList } from "./RepoList";
import { RepoDetailDialog } from "../components/RepoDetailDialog";
import { LoginUserDialog } from "@/components/LoginUserDialog";

export default function Home() {
  return (
    <main>
      <div className="container w-11/12 max-w-screen-lg mx-auto text-center">
        <InputRepo />
        <RepoList />
      </div>
      <LoginUserDialog />
      <RepoDetailDialog />
    </main>
  );
}
