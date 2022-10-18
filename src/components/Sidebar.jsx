import SocialNetworks from "./SocialNetworks";
import Avatar from "../img/PedroHenriquepd_edited3_edited.jpg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Pedro Henrique" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="https://github.com/pedrohenriquepd/Curriculo" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
