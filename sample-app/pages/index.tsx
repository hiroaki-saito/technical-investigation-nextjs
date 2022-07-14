import type { NextPage } from "next";
import HtmlHead from "../main/src/components/common/HtmlHead";
import CommonTypography from "../main/src/components/common/CommonTypography";
import CommonCheckBox from "../main/src/components/common/CommonCheckBox";
import { ChakraProvider } from "@chakra-ui/react";
import styled from "styled-components";
import Header from "../main/src/components/common/CommonTypography";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import htmlHead from "../main/src/components/common/HtmlHead";

const Home: NextPage = () => {
  return (
    <>
      <ChakraProvider>
        <HtmlHead></HtmlHead>
        <CommonTypography
          message={"Title"}
          fontSize={"3vw"}
          textAlign={"center"}
        ></CommonTypography>
        <CommonTypography
          message={"都道府県"}
          fontSize={"1vw"}
          textAlign={"left"}
        ></CommonTypography>
        <CommonCheckBox message={"テスト"}></CommonCheckBox>
      </ChakraProvider>
    </>
  );
};

export default Home;
