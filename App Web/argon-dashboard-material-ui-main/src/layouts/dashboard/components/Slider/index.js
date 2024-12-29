import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Card from "@mui/material/Card";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import axios from "axios";

SwiperCore.use([Autoplay, Navigation]);

function Slider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/dashboard/destinations');
        setDestinations(response.data.data);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };
    fetchDestinations();
  }, []);

  return (
    <Card sx={{ position: "relative", display: "block", height: "100%", overflow: "hidden" }}>
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        autoplay={{ delay: 5000 }}
        speed={800}
        spaceBetween={0}
        slidesPerView={1}
        loop
        style={{ height: "100%" }}
      >
        {destinations && destinations.map((destination, index) => (
          <SwiperSlide key={index}>
            <ArgonBox
              sx={{
                position: "relative",
                backgroundImage: `url(${destination.images && destination.images.length > 0 ? destination.images[0] : "https://via.placeholder.com/150"})`,
                backgroundSize: "cover",
                height: "100%",
              }}
            >
              <ArgonBox position="absolute" bottom={16} ml={6} py={2.5} textAlign="left" width="80%">
                <ArgonBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="32px"
                  height="32px"
                  bgcolor="white"
                  borderRadius="md"
                  textAlign="center"
                  mb={2}
                >
                  <ArgonTypography variant="caption" color="dark" lineHeight={0}>
                    <ArgonBox component="i" color="dark" className={destination.iconClass} />
                  </ArgonTypography>
                </ArgonBox>
                <ArgonTypography variant="h5" color="white" mb={0.5}>
                  {destination.id_ville.name}
                </ArgonTypography>
                {/* <ArgonTypography variant="body2" color="white">
                  {destination.description}
                </ArgonTypography> */}
              </ArgonBox>
            </ArgonBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
}

Slider.propTypes = {
  destinations: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      iconClass: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Slider;
