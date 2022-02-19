import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}
export function Dashboard() {
  const [data, setData] = useState<DataListProps[]>([]);

  async function loadTransaction() {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    console.log("response", response);
    // const transactions = response ? JSON.parse(response) : [];

    // const transactionsFormatted: DataListProps[] = transactions.map(
    //   (item: DataListProps) => {
    //     const amount = Number(item.amount).toLocaleString("pt-BR", {
    //       style: "currency",
    //       currency: "BRL",
    //     });

    //     const dateFormatted = Intl.DateTimeFormat("pt-BR", {
    //       day: "2-digit",
    //       month: "2-digit",
    //       year: "2-digit",
    //     }).format(new Date(item.date));

    //     return {
    //       id: item.id,
    //       name: item.name,
    //       amount,
    //       type: item.type,
    //       category: item.category,
    //       date: "21-05-2020",
    //     };
    //   }
    // );
    // setData(transactionsFormatted);
  }

  useEffect(() => {
    loadTransaction();
  }, []);

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/8558185?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Bruno</UserName>
            </User>
          </UserInfo>
          <GestureHandlerRootView>
            <LogoutButton onPress={() => {}}>
              <Icon name="power" />
            </LogoutButton>
          </GestureHandlerRootView>
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada 04 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída 04 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.400,00"
          lastTransaction="01 à 06 de abril"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
