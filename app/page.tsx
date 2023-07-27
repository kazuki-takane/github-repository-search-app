import { InputRepo } from "./InputRepo";
import { RepoList } from "./RepoList";
import { Pagination } from "./Pagination";

export default function Home() {
  return (
    <main>
      <InputRepo />
      <RepoList />
      <Pagination />
    </main>
  );
}
