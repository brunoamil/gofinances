import React, { useState } from "react";

import { Button } from "../../components/Forms/Button";
import { CategorySelect } from "../../components/Forms/CategorySelect";
import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";

export function Register() {
  const [transactionType, setTransactionType] = useState("");

  function handleTransactionsTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Ṕreço" />
          <TransactionsTypes>
            <TransactionTypeButton
              isActive={transactionType === "up"}
              title="Income"
              type="up"
              onPress={() => handleTransactionsTypeSelect("up")}
            />
            <TransactionTypeButton
              isActive={transactionType === "down"}
              title="Outcome"
              type="down"
              onPress={() => handleTransactionsTypeSelect("down")}
            />
          </TransactionsTypes>
          <CategorySelect title="Categoria" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
