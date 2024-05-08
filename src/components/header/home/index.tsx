import React, { useState } from "react";
import { Menu } from "react-native-paper";

import {
  ButtonMenu,
  Container,
  ItemMenuContainer,
  LabelItemMenu,
  Title,
} from "./styles";
import { DotsMenuIcon, LogoutIcon } from "@assets/icons";
import { useAuth } from "@hooks/auth";
import { useTheme } from "styled-components";

export const HeaderHome: React.FC = () => {
  const { signOut } = useAuth();
  const theme = useTheme();

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const menuItemContent = (
    <ItemMenuContainer>
      <LogoutIcon />
      <LabelItemMenu>Sair</LabelItemMenu>
    </ItemMenuContainer>
  );

  return (
    <Container>
      <Title>BRQ Movies</Title>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        contentStyle={{
          marginTop: 32,
          backgroundColor: theme.colors.neutral,
        }}
        anchor={
          <ButtonMenu isOpen={visible} onPress={openMenu}>
            <DotsMenuIcon color={!visible ? theme.colors.grey : undefined} />
          </ButtonMenu>
        }
      >
        <Menu.Item onPress={signOut} title={menuItemContent} />
      </Menu>
    </Container>
  );
};
