import React from "react";
import {
  Card,
  CardContent,
  CircularProgress,
  Fade,
} from "@material-ui/core";

export default function MsgCard(props) {
  const { bootloader, process, loading, mycommand } = props;
  const sampleJSON = {
    object: process,
  };
  return (
      <div>
        {!loading && (
            <div>
              <Card>
                <CardContent>
                  <div>
                    <h3>command:</h3>
                    <div> {mycommand}</div>
                    <h3>process arguments: </h3>
                    {/* text */}
                    {Object.keys(sampleJSON.object).map((key, i) => (
                        <p key={i}>
                          <span>{key}</span>
                          <span>: {sampleJSON.object[key]}</span>
                        </p>
                    ))}

                    <h3>bootloader reply:</h3>
                    {/* text */}
                    <div>{bootloader}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
        )}
        {loading && (
            <div>
              <center>
                <Fade
                    in={loading}
                    style={{
                      transitionDelay: loading ? "800ms" : "0ms",
                    }}
                    unmountOnExit>
                  <CircularProgress />
                </Fade>
              </center>
            </div>
        )}
      </div>
  );
}
