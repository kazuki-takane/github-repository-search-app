import { InputRepo } from "./InputRepo";
import { RepoList } from "./RepoList";
import { Pagination } from "./Pagination";
import { RepoDetailModal } from "./RepoDetailModal";

export default function Home() {
  return (
    <main>
      <div className="container w-11/12 max-w-screen-lg mx-auto text-center">
        <InputRepo />
        <RepoList />
        <Pagination />
      </div>
      <RepoDetailModal />
    </main>
  );
}
