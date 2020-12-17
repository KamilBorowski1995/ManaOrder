import React, { useReducer, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import AppTemplate from "../../templates/AppTemplate";

import InformationElement from "../../components/molecules/InformationElement";
import ElementTable from "../../components/molecules/ElementTable";
import ButtonSquare from "../../components/atoms/ButtonSquare/ButtonSquare";
import CustomSelect from "../../components/atoms/CustomSelect/CustomSelect";

import Paragraph from "../../components/atoms/Paragraph/Paragraph";
import { selectReducer } from "../../reducers/selectConsumer.reducer";
import { selectProducts } from "../../reducers/selectProducts.reducer";
import { selectTracking } from "../../reducers/selectTracking.reducer";
import SelectOrderStatus from "../../components/atoms/Select/SelectOrderStatus";

const Wrapper = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
`;

const WrapperConsumerData = styled.div`
  position: relative;
  /* width: 100%; */
  height: 100%;
`;

const WrapperNotes = styled.div`
  position: relative;
`;

const EditOrderPage = () => {
  const history = useHistory();
  const params = useParams();

  const [stateProducts, setStateProducts] = useState([]);
  const [tracking, setTrackign] = useState([]);
  const [consumerData, setConsumerData] = useState([]);

  const [stateTracking, dispatchTracking] = useReducer(selectTracking, {});

  useEffect(() => {
    console.log(params.id);
    axios
      .get("http://localhost:5000/api/orders/order", {
        headers: {
          "auth-token": sessionStorage.getItem("auth-token"),
        },
        params: { orderId: params.id },
      })
      .then((res) => {
        const tracking = res.data[0].tracking;

        for (const [key, value] of Object.entries(tracking)) {
          dispatchTracking({
            type: "EDIT_VALUE",
            name: key,
            value: value,
          });
        }
        setConsumerData(res.data[0].consumer);
        setStateProducts(res.data[0].products);
      })
      .catch(function (error) {
        // Auth.logout(() => history.push("/"));
        console.log(error);
      })
      .then(function () {});
  }, []);

  const handleValue = (e) =>
    dispatchTracking({
      type: "EDIT_VALUE",
      name: e.target.name,
      value: e.target.value,
    });

  return (
    <AppTemplate>
      <Wrapper>
        <WrapperConsumerData>
          <div>
            <InformationElement data={consumerData.firstName} title="Imię:" />
            <InformationElement
              data={consumerData.lastName}
              title="Nazwisko:"
            />
            <InformationElement
              data={consumerData.companyName}
              title="Pełna nazwa firmy:"
            />
            <InformationElement
              data={`ul. ${consumerData.street} ${consumerData.number}, ${consumerData.code} ${consumerData.city}`}
              title="Adres:"
            />
            <InformationElement data={consumerData.NIP} title="NIP:" />
            <InformationElement
              data={consumerData.phone}
              title="Numer telefonu:"
            />
            <InformationElement data={consumerData.email} title="Email:" />
            <ElementTable
              onChange={handleValue}
              data={stateTracking.courier}
              title="Firma kurierska"
              name="courier"
            />
            <ElementTable
              onChange={handleValue}
              data={stateTracking.trackingNumber}
              title="Numer przesyłki"
              name="trackingNumber"
            />
            <SelectOrderStatus
              onChange={handleValue}
              data={stateTracking.status}
              title="Status"
              name="status"
            />
          </div>

          {/* <ButtonSquare onClick={handleClickButton}>
            Dodaj nowe zamówienie
          </ButtonSquare> */}
        </WrapperConsumerData>
        <WrapperNotes>
          <Paragraph>Zamówienie</Paragraph>
          {stateProducts.map(({ cost, nameProduct }) => (
            <InformationElement data={cost} title={nameProduct} />
          ))}
        </WrapperNotes>
      </Wrapper>
    </AppTemplate>
  );
};

export default EditOrderPage;
