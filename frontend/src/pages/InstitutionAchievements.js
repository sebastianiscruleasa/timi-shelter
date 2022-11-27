import React, { useState } from "react";
import { Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Icon from "@mui/material/Icon";
import NoDrinksIcon from "@mui/icons-material/NoDrinks";

export function InstitutionAchievements() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "80vw",
        height: "70vh",
        margin: "10px 160px 10px 160px",
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
        <h6>
          <br></br>Acestea sunt realizarile institutiei dumneavoastra!
        </h6>

        <div>
          <span
            style={{
              marginLeft: 50,
              marginRight: 80,
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Categorie
          </span>
          <span
            style={{
              marginLeft: 50,
              marginRight: 50,
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Status
          </span>
          <span
            style={{
              marginLeft: 50,
              marginRight: 50,
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Insignă
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
          alignContent: "center",
          marginLeft: "50px",
          marginRight: "50px",
        }}
      >
        <span style={{ fontSize: 18, fontWeight: "700" }}>
          Ianuarie - Iunie:{" "}
        </span>
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
          <CheckCircleOutlineIcon />
          <span style={{ marginLeft: 20 }}>
            Ai oferit o a doua sansa pentru 10 persoane{" "}
          </span>
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
              Angajare
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
                alignSelf: "center",
              }}
            >
              Ai reușit!
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
                alignSelf: "center",
              }}
            >
              <Icon>WorkHistoryIcon</Icon>
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
          alignSelf: "center",
        }}
      >
        <div>
          <CheckCircleOutlineIcon color="disabled" />
          <span style={{ marginLeft: 20 }}>
            Ai donat mancare pentru 20 de oameni
          </span>
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
              Donatii
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
              În progres
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
              <Icon>N </Icon>
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
          <span style={{ marginLeft: 20 }}>Inregistrat de o lună pe site</span>
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
              Contul tău
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
              În progres
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
              <Icon>S</Icon>
            </span>
          </div>
        </div>
      </div>
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
        <span style={{ fontSize: 18, fontWeight: "700" }}>
          Iulie - Decembrie:{" "}
        </span>
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
          <span style={{ marginLeft: 20 }}>
            Doneaza medicamente pentru minim 5 persoane
          </span>
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
              Donatii
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
              Neînceput
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
              <Icon>Y </Icon>
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
          <span style={{ marginLeft: 20 }}>
            Ajuta minim 50 de oameni sa isi reabiliteze imaginea
          </span>
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
              Angajare
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
              Neînceput
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
              <Icon>R</Icon>
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
          <span style={{ marginLeft: 20 }}>
            Ofera cazare temporara pentru 5 oameni
          </span>
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
              Cazare
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
              Neînceput
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
              <Icon>I</Icon>
            </span>
          </div>
        </div>
      </div>
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
      ></div>
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
    </div>
  );
}
