import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/safeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/pageTitle/PageTitle";
import UserInformation from "ui/components/data-display/userInformation/UserInformation";
import TextFieldMask from "ui/components/input/textFieldMask/TextFieldMask";
import { Button, Typography, Container, CircularProgress } from "@mui/material";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "ui/styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";
import { typography } from "@mui/system";
const Home: NextPage = () => {
  const {
    cep,
    setCep,
    cepValido,
    buscasProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os Profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais de sua localidade"
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          {erro && <Typography color={"error"}> {erro}</Typography>}
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscasProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscas"}
          </Button>
        </FormElementsContainer>
        {buscaFeita &&
          (diaristas.length > 0 ? (
            <>
              <ProfissionaisPaper>
                <ProfissionaisContainer>
                  {diaristas.map((item, index) => {
                    return (
                      <UserInformation
                        key={index}
                        name={item.nome_completo}
                        picture={item.foto_usuario}
                        rating={item.reputacao}
                        description={item.cidade}
                      />
                    );
                  })}
                </ProfissionaisContainer>
              </ProfissionaisPaper>
              <Container sx={{ textAlign: "center" }}>
                {diaristasRestantes > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ...E mais {diaristasRestantes}{" "}
                    {diaristasRestantes > 1
                      ? "profissionais atendem ao seu endereço."
                      : "profissional atende ao seu endereço"}
                  </Typography>
                )}

                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ mt: 5 }}
                >
                  Contratar um profissional
                </Button>
              </Container>
            </>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Ainda não temos nenhuma diaristas em sua região
            </Typography>
          ))}
      </Container>
    </div>
  );
};

export default Home;
