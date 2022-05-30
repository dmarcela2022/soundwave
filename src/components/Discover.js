import { Button, Box, Typography } from "@mui/material";
import imgCover from "../img/covers.jpg";
import microphone from "../img/microphone.svg";
import albums from "../img/albums.svg";
import more from "../img/more.svg";

function Discover() {
  return (
    <section
      className="Discover"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          paragraph
          color="#FFFFFD"
          style={{ fontFamily: "Poppins", fontSize: "3.5rem" }}
        >
          Discover new music
        </Typography>

        <Box style={{ display: "flex" }}>
          <Button
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              backgroundColor: "#202027",
              width: "6rem",
              height: "6rem",
              margin: "0.5rem",
            }}
          >
            <img src={microphone} alt="microphone" />
            <Typography
              variant="body2"
              style={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                color: "#FFFFFD",
                textTransform: "capitalize",
              }}
            >
              {" "}
              Charts
            </Typography>
          </Button>

          <Button
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              backgroundColor: "#202027",
              width: "6rem",
              height: "6rem",
              margin: "0.5rem",
            }}
          >
            <img src={albums} alt="albums" />
            <Typography
              variant="body2"
              style={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                color: "#FFFFFD",
                textTransform: "capitalize",
              }}
            >
              Albums
            </Typography>
          </Button>

          <Button
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              backgroundColor: "#202027",
              width: "6rem",
              height: "6rem",
              margin: "0.5rem",
            }}
          >
            <img src={more} alt="more" />
            <Typography
              variant="body2"
              style={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                color: "#FFFFFD",
                textTransform: "capitalize",
              }}
            >
              More
            </Typography>
          </Button>
        </Box>
        <p>
          By joing you can benefit by listening to the latest album released.
        </p>
      </Box>
      <Box>
        <img className="imgCover" src={imgCover} alt="coverimg1" />
      </Box>
    </section>
  );
}
export default Discover;
