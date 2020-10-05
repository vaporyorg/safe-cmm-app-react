import React, { memo } from "react";
import styled from "styled-components";

import { SideBar } from "./SideBar";
import { TokenSelectorsFragment } from "./TokenSelectorsFragment";
import { PricesFragment } from "./PricesFragment";
import { MarketPriceFragment } from "./MarketPriceFragment";
import { ErrorMessagesFragment } from "./ErrorMessagesFragment";
import { DeployStrategyButtonFragment } from "./DeployStrategyButtonFragment";
import { DeployForm } from "./DeployForm";
import { FormBackdrop } from "./FormBackdrop";

const PageLayout = styled.div`
  display: flex;
  min-width: 860px;
`;

const DeployWidget = styled.div`
  // basic dimensions
  max-width: 444px;
  min-height: 482px;

  padding: 16px 13px;

  // Some space for sidebar
  margin-right: 48px;

  // Spacing between elements
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }

  // fancy border
  border-radius: 16px;
  box-shadow: 0 20px 24px 0 rgba(0, 20, 40, 0.05),
    0 0 10px 0 rgba(0, 20, 40, 0.08);

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

function UDeployPageViewer(): JSX.Element {
  return (
    <PageLayout>
      <DeployForm>
        <DeployWidget>
          <TokenSelectorsFragment />
          <MarketPriceFragment />
          <PricesFragment />
          <ErrorMessagesFragment />
          <DeployStrategyButtonFragment />
        </DeployWidget>
        <FormBackdrop />
      </DeployForm>
      <SideBar />
    </PageLayout>
  );
}

export const DeployPageViewer = memo(UDeployPageViewer);
