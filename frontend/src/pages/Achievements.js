import React, { useState } from "react";
import { Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export function Achievements() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "80vw",
        height: "70vh",
        margin: "10px 160px 10px 160px",
        border: "solid 1px",
        borderRadius: 6,
        flexDirection: "column",
      }}
    >
      <div
        style={{
          marginTop: 20,
          marginBottom: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: 50,
          //   marginRight: 50,
        }}
      >
        <Button
          variant="outlined"
          size="medium"
          sx={{ fontSize: 16, textTransform: "none", width: 100 }}
        >
          Add task
        </Button>
        <div>
          <span
            style={{
              marginLeft: 50,
              marginRight: 80,
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            Scope
          </span>
          <span
            style={{
              marginLeft: 50,
              marginRight: 50,
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            Status
          </span>
          <span
            style={{
              marginLeft: 50,
              marginRight: 50,
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            Press
          </span>
        </div>
      </div>
      <div
        style={{ backgroundColor: "gray", height: "1px", width: "100%" }}
      ></div>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "50px",
          marginRight: "50px",
        }}
      >
        <span style={{ fontSize: 18, fontWeight: "700" }}>Jan - March:</span>
      </div>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#000",
          height: "2px",
          marginLeft: "50px",
          marginRight: "50px",
        }}
      />
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "row",
          marginLeft: "50px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <CheckCircleOutlineIcon color="disabled" />
          <span style={{ marginLeft: 20 }}>New user workflow</span>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <span
              style={{
                backgroundColor: "#AE599E",
                borderRadius: 25,
                marginLeft: 50,
                marginRight: 50,
                padding: "10px",
                color: "#fff",
              }}
            >
              No drinking
            </span>
          </div>
          <div>
            <span
              style={{
                backgroundColor: "#0092AD",
                borderRadius: 25,
                marginLeft: 50,
                marginRight: 50,
                padding: "10px",
                width: "60px",
                color: "#fff",
              }}
            >
              Did it
            </span>
          </div>
          <div>
            <span
              style={{
                backgroundColor: "#005AA6",
                borderRadius: 25,
                marginLeft: 50,
                marginRight: 50,
                padding: "10px",
                width: "60px",
                color: "#fff",
              }}
            >
              Yes
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "row",
          marginLeft: "50px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <CheckCircleOutlineIcon color="disabled" />
          <span style={{ marginLeft: 20 }}>New user workflow</span>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <span
              style={{
                backgroundColor: "#AE599E",
                borderRadius: 25,
                marginLeft: 50,
                marginRight: 50,
                padding: "10px",
                color: "#fff",
              }}
            >
              No drinking
            </span>
          </div>
          <div>
            <span
              style={{
                backgroundColor: "#0092AD",
                borderRadius: 25,
                marginLeft: 50,
                marginRight: 50,
                padding: "10px",
                width: "60px",
                color: "#fff",
              }}
            >
              Did it
            </span>
          </div>
          <div>
            <span
              style={{
                backgroundColor: "#005AA6",
                borderRadius: 25,
                marginLeft: 50,
                marginRight: 50,
                padding: "10px",
                width: "60px",
                color: "#fff",
              }}
            >
              Yes
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "row",
          marginLeft: "50px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <CheckCircleOutlineIcon color="disabled" />
          <span style={{ marginLeft: 20 }}>New user workflow</span>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <span
              style={{
                backgroundColor: "#AE599E",
                borderRadius: 25,
                marginLeft: 50,
                marginRight: 50,
                padding: "10px",
                color: "#fff",
              }}
            >
              No drinking
            </span>
          </div>
          <div>
            <span
              style={{
                backgroundColor: "#0092AD",
                borderRadius: 25,
                marginLeft: 50,
                marginRight: 50,
                padding: "10px",
                width: "60px",
                color: "#fff",
              }}
            >
              Did it
            </span>
          </div>
          <div>
            <span
              style={{
                backgroundColor: "#005AA6",
                borderRadius: 25,
                marginLeft: 50,
                marginRight: 50,
                padding: "10px",
                width: "60px",
                color: "#fff",
              }}
            >
              Yes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
