import ModuleList from "../Modules/list";
import Status from "./Status";

function Home({pageName}: {pageName: string}) {
  return (
    <div className="row">
      <ModuleList />
      <Status pageName={pageName}/>
    </div>
  );
}
export default Home;