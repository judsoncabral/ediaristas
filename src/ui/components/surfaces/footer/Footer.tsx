import React from "react";
import {
  AppList,
  FooterContainer,
  FooterStyled,
  FooterTitle,
} from "./Footer.style";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={"body2"} sx={{ marginTop: "16px" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            dolores cum quam aliquam deserunt perspiciatis vitae nisi sunt id
            reprehenderit illo quod, praesentium accusantium vel aperiam,
            tempora optio quia inventore?
          </Typography>
        </Box>
        <Box>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
              </a>
            </li>
          </AppList>
        </Box>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
