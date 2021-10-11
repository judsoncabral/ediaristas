import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/safeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/pageTitle/PageTitle";
import UserInformation from "ui/components/data-display/userInformation/userInformation";
const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os Profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais de sua localidade"
        }
      />
      <UserInformation
        name={"Judson"}
        picture={"https://github.com/judsoncabral.png"}
        rating={5}
        description={"Natal"}
      />

      <UserInformation name={"Teste"} rating={3} description={"Deus"} />
    </div>
  );
};

export default Home;
