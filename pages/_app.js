import { useState, useEffect, useRef } from "react";
import "../styles/globals.css";
import "../styles/slider.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "@mui/system";
import { createMuiTheme } from "../lib/createMuiTheme";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../lib/createEmotionCache";
import PropTypes from "prop-types";
import Router from "next/router";
import { CircularProgress, Box } from "@mui/material";

const apiHost = process.env.NEXT_PUBLIC_API_HOST;
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [data, setData] = useState();
  const [collegeList, setCollegeList] = useState();
  const fetchDataRef = useRef(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoading(true);
    });

    Router.events.on("routeChangeComplete", (url) => {
      setIsLoading(false);
    });

    Router.events.on("routeChangeError", (url) => {
      setIsLoading(false);
    });
  }, [Router]);

  useEffect(() => {
    if (fetchDataRef.current) return;
    fetchDataRef.current = true;
    let query = encodeURIComponent(
      `*[_type in ["nav", "homePage", "reviews"]]`
    );
    fetch(apiHost + query)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
    let collegeListQuery = encodeURIComponent(
      `*[_type == "collegeAndCountry"]`
    );
    fetch(apiHost + collegeListQuery)
      .then((res) => res.json())
      .then((data) => setCollegeList(data.result))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6114f086649e0a0a5cd0c9cd/1fcssn43d";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
    Tawk_API.onLoad = function () {
      console.log("chat loaded");
      Tawk_API.setAttributes(
        {
          name: "New-Lyf",
          email: "mbbsadmissionsinabroad@gmail.com",
          hash: "hash value",
        },
        function (error) {}
      );
    };
  }, []);

  let sliderData =
    data !== undefined &&
    data.result.find((item) => item.title === "Home Page Slider");
  let testimonials =
    data !== undefined &&
    data.result.find((item) => item.title === "Testimonials");
  let homePageContents =
    data !== undefined && data.result.find((item) => item.title === "Contents");

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={createMuiTheme}>
        <Layout data={data}>
          {isLoading ? (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ p: "3em" }}
            >
              <CircularProgress size={40} />
            </Box>
          ) : (
            <Component
              {...pageProps}
              sliderData={sliderData}
              testimonials={testimonials}
              collegeList={collegeList}
              homePageContents={homePageContents}
            />
          )}
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
